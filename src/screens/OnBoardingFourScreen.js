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
import styles from './css/OnBoardingFourScreenCss';

// My Customs

import Icon from '../assets/images/Icon';
import ButtonGet from './components/ButtonGet';

class OnBoardingFourScreen extends Component {
  render() {
    return (
      <LinearGradient colors={['#222A33', '#43597D']} style={styles.container}>
        <View style={styles.containerPhone}>
          <View style={styles.imageCompare}>
            <Image style={styles.imageLeft} source={require('../assets/images/files/imageLeft.png')} />
          </View>
          <View style={styles.imageCompare}>
            <Image style={styles.PhoneHoriz} source={require('../assets/images/files/series_screen.png')} />
          </View>
          <View style={styles.imageCompare}>
            <Image style={styles.imageRight} source={require('../assets/images/files/imageRight.png')} />
          </View>
        </View>
        <View style={styles.text}>
        	<Text style={styles.textTitle}>Exclusive video-on-demand</Text>
          <Text style={styles.subTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu sodales ligula. Nunc sit amet massa sem. Sed venenatis velit commodo, mattis nulla ut, sodales eros.</Text>
        </View>
        <ButtonGet />
      </LinearGradient>
    );
  }
}
function mapStateToProps(state) {
  return { compare: 0 };
}

export default connect(mapStateToProps)(OnBoardingFourScreen);