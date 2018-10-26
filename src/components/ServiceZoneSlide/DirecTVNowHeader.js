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

const imgURL = 'https://cdn.directv.com/content/dam/dtv/gmott/thegoodstuff/images/panel-1.v2.jpg';


class DirecTVNOWHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.itemBox}>
          <View style={styles.imageBackground}>
            <Image style={styles.itemImage} source={require('../../assets/images/files/directvnow.png')} />
          </View>
          <View style={styles.detailsNowBox}>
          <Text numberOfLines={1} style={[styles.titleNowItem]}>65+ LIVE CHANNELS</Text>
          <Text numberOfLines={1} style={[styles.titleNowItem, { paddingBottom: 6 }]}>$40/MONTH</Text>
            <Text numberOfLines={1} style={[styles.titleNowItem, { color: '#0d9FDB' }]}>65+ LIVE CHANNELS</Text>
            <Text numberOfLines={1} style={[styles.titleNowItem, { color: '#0d9FDB', paddingBottom: 6 }]}>$40/MONTH</Text>
            <Text numberOfLines={0} style={[styles.titleDetailItem, {width: itemWidth-180}]}>
              Stream breaking news, sports, live events and thousands of on-demand titles.
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default DirecTVNOWHeader;
