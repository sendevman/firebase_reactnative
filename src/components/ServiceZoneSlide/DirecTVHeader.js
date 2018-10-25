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

const imgURL = 'https://cdns.directv.com/content/dam/dtv/directv_marketing/offer/2018_fall_offer/prhp/hdr_1001_Jurrasic_World.jpg';


class DirecTVHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.itemBox}>
          <View style={styles.imageBackground}>
          <Image style={styles.itemImage} source={require('../../assets/images/files/directv.png')} />
          </View>
          <View style={styles.detailsBox}>
            <Text numberOfLines={1} style={[styles.titleItem]}>DIRECTV is TV.</Text>
            <Text numberOfLines={1} style={[styles.titleItem, { paddingBottom: 6 }]}>Evolved.</Text>
            <Text numberOfLines={0} style={styles.titleDetailItem}>
              Watch live TV and 45,000 shows and movies On Demand on up to 5 screens at once-anytime, anywhere-on the DIRECTV app.
              Or use our whole-home Genie HD DVR for 21st Century. 99% reliable TV and get with the times.
            </Text>
            <Text numberOfLines={1} style={[styles.titleItem]}>$35/mo</Text>
            <Text numberOfLines={0} style={styles.titleDetailItem}>
              w/24-mo. agmt. AutoPay & Paperless bill req'd. $78/mo. in months 13-24 (subject to change)
            </Text>
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

export default connect(mapStateToProps)(DirecTVHeader);
