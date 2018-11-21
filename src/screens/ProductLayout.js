/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import {
  Animated,
  AsyncStorage,
  Dimensions,
  Platform,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { createStackNavigator, SafeAreaView } from 'react-navigation';
import Modal from 'react-native-modal';
import firebase from 'react-native-firebase';
import { connect } from 'react-redux';

// My Actions
import { setAreaInfo, setProductAccsInfo, setProductInfo } from '../actions/Current';
import { setProductsNearInfo, setProductsAllInfo } from '../actions/ProductsNear';

// My Customs
import GradientHeader from './components/GradientHeader';
import Icon from '../assets/images/Icon';
import LogoTitle from './components/LogoTitle';
import ProductsNearSlide from '../components/ProductsNearSlide/ProductsNear';

// My Routes
import RoutesProducts from '../routes/Products';

// My Styles
import styles from './css/ProductSceenCss';

var { height, width } = Dimensions.get('window');
var count = 0;

class ProductLayoutScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    let heightPiv = navigation.getParam('heightHeader');
    let heightHeader = typeof heightPiv === 'undefined' ? 56 : heightPiv;

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
        <TouchableHighlight style={{ marginRight: 16 }}>
          <Icon name="Menu" width="24" height="24" fill="transparent" viewBox="0 0 24 24" />
        </TouchableHighlight>
      ),
    };
  };

  constructor(props) {
    super(props);

    this.state = {
      animatedValue: new Animated.Value(0),
      enterZone: false,
      walkbaseId: 0,
    };

    this.getAllProductDetail();
    // this.setStorageData();
    this.getAreaData();
  }

  componentWillReceiveProps(nextProps) {
    // First code
    // if (nextProps.locationData !== this.state.locationData) {
    //   this.setState({ enterZone: true });
    // }

    // Second code
    if (this.props.locationData.zone_id !== nextProps.locationData.zone_id) {
      let zone_id = nextProps.locationData.zone_id;
      this.props.dispatch(setProductInfo({}));
      this.props.dispatch(setProductsNearInfo([]));
      // setTimeout(() => this.forceUpdate(), 100);
      // this.getProductID(zone_id);
    }
  }

  getProductID = (zone_id) => {
    const areasRef = firebase.firestore().collection('areas');
    areasRef.where('id', '==', zone_id).get().then(snapshot => {
      const arrAreas = snapshot.docs.map(doc => doc.data());
      this.props.dispatch(setAreaInfo(arrAreas));
      if (arrAreas.length > 0) {
        this.getFirstProductDetail(arrAreas);
      }
    });
  };

  getAllProductDetail = () => {
    const productRef = firebase.firestore().collection('products');
    productRef.get().then(snapshot => {
      const ref_path = snapshot.docs.map(doc => doc.ref.path);
      const productList = snapshot.docs.map(doc => doc.data());
      var products = [];
      for (i = 0; i < productList.length; i++) {
        var data = productList[i];
        data.id = ref_path[i].split('/')[1];
        products.push(data);
      }
      this.props.dispatch(setProductsAllInfo(products));
    });
  };

  setStorageData = async () => {
    try {
      await AsyncStorage.setItem('passOnboarding', '1');
    } catch (error) {
      // Error saving data
      console.log(error);
    }
    this.getAllProductDetail();
    this.setStorageData();
  };

  getAreaData = () => {
    // const { navigation } = this.props;
    // const area = navigation.getParam('areaData');
    const area = this.props.locationItem;
    console.log('-----', area);
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
      console.log('---1----', arrAreas);
      const arrproducts = arrAreas[0].products;
      const productRef = firebase.firestore().collection('products');

      console.log('----2---', arrproducts);
      Promise.all(
        arrproducts.map(
          productID =>
            new Promise((resolve, reject) => {
              productRef
                .doc(productID)
                .get()
                .then(product => {
                  if (!product.exists) resolve({});

                  const productData = product.data();
                  productData.id = productID;

                  productRef
                    .doc(productID)
                    .collection('web-reviews')
                    .get()
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
                    .catch(err => {
                      console.log('Error getting documents', err);
                    });
                })
                .catch(error => reject(error));
            }),
        ),
      )
        .then(results => {
          const resultsPivot = (Platform.OS === 'android') ? results.reverse() : results;
          const arrSize = resultsPivot.length;
          const firstIndex = (Platform.OS === 'android') ? ((arrSize > 1) ? arrSize - 2 : 0) : 1;

          console.log('****', resultsPivot);
          this.props.dispatch(setProductsNearInfo(resultsPivot));
          let tmpData = resultsPivot[firstIndex];
          tmpData.title = 'title';
          this.props.dispatch(setProductInfo(tmpData));
          this.setCompatibleAccessories(resultsPivot[firstIndex].accessories);
          // firebase.analytics().logEvent("deviceViewed", {"pFirebaseId":this.props.firebaseid, "pDeviceModel":results[0].model, "pDeviceManufacture":results[0].manufacture, "pResearchTab":"info"});
          setTimeout(() => this.forceUpdate(), 300);
        })
        .catch(error => {});
    } else {
      // Set Null for Non-Zone
    }
  };

  setCompatibleAccessories = (compatibleAccs) => {
    if (typeof compatibleAccs == 'undefined' || compatibleAccs.length <= 0) return false;
    const accsRef = firebase.firestore().collection('products');
    Promise.all(
      compatibleAccs.map(
        accessoryId =>
          new Promise((resolve, reject) => {
            accsRef
              .doc(accessoryId)
              .get()
              .then(accessory => {
                if (!accessory.exists) resolve({});
                let accessoryData = accessory.data();
                if (accessoryData !== undefined) {
                  accessoryData.id = accessoryId;
                }
                resolve(accessoryData);
              })
              .catch(err => {
                console.log('Error getting documents', err);
              });
          }),
      ),
    )
      .then(results => {
        let data = { featured: results.slice(0, 4), fullList: this.orderFullList(results) };
        this.props.dispatch(setProductAccsInfo(data));
      })
      .catch(error => {});
  };

  orderFullList = (accsFullList) => {
    let sortedList = accsFullList.sort((a, b) => {
      if (a.category < b.category) return -1;
      if (a.category > b.category) return 1;
      return 0;
    });
    let newItems = [];
    sortedList.forEach((obj, index) => {
      if (index === 0) {
        newItems.push({ name: obj.categoryName, type: obj.category, items: [ obj ] });
      } else {
        let last = newItems[newItems.length - 1];

        if (obj.category === last.type) newItems[newItems.length - 1].items.push(obj);
        else newItems.push({ name: obj.categoryName, type: obj.category, items: [ obj ] });
      }
    });
    return newItems;
  };

  setCurrentProduct = (productId) => {
    const { productsNear } = this.props;
    if (!productsNear || productsNear.length === 0) return;
    const match = productsNear.filter(product => product.id === productId);
    if (match.length > 0) {
      let tmpData = match[0];
      tmpData.title = 'no';
      this.props.dispatch(setProductInfo(tmpData));
    } else {
      this.props.dispatch(setProductInfo({}));
    }
    // this.props.dispatch(setProductInfo(match.length > 0 ? match[0] : {}));
    this.setCompatibleAccessories(match.length > 0 ? match[0].accessories : []);
    // firebase.analytics().logEvent("deviceViewed", {"pFirebaseId":this.props.firebaseid, "pDeviceModel":match[0].model, "pDeviceManufacture":match[0].manufacture, "pResearchTab":"info"});
  };

  setTitleProduct = (index) => {
    const { productsNear } = this.props;
    if (!productsNear || productsNear.length === 0) return;
    let tmpData = productsNear[index];
    tmpData.title = 'title';
    this.props.dispatch(setProductInfo(tmpData));
    this.setCompatibleAccessories([]);
  };

  setTestId = (identifier) => {
    if (Platform.OS === 'ios') return { testID: identifier };
    else return { accessible: true, accessibilityLabel: identifier };
  };

  _renderOutsideTouchable() {
    const view = <View style={{ flex: 1, width: '100%' }} />;

    // if (!onTouch) return view;

    return (
      <TouchableWithoutFeedback onPress={() => this.setState({ enterZone: false })} style={{ flex: 1, width: '100%' }}>
        {view}
      </TouchableWithoutFeedback>
    );
  }

  showEnterZoneDialog() {
    return (
      <Modal
        style={[ styles.modalContent, styles.bottomModal ]}
        isVisible={this.state.enterZone}
        onSwipe={() => this.setState({ enterZone: true })}
        swipeDirection="left"
      >
        <View style={{ flex: 1, position: 'absolute', bottom: 10 }}>
          <TouchableOpacity onPress={() => this.setState({ enterZone: false })}>
            <View style={styles.bottomModalView}>
              <View style={{ marginLeft: 20, alignItems: 'center' }}>
                <Icon height="50" width="50" name="ManIcon" viewBox="0 0 127 125" fill="#000" />
              </View>
              <Text style={{ textAlign: 'center', color: '#000000DD', fontSize: 20, marginLeft: 20 }}>Samsung</Text>
              <View style={{ position: 'absolute', right: -20, top: 6 }}>
                <TouchableOpacity
                  onPress={() => this.setState({ enterZone: false })}
                  style={{ width: 46, height: 52, borderTopRightRadius: 16 }}
                >
                  <Icon name="CloseX" width="14" height="14" viewBox="0 0 14 14" fill="#1181FF" />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }

  render() {
    const { productsNear, navigation } = this.props;

    return (
      <SafeAreaView forceInset={{ top: 'always' }} style={{ backgroundColor: '#FFF', flex: 1 }}>
        <ProductsNearSlide
          animatedValue={this.state.animatedValue}
          onProductIdChange={(productId) => this.setCurrentProduct(productId)}
          onFirstSelect={(index) => this.setTitleProduct(index)}
          currentProducts={productsNear}
          onGoToCompare={() => this.props.navigation.navigate('Compare')}
        />

        <Animated.View style={{ flex: 1 }}>
          <RoutesProducts onScrollLayout={this.state.animatedValue} />
        </Animated.View>
        {this.showEnterZoneDialog()}
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  const { common, current, productsNear, locations } = state;

  return {
    firebaseid: common.firebaseid,
    locationData: current.position,
    productsNear: productsNear.productsNear,
    locationItem: locations.locationItem,
  };
};

const ProductLayout = createStackNavigator(
  {
    Root: { screen: connect(mapStateToProps)(ProductLayoutScreen) },
  },
  {
    headerMode: 'none',
  },
);

export default ProductLayout;
