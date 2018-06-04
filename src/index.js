/**
 * Conexus-Tech - Reatail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStackNavigator } from 'react-navigation';

import myStore from './store/myStore';
import HomeScreen from './screens/HomeScreen';
import InfoSpecsScreen from './screens/InfoSpecsScreen';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    InfoSpecs: InfoSpecsScreen
  },
  {
    initialRouteName: 'Home'
  }
);

export default class App extends Component {
  render() {
    return (
      <Provider store={myStore}>
        <RootStack />
      </Provider>
    );
  }
}
