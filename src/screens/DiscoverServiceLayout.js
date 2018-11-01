/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { View, Dimensions, Image , TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';

import Icon from '../assets/images/Icon';
import ServiceZoneSlide from '../components/ServiceZoneSlide/ServiceZoneHead';
import DirecTVLayout from './DirecTVLayout';
import DirecTVNowLayout from './DirecTVNowLayout';
import DirecTVWatchLayout from './DirecTVWatchLayout';
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
          <View style={{ backgroundColor: 'white', width: '100%', height: height - 240 }}>
            <Image
              style={{
                backgroundColor: '#ccc',
                flex: 1,
                position: 'absolute',
                width: '100%',
                height: '100%',
                justifyContent: 'center',
              }}
              source={require('../assets/images/files/backgroundHD.png')}
            />
            {discoverNum === 0 ? <DirecTVLayout />
              : discoverNum === 1 ? <DirecTVNowLayout />
                : <DirecTVWatchLayout />
            }
          </View>
          <View style={{ position: 'absolute', top: 20, left: 10 }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
              <Icon name="ArrowLeft" width="10" height="16" viewBox="0 0 10 16" fill="#FFFFFF" />
            </TouchableOpacity>
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
