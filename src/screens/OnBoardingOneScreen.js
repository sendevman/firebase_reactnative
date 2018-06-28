/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Image, ScrollView, Text, View, WebView } from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

// My Styles
import styles from './css/OnBoardingOneScreenCss';

// My Customs
import Icon from '../assets/images/Icon';

class OnBoardingOneScreen extends Component {
  render() {
    return (
      <LinearGradient colors={['#222A33', '#43597D']} style={styles.container}>
        <View style={styles.containerPhone}>
          <Image style={styles.imagePhoneThree} source={require('../assets/images/files/PhoneLeft.png')} />
          <Image style={styles.imagePhoneTwo} source={require('../assets/images/files/PhoneMedium.png')} />
          <Icon name="Phone" width={86} height={164} viewBox="0 0 83 161" />
          <Image style={styles.imagePhoneTwo} source={require('../assets/images/files/PhoneMedium.png')} />
          <Image style={styles.imagePhoneThree} source={require('../assets/images/files/PhoneRight.png')} />
        </View>
        <View style={styles.text}>
        	<Text style={styles.textTitle}>Relevant information at a glance</Text>
        	<Text style={styles.subTitle}>AT&T Retail Companion allows you to make informed decisions when shopping for a new device.</Text>
          <Text style={styles.subTitle}>Simply walk around the store and we'll show you relevant information about nearby products.</Text>
        </View>
      </LinearGradient>
    );
  }
}
function mapStateToProps(state) {
  return { compare: 0 };
}

export default connect(mapStateToProps)(OnBoardingOneScreen);