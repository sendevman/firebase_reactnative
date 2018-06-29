/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import { createStackNavigator, SafeAreaView } from 'react-navigation';

// My Screens
import OnBoardingScreen from '../screens/OnBoardingScreen';

class OnBoardingLayoutScreen extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <SafeAreaView forceInset={{ top: 'always' }}>
        <View style={{ width: '100%', height: '100%' }}>
          <OnBoardingScreen />
        </View>
      </SafeAreaView>
    );
  }
}

const OnBoardingLayout = createStackNavigator(
  {
    Root: { screen: OnBoardingLayoutScreen }
  },
  {
    headerMode: 'none'
  }
);

export default OnBoardingLayout;
