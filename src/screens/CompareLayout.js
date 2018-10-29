/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { createStackNavigator, SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';

// My Screens
import Icon from '../assets/images/Icon';
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
          <View style={{ position: 'absolute', top: 5, left: 10 }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('TabNav')}>
              <Icon name="ArrowLeft" width="10" height="16" viewBox="0 0 10 16" fill="#333" />
            </TouchableOpacity>
          </View>
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
