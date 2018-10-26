/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';

import ServiceZoneSlide  from '../components/ServiceZoneSlide/ServiceZoneHead';
import DirecTVLayout from './DirecTVLayout';
import DirecTVNowLayout from './DirecTVNowLayout';
var { height, width } = Dimensions.get('window');

class DiscoverServiceLayout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView forceInset={{ top: 'always' }} style={{ backgroundColor: '#FFF' }}>
        <View style={{ width: '100%', height: '100%' }}>
          <ServiceZoneSlide />
          <View style={{backgroundColor:'white', width: '100%', height: height - 270 }}>
            <DirecTVNowLayout />
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

export default connect(mapStateToProps)(DiscoverServiceLayout);
