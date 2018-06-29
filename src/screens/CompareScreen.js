/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Image, ScrollView, Text, View, WebView } from 'react-native';
import { connect } from 'react-redux';
import { Rating } from 'react-native-ratings';

// My Styles
import styles from './css/CompareScreenCss';

// My Customs
import Icon from '../assets/images/Icon';

class CompareScreen extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.compareBox}>

          <View style={styles.containerBox}>
            <View style={styles.addProduct}>
              <View style={styles.containerProduct}>
                <Icon height="37" width="37" name="AddBtn" viewBox="0 0 37 37" fill="#1181FF" />
                <Text style={styles.titleProduct}>Add product</Text>
              </View>
            </View>
            
            <Text style={styles.titleVs}>VS</Text>

            <View style={styles.addProduct}>
              <View style={styles.containerProduct}>
                <Icon height="37" width="37" name="AddBtn" viewBox="0 0 37 37" />
                <Text style={styles.titleProduct}>Add product</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  return { compare: 0 };
}

export default connect(mapStateToProps)(CompareScreen);