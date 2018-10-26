/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';

import ServiceZoneSlide from '../components/ServiceZoneSlide/ServiceZoneHead';
import DirecTVLayout from './DirecTVLayout';
import DirecTVNowLayout from './DirecTVNowLayout';
var { height, width } = Dimensions.get('window');

class DiscoverServiceLayout extends Component {
  constructor(props) {
    super(props);
    this.state = { discoverNum: 0 };
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.discoverNum !== nextProps.currentDiscover) {
      this.setState({ discoverNum: nextProps.currentDiscover })
    }
  }

  render() {
    const { discoverNum } = this.state;
    return (
      <SafeAreaView forceInset={{ top: 'always' }} style={{ backgroundColor: '#FFF' }}>
        <View style={{ width: '100%', height: '100%' }}>
          <ServiceZoneSlide />
          <View style={{ backgroundColor: 'white', width: '100%', height: height - 270 }}>
            {discoverNum === 0 ? <DirecTVLayout />
              : discoverNum === 1 ? <DirecTVNowLayout />
                : <DirecTVLayout />
            }
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  const { current, common } = state;

  return { compareLayout: 0, currentDiscover: current.discoverNum };
}

export default connect(mapStateToProps)(DiscoverServiceLayout);
