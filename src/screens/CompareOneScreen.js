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
import styles from './css/CompareOneScreenCss';

// My Customs
import Icon from '../assets/images/Icon';
import ButtonChange from './components/ButtonChange';

class CompareOneScreen extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.compareBox}>

          <View style={styles.containerBox}>
            <View style={styles.addProduct}>
              <View style={styles.containerProduct}>
                <Image style={styles.imagePhone} source={require('../assets/images/files/S9-Compare.png')} />
              </View>
            </View>
            <View>
              <Text style={styles.titleVs}>VS</Text>
            </View>
            <View style={styles.addProduct}>
              <View style={styles.containerProduct}>
                <Icon height="37" width="37" name="AddBtn" viewBox="0 0 37 37" fill="#1181FF" />
                <Text style={styles.titleProduct}>Add product</Text>
              </View>
            </View>
          </View>

          <View style={styles.containerBox}>
            <View style={styles.containerTitle}>
              <Text style={styles.nameProduct}>Apple iPhone X</Text>
              <ButtonChange />
            </View>
            <View>
              <Text style={styles.titleVs}></Text>
            </View>
            <View style={styles.containerTitle}>
              <Text style={styles.nameProduct}></Text>
            </View>
          </View>

          <View style={styles.separador}></View>

          <View style={[styles.containerBox, {alignItems: 'flex-start'}]}>
            <View style={styles.containerTitle}>
              <Text style={styles.descriptionProduct}>$999</Text>
            </View>
            <View>
              <Text style={[styles.titleVs, { color: '#1181FF' }]}>Price</Text>
            </View>
            <View style={styles.containerTitle}>
              <Text style={styles.descriptionProduct}></Text>
            </View>
          </View>

          <View style={styles.separador}></View>

          <View style={[styles.containerBox, {alignItems: 'flex-start'}]}>
            <View style={styles.containerTitle}>
              <Text style={styles.descriptionProduct}>64GB</Text>
              <Text style={styles.descriptionProduct}>256GB</Text>
            </View>
            <View>
              <Text style={[styles.titleVs, { color: '#1181FF' }]}>Storage</Text>
            </View>
            <View style={styles.containerTitle}>
              <Text style={styles.descriptionProduct}></Text>
            </View>
          </View>

          <View style={styles.separador}></View>

          <View style={[styles.containerBox, {alignItems: 'flex-start'}]}>
            <View style={styles.containerTitle}>
              <Text style={styles.descriptionProduct}>5.8-inch</Text>
              <Text style={styles.descriptionProduct}>OLED</Text>
              <Text style={styles.descriptionProduct}>2436 x 1125</Text>
              <Text style={styles.descriptionProduct}>458ppi</Text>
            </View>
            <View>
              <Text style={[styles.titleVs, { color: '#1181FF' }]}>Display</Text>
            </View>
            <View style={styles.containerTitle}>
              <Text style={styles.descriptionProduct}></Text>
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

export default connect(mapStateToProps)(CompareOneScreen);
