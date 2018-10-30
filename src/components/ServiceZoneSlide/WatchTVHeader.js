/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';
// Action

// My Styles
import styles, { itemWidth, sliderWidth } from './ServiceZoneSlideCss';

const imgURL = 'https://cdn.directv.com/content/dam/dtv/prod/website_zulu/img/poster/walking-dead.jpg';


class WatchTVHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <View style={styles.itemContainer}>
        <View style={[styles.itemBox, { borderWidth: 0 }]}>
          <View style={styles.imageWatchBackground}>
            <Image style={styles.itemWatchImage} source={require('../../assets/images/files/watchBG1.png')} />
          </View>
          <View style={styles.detailsWatchBox}>
            <Text numberOfLines={1} style={[styles.titleWatchItem]}>Get 30+ live TV channels</Text>
            <Text numberOfLines={1} style={[styles.titleWatchItem1, { paddingBottom: 6 }]}>for only $15!</Text>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { common, current, productsNear, locaitons } = state;

  return { firebaseid: common.firebaseid, currentPosition: current.position, productsNear: productsNear.productsNear, locationData: locations.locationAll };
}

export default connect(mapStateToProps)(WatchTVHeader);
