/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Animated, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import firebase from 'react-native-firebase';
import { connect } from 'react-redux';

// My Actions
import { setAreaInfo, setProductInfo } from '../actions/Current';
import { setProductsNearInfo } from '../actions/ProductsNear';

// My Customs
import Icon from '../assets/images/Icon';
import ServicesSlide from '../components/ServicesSlide/ServicesSlide';

// My Layouts
import DirecTVLayout from './DirecTVLayout';
import DirecTVNowLayout from './DirecTVNowLayout';
import DirecTVWatchLayout from './DirecTVWatchLayout';

// My Styles
import styles from './css/ProductSceenCss';

class DiscoverServiceLayoutNew extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animatedValue: new Animated.Value(0),
      showService: false,
    };

    this.getAreaData();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.locationData.zone_id !== nextProps.locationData.zone_id) {
      let zone_id = nextProps.locationData.zone_id;
      this.props.dispatch(setProductInfo({}));
      this.props.dispatch(setProductsNearInfo([]));
    }
  }

  getAreaData = () => {
    const area = this.props.locationItem;
    const arrAreas = [];
    arrAreas.push(area);
    this.props.dispatch(setProductInfo({}));
    this.props.dispatch(setProductsNearInfo([]));
    setTimeout(() => this.forceUpdate(), 100);
    this.props.dispatch(setAreaInfo(arrAreas));
    if (arrAreas.length > 0) {
      this.getFirstProductDetail(arrAreas);
    }
  };

  getFirstProductDetail = (arrAreas) => {
    if (arrAreas[0] != undefined) {
      const arrproducts = arrAreas[0].products;
      const productRef = firebase.firestore().collection('products');

      Promise.all(
        arrproducts.map(
          productID =>
            new Promise((resolve, reject) => {
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
            }),
        ),
      )
      .then(results => {
        this.props.dispatch(setProductsNearInfo(results));
        let tmpData = results[1];
        tmpData.title = 'title';
        this.props.dispatch(setProductInfo(tmpData));
        setTimeout(() => this.forceUpdate(), 300);
      })
      .catch(error => {});
    } else { /* Set Null for Non-Zone */ }
  };

  setCurrentProduct = (productId) => {
    const { productsNear } = this.props;
    if (!productsNear || productsNear.length === 0) return;
    const match = productsNear.filter(product => product.id === productId);
    this.props.dispatch(setProductInfo(match.length > 0 ? match[0] : {}));
    this.setState({ showService: true });
  };

  setTitleProduct = () => {
    const { productsNear } = this.props;
    if (!productsNear || productsNear.length === 0) return;
    let tmpData = productsNear[0];
    tmpData.title = 'title';
    this.setState({ showService: false });
    this.props.dispatch(setProductInfo(tmpData));
  };

  render() {
    const { productsNear, serviceSelected, navigation } = this.props;
    const { showService } = this.state;

    return (
      <SafeAreaView forceInset={{ top: 'always' }} style={{ backgroundColor: '#FFF', flex: 1 }}>
        <ServicesSlide
          animatedValue={this.state.animatedValue}
          onProductIdChange={productId => this.setCurrentProduct(productId)}
          onFirstSelect={() => this.setTitleProduct()}
          currentProducts={productsNear}
        />

        <Animated.View style={{ flex: 1, backgroundColor: '#009fdb' }}>
          {/* <Image
            style={{ ...StyleSheet.absoluteFillObject, width: '100%', height: null }}
            resizeMode={Image.resizeMode.cover}
            source={require('../assets/images/files/backgroundHD.png')}
          /> */}
          {(showService && (serviceSelected.subType === 'directv')) && <DirecTVLayout />}
          {(showService && (serviceSelected.subType === 'directv_now')) && <DirecTVNowLayout />}
          {(showService && (serviceSelected.subType === 'directv_watch')) && <DirecTVWatchLayout />}
        </Animated.View>

        <View style={{ position: 'absolute', top: 20, left: 10 }}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
            <Icon name="ArrowLeft" width="10" height="16" viewBox="0 0 10 16" fill="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  const { current, productsNear, locations } = state;

  return {
    locationData: current.position,
    serviceSelected: current.product,
    productsNear: productsNear.productsNear,
    locationItem: locations.locationItem,
  };
};

export default connect(mapStateToProps)(DiscoverServiceLayoutNew);
