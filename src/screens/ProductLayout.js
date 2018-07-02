/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Animated, Dimensions, TouchableHighlight, View } from 'react-native';
import { createStackNavigator, SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';

// My Customs
import Icon from '../assets/images/Icon';
import LogoTitle from './components/LogoTitle';
import GradientHeader from './components/GradientHeader';
import ProductsNearSlide from '../components/ProductsNearSlide/ProductsNear';

// My Routes
import RoutesProducts from '../routes/Products'

var { height } = Dimensions.get('window');

class ProductLayoutScreen extends Component {
  constructor(props) {
    super(props);

    this._animatedValue = new Animated.Value(0);
  };

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
    return (
      <SafeAreaView forceInset={{ top: 'always' }} style={{ backgroundColor: '#FFF' }}>
        <View style={{ marginTop: this.props.customHeaderNav.heightSlide - 166 }}>
          <ProductsNearSlide />
        </View>
        <View style={{ width: '100%', height: height - 78 }}>
          <RoutesProducts />
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  const { common } = state;

  return { customHeaderNav: common.customHeaderNav };
}

const ProductLayout = createStackNavigator({
  Root: { screen: connect(mapStateToProps)(ProductLayoutScreen) }
});

export default ProductLayout;