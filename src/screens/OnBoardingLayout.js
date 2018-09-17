/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Dimensions, Image, Text, View } from 'react-native';
import { createStackNavigator, SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';

// My Screens
import OnBoardingScreen from './OnBoardingScreen';

// My Customs
import SystemSetting from 'react-native-system-setting';

// My Actions
import { updateBluetoothIsOn } from '../actions/Common';

var { width, height } = Dimensions.get('window');

// Splash Screen
class SplashScreen extends Component {
  render() {
    return (
      <View>
        <Image style={{ width: width, height: height }} resizeMode={Image.resizeMode.cover} source={require('../assets/images/files/splash.png')} />
      </View>
    );
  }
}

class OnBoardingLayoutScreen extends Component {
  constructor(props) {
    super(props);

    this.state = { showSplash: false };

    SystemSetting.isBluetoothEnabled().then(enable => {
      if (this.props.bluetoothIsOn != enable) {
        this.props.dispatch(updateBluetoothIsOn(enable));
      }
    });
  };

  componentDidMount() {
    this._ismounted = true;
    this.checkBluetoothIsOn(this.props.bluetoothIsOn);
  }

  componentWillUnmount() { this._ismounted = false; }

  componentWillReceiveProps(nextProps) {
    if (this.props.bluetoothIsOn !== nextProps.bluetoothIsOn) {
      this.checkBluetoothIsOn(nextProps.bluetoothIsOn);
    }
  }

  checkBluetoothIsOn(bluetoothIsOn) {
    if (!bluetoothIsOn) return false;
    if (!this._ismounted) return false;

    this.setState({ showSplash: true });
    setTimeout(() => { this.props.navigation.navigate('Shopping'); }, 3000);
  }

  render() {
    return (
      <SafeAreaView forceInset={{ top: 'always' }}>
        <View style={{ width: '100%', height: '100%' }}>
          { !this.state.showSplash && <OnBoardingScreen navigation={this.props.navigation}/> }
          { this.state.showSplash && <SplashScreen /> }
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  const { common } = state;

  return { bluetoothIsOn: common.bluetoothIsOn };
}

const OnBoardingLayout = createStackNavigator(
  {
    Root: { screen: connect(mapStateToProps)(OnBoardingLayoutScreen) }
  },
  {
    headerMode: 'none'
  }
);

export default OnBoardingLayout;
