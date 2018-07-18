/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Animated, Dimensions, TouchableHighlight, View } from 'react-native';
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
import { setProductInfo, setAreaInfo, setLocationData } from '../actions/Current';
import { setProductsNearInfo } from '../actions/ProductsNear';

var { height } = Dimensions.get('window');
var count = 0;

class ProductLayoutScreen extends Component {
  constructor(props) {
    super(props);

    this._animatedValue = new Animated.Value(0);
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
        this.props.dispatch(setProductInfo(results[0]));
        setTimeout(() => this.forceUpdate(), 300);
      })
      .catch(error => {})
    } else {
      // Set Null for Non-Zone
    }
  }

  setCurrentProduct(productId) {
    const { productsNear } = this.props;
    if (!productsNear || productsNear.length === 0) return;
    const match = productsNear.filter(product => product.id === productId);
    this.props.dispatch(setProductInfo(match.length > 0 ? match[0] : {}));
  }

  componentWillReceiveProps(nextProps) {
    /*if (this.props.customHeaderNav !== nextProps.customHeaderNav) {
      const HEADER_MAX_HEIGHT = nextProps.customHeaderNav.heightHeader
      const HEADER_MIN_HEIGHT = 0
      const HEADER_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT

      this.props.navigation.setParams({
        heightHeader: this._animatedValue.interpolate({
          inputRange: [0, HEADER_DISTANCE],
          outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
          extrapolate: 'clamp'
        })
      });
    }*/

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
      lat:"35.000",
      lng:"-80.000",
      height:"1",
      ts:"2018-07-09",
      floor_id:"1348",
      zone_id: 3902
    }
    let data1 = {
      lat:"-35.000",
      lng:"-80.000",
      height:"-1",
      ts:"2018-07-09",
      floor_id:"-1348",
      zone_id:3903
    }
    count++;
    this.props.dispatch(setLocationData(count%2 === 0 ? data : data1));
  }

  render() {
    const { productsNear } = this.props;

    return (
      <SafeAreaView forceInset={{ top: 'always' }} style={{ backgroundColor: '#FFF' }}>
        {/* <View style={{ marginTop: this.props.customHeaderNav.heightSlide - 166 }}> */}
        <View>
          <ProductsNearSlide
            onProductIdChange={productId => this.setCurrentProduct(productId)}
            currentProducts={productsNear}
            zone={this.zone.bind(this)} />
        </View>
        <View style={{ width: '100%', height: height - 244 }}>
        {/* <View > */}
          <RoutesProducts />
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  const { common, current, productsNear } = state;

  return { customHeaderNav: common.customHeaderNav, locationData: current.postition, productsNear: productsNear.productsNear };
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
