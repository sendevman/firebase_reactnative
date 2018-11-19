/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Dimensions, Image, TouchableOpacity, View} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import firebase from 'react-native-firebase';
import { connect } from 'react-redux';

// My Actions
import { setAreaInfo, setProductAccsInfo, setProductInfo } from '../actions/Current';
import { setProductsAllInfo, setProductsNearInfo } from '../actions/ProductsNear';

// My Customs
import Icon from '../assets/images/Icon';
import ServiceZoneSlide from '../components/ServiceZoneSlide/ServiceZoneHead';

// My Layouts
import DirecTVLayout from './DirecTVLayout';
import DirecTVNowLayout from './DirecTVNowLayout';
import DirecTVWatchLayout from './DirecTVWatchLayout';

var { height, width } = Dimensions.get('window');

class DiscoverServiceLayout extends Component {
  constructor(props) {
    super(props);

    this.state = { discoverNum: 0 };

    this.getAreaData();
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.discoverNum !== nextProps.currentDiscover) {
      this.setState({ discoverNum: nextProps.currentDiscover });
    }
  }

  getAreaData = () => {
    const area = this.props.locationItem;
    console.log('Service Area: ', area);
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
        console.log('Service Area: - Results -', results);
        this.props.dispatch(setProductsNearInfo(results));
        let tmpData = results[1];
        tmpData.title = 'title';
        this.props.dispatch(setProductInfo(tmpData));
        // firebase.analytics().logEvent("deviceViewed", {"pFirebaseId":this.props.firebaseid, "pDeviceModel":results[0].model, "pDeviceManufacture":results[0].manufacture, "pResearchTab":"info"});
        setTimeout(() => this.forceUpdate(), 300);
      })
      .catch(error => {});
    } else { /* Set Null for Non-Zone */ }
  };

  render() {
    const { discoverNum } = this.state;
    return (
      <SafeAreaView forceInset={{ top: 'always' }} style={{ backgroundColor: '#FFF' }}>
        <View style={{ width: '100%', height: '100%' }}>

          <ServiceZoneSlide />

          <View style={{ backgroundColor: 'white', width: '100%', height: height - 240 }}>
            <Image
              style={{
                backgroundColor: '#ccc',
                flex: 1,
                position: 'absolute',
                width: '100%',
                height: '100%',
                justifyContent: 'center',
              }}
              source={require('../assets/images/files/backgroundHD.png')}
            />
            {(discoverNum === 0) ? <DirecTVLayout />
              : (discoverNum === 1) ? <DirecTVNowLayout /> : <DirecTVWatchLayout />}
          </View>

          <View style={{ position: 'absolute', top: 20, left: 10 }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
              <Icon name="ArrowLeft" width="10" height="16" viewBox="0 0 10 16" fill="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  const { common, current, productsNear, locations } = state;

  return {
    currentDiscover: current.discoverNum,
    locationData: current.position,
    productsNear: productsNear.productsNear,
    locationItem: locations.locationItem,
  };
}

export default connect(mapStateToProps)(DiscoverServiceLayout);
