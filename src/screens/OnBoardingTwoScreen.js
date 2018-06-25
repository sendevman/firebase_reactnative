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
import styles from './css/OnBoardingTwoScreenCss';

// My Customs
import Icon from '../assets/images/Icon';

class OnBoardingTwoScreen extends Component {
  render() {
    return (
      <LinearGradient colors={['#222A33', '#43597D']} style={styles.container}>
        <View >
          <Image style={styles.imageLogin} source={require('../assets/images/files/Group_4.png')} />
        </View>
        <View style={styles.text}>
        	<Text style={styles.textTitle}>Don't take our word for it</Text>
        	<Text style={styles.subTitle}>Every device comes with curated reviews</Text>
          <Text style={styles.subTitle}>from reputable reviewer. Lorem ipsum dolor sit</Text>
          <Text style={styles.subTitle}>amet, consectetur adipiscing elit. Sed eu sodales ligula.</Text>
        </View>
      </LinearGradient>
    );
  }
}
function mapStateToProps(state) {
  return { compare: 0 };
}

export default connect(mapStateToProps)(OnBoardingTwoScreen);