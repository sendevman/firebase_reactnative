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
import styles from './css/OnBoardingThreeScreenCss';

// My Customs

import Icon from '../assets/images/Icon';

class OnBoardingThreeScreen extends Component {
  render() {
    return (
      <LinearGradient colors={['#222A33', '#43597D']} style={styles.container}>
        <View style={styles.containerPhone}>
          <View style={styles.imageCompare}>
            <Icon name="PhoneOrig" width={86} height={164} viewBox="0 0 86 164" />
          </View>
          <View style={styles.imageCompare}>
            <Icon name="Vs" width={27} height={43} viewBox="0 0 27 43" />
          </View>
          <View style={styles.imageCompare}>
            <Icon name="PhoneCompare" width={93} height={171} viewBox="0 0 93 171" />
          </View>
        </View>
        <View style={styles.text}>
        	<Text style={styles.textTitle}>Compare products</Text>
          <Text style={styles.subTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu sodales ligula. Nunc sit</Text>
          <Text style={styles.subTitle}>amet massa sem. Sed venenatis velit commodo, mattis nulla ut, sodales eros.</Text>
        </View>
      </LinearGradient>

    );
  }
}
function mapStateToProps(state) {
  return { compare: 0 };
}

export default connect(mapStateToProps)(OnBoardingThreeScreen);