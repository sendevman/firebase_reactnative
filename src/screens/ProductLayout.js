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
import { InfoSpecsSkeleton } from './InfoSpecsScreen';

// My Routes
import RoutesProducts from '../routes/Products'

// Action
import { setProductInfo, setAreaInfo } from '../actions/Current';

var { height } = Dimensions.get('window');

class ProductLayoutScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentProductID: null,
    }

    this._animatedValue = new Animated.Value(0);
  }

  // componentWillMount() {
  //   // this.getProductID(3902);
  // }

  getProductID(zone_id) {
    const ref = firebase.firestore().collection('areas');
    ref.where('id', '==', zone_id).get()
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
      this.getProductDetail(arrproducts[0]);
    } else {
      // Set Null for Non-Zone
    }
  }
  getProductDetail(productId) {
    const ref = firebase.firestore().collection('products');
    this.setState({ currentProductID: null });
    ref.doc(productId).get().then(snapshot => {
      const productDetails = snapshot.data();
      this.props.dispatch(setProductInfo(productDetails));
      this.setState({ currentProductID: productId });
    })
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.customHeaderNav !== nextProps.customHeaderNav) {
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
    }

    if (this.props.locationData.zone_id !== nextProps.locationData.zone_id) {
      console.log("--------props-------", this.props.locationData.zone_id);
      let zone_id = nextProps.locationData.zone_id;
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

  render() {
    const { currentProductID } = this.state;

    return (
      <SafeAreaView forceInset={{ top: 'always' }} style={{ backgroundColor: '#FFF' }}>
        <View style={{ marginTop: this.props.customHeaderNav.heightSlide - 166 }}>
          <ProductsNearSlide
            onProductIdChange={productId => this.getProductDetail(productId)}
            currentProductID={currentProductID} />
        </View>
        <View style={{ width: '100%', height: height - 78 }}>
          {
            !currentProductID ?
              <InfoSpecsSkeleton />
              :
              <RoutesProducts />
          }
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  const { common, current } = state;

  return { customHeaderNav: common.customHeaderNav, locationData: current.postition };
}

const ProductLayout = createStackNavigator({
  Root: { screen: connect(mapStateToProps)(ProductLayoutScreen) }
});

export default ProductLayout;
