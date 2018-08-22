/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import { createStackNavigator, SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';

// My Screens
import OnBoardingScreen from './OnBoardingScreen';

// My Customs
import SystemSetting from 'react-native-system-setting';

// My Actions
import { updateBluetoothIsOn } from '../actions/Common';

class OnBoardingLayoutScreen extends Component {
  constructor(props) {
    super(props);

    SystemSetting.isBluetoothEnabled().then(enable => {
      if (this.props.bluetoothIsOn != enable) {
        this.props.dispatch(updateBluetoothIsOn(enable));
      }
    });

    this.checkBluetoothIsOn(this.props.bluetoothIsOn);
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.bluetoothIsOn !== nextProps.bluetoothIsOn) {
      this.checkBluetoothIsOn(nextProps.bluetoothIsOn);
    }
  }

  checkBluetoothIsOn(bluetoothIsOn) {
    if (bluetoothIsOn) this.props.navigation.navigate('Shopping');
  }

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
