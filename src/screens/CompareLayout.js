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
import CompareScreen from '../screens/CompareScreen';

const RoutesCompare = createStackNavigator(
  {
    Root: { screen: props => <CompareScreen {...props} /> }
  },
  {
    headerMode: 'none'
  }
);

class CompareLayout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView forceInset={{ top: 'always' }} style={{ backgroundColor: '#FFF' }}>
        <View style={{ width: '100%', height: '100%' }}>
          <RoutesCompare />
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  const { current, common } = state;

  return { compareLayout: 0 };
}

export default connect(mapStateToProps)(CompareLayout);
