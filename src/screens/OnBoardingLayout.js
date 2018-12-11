/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Dimensions, Image, View } from 'react-native';
import { createStackNavigator, SafeAreaView } from 'react-navigation';

// My Screens
import OnBoardingScreen from './OnBoardingScreen';

var { width, height } = Dimensions.get('window');

// Splash Screen
class SplashScreen extends Component {
  render() {
    console.log('here5');
    return (
      <View>
        <Image style={{ width: width, height: height }} resizeMode={Image.resizeMode.cover} source={require('../assets/images/files/splash.png')} />
      </View>
    );
  }
}

class OnBoardingLayoutScreen extends Component {
  render() {
    return (
      <SafeAreaView forceInset={{ top: 'always' }}>
        <View style={{ width: '100%', height: '100%' }}>
          <OnBoardingScreen navigation={this.props.navigation}/>
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
