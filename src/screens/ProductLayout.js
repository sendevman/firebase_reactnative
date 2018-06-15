/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Dimensions, TouchableHighlight, View } from 'react-native';
import { createStackNavigator, SafeAreaView } from 'react-navigation';

// My Customs
import Icon from '../assets/images/Icon';
import LogoTitle from './components/LogoTitle';
import GradientHeader from './components/GradientHeader';
import ProductsNearSlide from '../components/ProductsNearSlide/ProductsNear';

// My Routes
import RoutesProducts from '../routes/Products'

var { height } = Dimensions.get('window');

class ProductLayoutScreen extends Component<props> {
  constructor(props) {
    super(props);
  };

  static navigationOptions = {
    headerTitle: <LogoTitle />,
    header: props => <GradientHeader {...props} />,
    headerStyle: { backgroundColor: 'transparent' },
    headerLeft: (
      <TouchableHighlight style={{ marginLeft: 16 }} onPress={(navigation) => console.log(navigation)}>
        <Icon name="Menu" width="24" height="24" fill="#FFF" viewBox="0 0 24 24" />
      </TouchableHighlight>
    ),
    headerRight: (
      <TouchableHighlight style={{ marginRight: 16 }} >
        <Icon name="Menu" width="24" height="24" fill="transparent" viewBox="0 0 24 24" />
      </TouchableHighlight>
    )
  };

  render() {
    return (
      <SafeAreaView forceInset={{ top: 'always' }}>
        <ProductsNearSlide />
        <View style={{ width: '100%', height: height - 300 }}>
          <RoutesProducts />
        </View>
      </SafeAreaView>
    );
  }
}

const ProductLayout = createStackNavigator({
  Root: { screen: ProductLayoutScreen }
});

export default ProductLayout;
