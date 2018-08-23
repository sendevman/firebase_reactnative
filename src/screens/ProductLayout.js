/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Animated, AsyncStorage, Dimensions, TouchableHighlight } from 'react-native';
import { createStackNavigator, SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';

// My Customs
import Icon from '../assets/images/Icon';
import LogoTitle from './components/LogoTitle';
import GradientHeader from './components/GradientHeader';
import ProductsNearSlide from '../components/ProductsNearSlide/ProductsNear';

// My Routes
import RoutesProducts from '../routes/Products'

// Action
import { setAreaInfo, setLocationData, setProductInfo, setProductAccsInfo } from '../actions/Current';
import { setProductsNearInfo } from '../actions/ProductsNear';

var { height } = Dimensions.get('window');
var count = 0;

class ProductLayoutScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animatedValue: new Animated.Value(0)
    };
  
    try {
      AsyncStorage.setItem('passOnboarding', 'passed');
    } catch (error) {
      // Error saving data
    }
  }

  getProductID(zone_id) {
    const areasRef = firebase.firestore().collection('areas');
    areasRef.where('id', '==', zone_id).get()
    .then(snapshot => {
      const arrAreas = snapshot.docs.map(doc => doc.data());
      this.props.dispatch(setAreaInfo(arrAreas));
      if (arrAreas.length > 0) {
        this.getFirstProductDetail(arrAreas);
      }
    });
  }

  getFirstProductDetail(arrAreas) {
    if (arrAreas[0] != undefined) {
      const arrproducts = arrAreas[0].products;
      const productRef = firebase.firestore().collection('products');

      Promise.all(
        arrproducts.map(productID => new Promise((resolve, reject) => {
          productRef.doc(productID).get()
          .then(product => {
            if (!product.exists) resolve({});

            const productData = product.data();
            productData.id = productID;

            productRef.doc(productID).collection('web-reviews').get()
            .then(reviews => {
              var webReviews = [];

              reviews.forEach(review => {
                const reviewData = review.data();
                webReviews.push(reviewData);
              });

              productData.webReviews = webReviews.sort((a, b) => {
                if (a.position < b.position) return -1;
                if (a.position > b.position) return 1;
                return 0;
              });

              resolve(productData);
            })
            .catch(err => { console.log('Error getting documents', err); });
          })
          .catch(error => reject(error));
        }))
      )
      .then(results => {
        this.props.dispatch(setProductsNearInfo(results));
        this.props.dispatch(setProductInfo(results[1]));
        this.setCompatibleAccessories(results[1].accessories);
        // console.log("log event ======= : ", {"pFirebaseId":this.props.firebaseid, "pDeviceModel":results[0].model, "pDeviceManufacture":results[0].manufacture, "pResearchTab":"info"});
        // firebase.analytics().logEvent("deviceViewed", {"pFirebaseId":this.props.firebaseid, "pDeviceModel":results[0].model, "pDeviceManufacture":results[0].manufacture, "pResearchTab":"info"});
        setTimeout(() => this.forceUpdate(), 300);
      })
      .catch(error => {})
    } else {
      // Set Null for Non-Zone
    }
  }

  setCompatibleAccessories(compatibleAccs) {
    if (typeof compatibleAccs == "undefined" || compatibleAccs.length <= 0 ) return false;
    const accsRef = firebase.firestore().collection('accessories');
    Promise.all(
      compatibleAccs.map(accessoryId => new Promise((resolve, reject) => {
        accsRef.doc(accessoryId).get()
        .then(accessory => {
          if (!accessory.exists) resolve({});
          const accessoryData = accessory.data();
          accessoryData.id = accessoryId;
          resolve(accessoryData);
        })
        .catch(err => { console.log('Error getting documents', err); });
      }))
    )
    .then(results => {
      let data = { featured: results.slice(0, 4), fullList: this.orderFullList(results) };
      this.props.dispatch(setProductAccsInfo(data));
    })
    .catch(error => {});
  }

  orderFullList(accsFullList) {
    let sortedList = accsFullList.sort((a, b) => {
      if (a.category < b.category) return -1;
      if (a.category > b.category) return 1;
      return 0;
    });
    let newItems = [];
    sortedList.forEach((obj,index) => {
      if (index === 0) {
        newItems.push({ name: obj.categoryName, type: obj.category, items: [obj] });
      } else {
        let last = newItems[newItems.length - 1];

        if (obj.category === last.type) newItems[newItems.length - 1].items.push(obj);
        else newItems.push({ name: obj.categoryName, type: obj.category, items: [obj] });
      }
    });
    return newItems;
  }

  setCurrentProduct(productId) {
    const { productsNear } = this.props;
    if (!productsNear || productsNear.length === 0) return;
    const match = productsNear.filter(product => product.id === productId);
    this.props.dispatch(setProductInfo(match.length > 0 ? match[0] : {}));
    this.setCompatibleAccessories(match.length > 0 ? match[0].accessories : []);
    // console.log("log event ======= : ", {"pFirebaseId":this.props.firebaseid, "pDeviceModel":match[0].model, "pDeviceManufacture":match[0].manufacture, "pResearchTab":"info"});
    // firebase.analytics().logEvent("deviceViewed", {"pFirebaseId":this.props.firebaseid, "pDeviceModel":match[0].model, "pDeviceManufacture":match[0].manufacture, "pResearchTab":"info"});
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.locationData.zone_id !== nextProps.locationData.zone_id) {
      let zone_id = nextProps.locationData.zone_id;
      this.props.dispatch(setProductInfo({}));
      this.props.dispatch(setProductsNearInfo([]));
      setTimeout(() => this.forceUpdate(), 100);
      this.getProductID(zone_id);
    }
  }

  static navigationOptions = ({ navigation }) => {
    let heightPiv = navigation.getParam('heightHeader');
    let heightHeader = (typeof heightPiv === "undefined") ? 56 : heightPiv;

    return {
      headerTitle: <LogoTitle />,
      header: props => <GradientHeader {...props} />,
      headerStyle: { backgroundColor: 'transparent', overflow: 'hidden', height: heightHeader },
      headerLeft: (
        <TouchableHighlight style={{ marginLeft: 16 }} onPress={() => navigation.openDrawer()}>
          <Icon name="Menu" width="24" height="24" fill="#FFF" viewBox="0 0 24 24" />
        </TouchableHighlight>
      ),
      headerRight: (
        <TouchableHighlight style={{ marginRight: 16 }} >
          <Icon name="Menu" width="24" height="24" fill="transparent" viewBox="0 0 24 24" />
        </TouchableHighlight>
      )
    };
  };

  zone() {
    let data = {
      lat: "35.000",
      lng: "-80.000",
      height: "1",
      ts: "2018-07-09",
      floor_id: "1348",
      zone_id: 3903
    }
    let data1 = {
      lat: "-35.000",
      lng: "-80.000",
      height: "-1",
      ts: "2018-07-09",
      floor_id: "-1348",
      zone_id: 3902
    }
    count++;
    this.props.dispatch(setLocationData(count%2 === 0 ? data : data1));
  }

  render() {
    const { productsNear } = this.props;

    return (
      <SafeAreaView forceInset={{ top: 'always' }} style={{ backgroundColor: '#FFF' }}>
        <ProductsNearSlide
          animatedValue={this.state.animatedValue}
          onProductIdChange={productId => this.setCurrentProduct(productId)}
          currentProducts={productsNear}
          zone={this.zone.bind(this)} />

        <Animated.View style={{ width: '100%', height: height - 174 }}>
          <RoutesProducts onScrollLayout={this.state.animatedValue} />
        </Animated.View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  const { common, current, productsNear } = state;

  return { firebaseid: common.firebaseid, locationData: current.position, productsNear: productsNear.productsNear };
}

const ProductLayout = createStackNavigator(
  {
    Root: { screen: connect(mapStateToProps)(ProductLayoutScreen) }
  },
  {
    headerMode: 'none'
  }
);

export default ProductLayout;
