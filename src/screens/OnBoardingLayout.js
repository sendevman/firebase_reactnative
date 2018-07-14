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
import OnBoardingScreen from '../screens/OnBoardingScreen';

class OnBoardingLayoutScreen extends Component {
  constructor(props) {
    super(props);

    this.checkBluetoothIsOn(this.props.bluetoothIsOn);
  };

  checkBluetoothIsOn(bluetoothIsOn) {
    if (bluetoothIsOn) this.props.navigation.navigate('Shopping');
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.bluetoothIsOn !== nextProps.bluetoothIsOn) {
      this.checkBluetoothIsOn(nextProps.bluetoothIsOn);
    }
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
