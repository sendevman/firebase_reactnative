/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Animated, AsyncStorage, Dimensions, TouchableHighlight, TouchableOpacity, View, Text, Image, TouchableWithoutFeedback, Modal } from 'react-native';
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
import { setProductsNearInfo, setProductsAllInfo } from '../actions/ProductsNear';

var { height, width } = Dimensions.get('window');
var count = 0;

class ProductLayoutScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animatedValue: new Animated.Value(0),
      enterZone: true,
      walkbaseId: 0
    };

    this.getAllProductDetail();
    // this.setStorageData();
    this.getAreaData();
  }
  getAreaData() {
    const { navigation } = this.props;
    const area = navigation.getParam('areaData');
    const arrAreas = [];
    arrAreas.push(area);
    this.props.dispatch(setProductInfo({}));
    this.props.dispatch(setProductsNearInfo([]));
    setTimeout(() => this.forceUpdate(), 100);
    this.props.dispatch(setAreaInfo(arrAreas));
    if (arrAreas.length > 0) {
      this.getFirstProductDetail(arrAreas);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.walkbaseId !== this.state.walkbaseId) {

    }
  }

  setStorageData = async () => {
    try {
      await AsyncStorage.setItem('passOnboarding', "1");
    } catch (error) {
      // Error saving data
      console.log(error);
    }
    this.getAllProductDetail();
    this.setStorageData();
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

  getAllProductDetail() {
    const productRef = firebase.firestore().collection('products');
    productRef.get()
      .then(snapshot => {
        const ref_path = snapshot.docs.map(doc => doc.ref.path);
        const productList = snapshot.docs.map(doc => doc.data());
        var products = [];
        for (i = 0; i < productList.length; i++) {
          var data = productList[i];
          data.id = ref_path[i].split("/")[1];
          products.push(data);
        }
        this.props.dispatch(setProductsAllInfo(products));
      })

  }

  getFirstProductDetail(arrAreas) {
    if (arrAreas[0] != undefined) {
      console.log("---1----", arrAreas);
      const arrproducts = arrAreas[0].products;
      const productRef = firebase.firestore().collection('products');

      console.log("----2---", arrproducts);
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
          console.log("****", results);
          this.props.dispatch(setProductsNearInfo(results));
          let tmpData = results[1];
          tmpData.title = "title";
          this.props.dispatch(setProductInfo(tmpData));
          this.setCompatibleAccessories(results[1].accessories);
          // firebase.analytics().logEvent("deviceViewed", {"pFirebaseId":this.props.firebaseid, "pDeviceModel":results[0].model, "pDeviceManufacture":results[0].manufacture, "pResearchTab":"info"});
          setTimeout(() => this.forceUpdate(), 300);
        })
        .catch(error => { })
    } else {
      // Set Null for Non-Zone
    }
  }

  setCompatibleAccessories(compatibleAccs) {
    if (typeof compatibleAccs == "undefined" || compatibleAccs.length <= 0) return false;
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
      .catch(error => { });
  }

  orderFullList(accsFullList) {
    let sortedList = accsFullList.sort((a, b) => {
      if (a.category < b.category) return -1;
      if (a.category > b.category) return 1;
      return 0;
    });
    let newItems = [];
    sortedList.forEach((obj, index) => {
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
  setTitleProduct() {
    const { productsNear } = this.props;
    if (!productsNear || productsNear.length === 0) return;
    let tmpData = productsNear[0];
    tmpData.title = "title";
    this.props.dispatch(setProductInfo(tmpData));
    this.setCompatibleAccessories(productsNear.length > 0 ? productsNear[0].accessories : []);
  }
  setCurrentProduct(productId) {
    const { productsNear } = this.props;
    if (!productsNear || productsNear.length === 0) return;
    const match = productsNear.filter(product => product.id === productId);
    if (match.length > 0) {
      let tmpData = match[0];
      tmpData.title = "no";
      this.props.dispatch(setProductInfo(tmpData));
    } else {
      this.props.dispatch(setProductInfo({}));
    }
    // this.props.dispatch(setProductInfo(match.length > 0 ? match[0] : {}));
    this.setCompatibleAccessories(match.length > 0 ? match[0].accessories : []);
    // firebase.analytics().logEvent("deviceViewed", {"pFirebaseId":this.props.firebaseid, "pDeviceModel":match[0].model, "pDeviceManufacture":match[0].manufacture, "pResearchTab":"info"});
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.locationData.zone_id !== nextProps.locationData.zone_id) {
      let zone_id = nextProps.locationData.zone_id;
      this.props.dispatch(setProductInfo({}));
      this.props.dispatch(setProductsNearInfo([]));
      // setTimeout(() => this.forceUpdate(), 100);
      // this.getProductID(zone_id);
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
  _renderOutsideTouchable() {
    const view = <View style={{ flex: 1, width: '100%' }} />

    // if (!onTouch) return view;

    return (
      <TouchableWithoutFeedback onPress={() => this.setState({ enterZone: false })} style={{ flex: 1, width: '100%' }}>
        {view}
      </TouchableWithoutFeedback>
    )
  }
  showEnterZoneDialog() {
    return (
      <Modal transparent={true} visible={this.state.enterZone}>
        <View style={{ flex: 1, backgroundColor: "#000000AA", padding: 4 }}>
          {/* {this._renderOutsideTouchable()} */}
          <View style={{
            position: 'absolute',
            width: width - 20,
            height: 60,
            bottom: 10,
            left: 10,
          }}>
            <TouchableOpacity onPress={() => this.setState({ enterZone: true })}>
              <View style={[{
                backgroundColor: '#e8e8e8',
                width: width - 20,
                height: 60,
                shadowOpacity: 0.24,
                borderRadius: 5,
                elevation: 4,flexDirection: 'row', alignItems: 'center', 
                shadowOffset: {
                  height: 4,
                  width: 2
                }
              }]}>
                <View style={{ marginLeft: 20, alignItems: 'center', }}>
                  <Icon height="50" width="50" name="ManIcon" viewBox="0 0 127 125" fill="#000" />
                </View>
                <Text style={{ textAlign: 'center', color: "#000000DD", fontSize: 20, marginLeft: 20 }}>Samsung</Text>
                <View style={{position:'absolute', right: -20, top: 5}}>
                  <TouchableOpacity onPress={() => this.setState({ enterZone: false })} style={{ width: 46, height: 52, borderTopRightRadius: 16 }}>
                    <Icon name="CloseX" width="14" height="14" viewBox="0 0 14 14" fill="#1181FF" />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          {/* {this._renderOutsideTouchable()} */}
        </View>
      </Modal>
    )
  }

  render() {
    const { productsNear, navigation } = this.props;

    return (
      <SafeAreaView forceInset={{ top: 'always' }} style={{ backgroundColor: '#FFF' }}>
        <ProductsNearSlide
          animatedValue={this.state.animatedValue}
          onProductIdChange={productId => this.setCurrentProduct(productId)}
          onFirstSelect={() => this.setTitleProduct()}
          currentProducts={productsNear}
          onGoToCompare={() => this.props.navigation.navigate('Compare')} />
        <View style={{ position: 'absolute', top: 40, left: 10 }}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
            <Icon name="ArrowLeft" width="10" height="16" viewBox="0 0 10 16" fill="#FFFFFF" />
          </TouchableOpacity>
        </View>
        <Animated.View style={{ width: '100%', height: height - 174 }}>
          <RoutesProducts onScrollLayout={this.state.animatedValue} />
        </Animated.View>
        {this.showEnterZoneDialog()}
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
