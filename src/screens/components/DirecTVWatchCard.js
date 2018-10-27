/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Image, Text, TouchableOpacity, View, Dimensions } from 'react-native';
var { width } = Dimensions.get('window');

// My Styles
import styles from '../css/DirecTVScreenCss';

class DirecTVWatchCard extends Component {
  constructor(props) {
    super(props);

    this.state = { readMore: false };
  }

  toggleReadMore = () => {
    this.setState({ readMore: !this.state.readMore });
  }

  _renderLiveTV() {
    return (
      <View style={[styles.directvCardView, { marginBottom: 10 }]}>
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <View style={{ width: width / 2 - 20, alignItems: 'center', height: 200, justifyContent: 'center' }}>
            <Image style={{ width: 120, height: 65 }} source={require('../../assets/images/files/icon_livetv.png')} />
          </View>
          <View style={{ width: width / 2 - 20, alignItems: 'center', height: 200, justifyContent: 'center' }}>
            <Image style={{ width: 100, height: 200 }} source={require('../../assets/images/files/device_md.png')} />
          </View>
        </View>
        <Text style={[styles.txtSaveDescription, { paddingHorizontal: 10 }]}>Play your favorite live shows, news, movies and more in the palm of your hand with WatchTV from AT&T</Text>
        <View style={{ marginBottom: 20 }}>
          <View style={{ flexDirection: 'row', width: width - 40, alignItems: 'center', paddingVertical: 5, paddingHorizontal: 10 }}>
            <Image style={{ width: 38, height: 20 }} source={require('../../assets/images/files/icon_4.png')} />
            <Text style={{ fontSize: 14, fontWeight: 'bold', marginLeft: 20 }}> Stream TBS, Cartoon Network, CNN, {"\n"} Discovery and more -- all live</Text>
          </View>
          <View style={{ flexDirection: 'row', width: width - 40, alignItems: 'center', paddingVertical: 5, paddingHorizontal: 10 }}>
            <Image style={{ width: 34, height: 28 }} source={require('../../assets/images/files/icon_5.png')} />
            <Text style={{ fontSize: 14, fontWeight: 'bold', marginLeft: 20 }}> Binge 15,000 movies & hit shows</Text>
          </View>
          <View style={{ flexDirection: 'row', width: width - 40, alignItems: 'center', paddingVertical: 5, paddingHorizontal: 10 }}>
            <Image style={{ width: 38, height: 20 }} source={require('../../assets/images/files/icon_6.png')} />
            <Text style={{ fontSize: 14, fontWeight: 'bold', marginLeft: 20 }}>No equipment, no annual contract</Text>
          </View>
        </View>
      </View>
    );
  }

  _renderGetMore() {
    return (
      <View style={[styles.directvCardView, { marginBottom: 20 }]}>
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <View style={{ width: width / 2, alignItems: 'center', height: 110, justifyContent: 'center' }}>
            <Image style={{ width: 180, height: 65 }} source={require('../../assets/images/files/icon_getmore.png')} />
          </View>
          <View style={{ width: width / 2 - 40, alignItems: 'center', height: 110, justifyContent: 'center' }}>
            <Image style={{ width: 100, height: 100 }} source={require('../../assets/images/files/watch_mark.png')} />
          </View>
        </View>
        <Text style={[styles.txtSaveDescription, { paddingHorizontal: 10 }]}>Stream 30+ channels of live TV for only $15/mo. All with no equipment or annual contract to weigh you down.</Text>
        <Text style={{ paddingHorizontal: 10, marginTop: 10, fontSize: 32, fontWeight: 'bold', color: '#005FC0' }}>YOUR NEW PERKS!</Text>
        <View style={{ marginBottom: 20, marginTop: 10 }}>
          <View style={{ flexDirection: 'row', width: width - 40, alignItems: 'center', paddingVertical: 5, paddingHorizontal: 10 }}>
            <Image style={{ width: 22, height: 16 }} source={require('../../assets/images/files/check_blue.png')} />
            <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 20 }}> Watch TBS, Cartoon Network,{"\n"} CNN and more--live</Text>
          </View>
          <View style={{ flexDirection: 'row', width: width - 40, alignItems: 'center', paddingVertical: 5, paddingHorizontal: 10 }}>
            <Image style={{ width: 22, height: 16 }} source={require('../../assets/images/files/check_blue.png')} />
            <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 20 }}> Get thousands of on-demand{"\n"} movies & TV shows</Text>
          </View>
          <View style={{ flexDirection: 'row', width: width - 40, alignItems: 'center', paddingVertical: 5, paddingHorizontal: 10 }}>
            <Image style={{ width: 22, height: 16 }} source={require('../../assets/images/files/check_blue.png')} />
            <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 20 }}>Stream on your favorite{"\n"} device</Text>
          </View>
        </View>
      </View>
    );
  }

  _renderDestination() {
    return (
      <View style={[styles.directvCardView, { marginBottom: 50 }]}>
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <Image style={{ width: 90, height: 90 }} source={require('../../assets/images/files/icon_ios.png')} />
          <Image style={{ width: 90, height: 90 }} source={require('../../assets/images/files/icon_android.png')} />
          <Image style={{ width: 90, height: 90 }} source={require('../../assets/images/files/icon_appletv.png')} />
          <Image style={{ width: 90, height: 90 }} source={require('../../assets/images/files/icon_chrome.png')} />
        </View>
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <Image style={{ width: 90, height: 90 }} source={require('../../assets/images/files/icon_amazontv.png')} />
          <Image style={{ width: 90, height: 90 }} source={require('../../assets/images/files/icon_firetv.png')} />
        </View>
          <Image style={{ width: 300, height: 90, marginTop: 10 }} source={require('../../assets/images/files/icon_destination.png')} />
        <Text style={[styles.txtSaveDescription, { paddingHorizontal: 10, marginBottom: 20 }]}>On the couch, on the bus, waiting in line, or on vacation—WatchTV works with your favorite devices so your entertainment is always close at hand.</Text>
        
      </View>
    );
  }
  render() {
    const { item } = this.props;
    const { readMore } = this.state;

    let readMoreText = readMore ? "- Collapse" : "+ Read more";
    let showProsCons = readMore;

    return (
      <View>
        {this._renderLiveTV()}
        {this._renderGetMore()}
        {this._renderDestination()}
      </View>
    );
  }
}

export default DirecTVWatchCard;
