/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import { createStackNavigator, SafeAreaView } from 'react-navigation';

// My Screens
import NewOnBoardingScreen from './NewOnBoardingScreen';

class NewOnBoardingLayoutScreen extends Component {

  render() {
    return (
      <SafeAreaView forceInset={{ top: 'always' }}>
        <View style={{ width: '100%', height: '100%' }}>
          <NewOnBoardingScreen navigation={this.props.navigation}/>
        </View>
      </SafeAreaView>
    );
  }
}

const NewOnBoardingLayout = createStackNavigator(
  {
    Root: { screen: NewOnBoardingLayoutScreen }
  },
  {
    headerMode: 'none'
  }
);

export default NewOnBoardingLayout;
