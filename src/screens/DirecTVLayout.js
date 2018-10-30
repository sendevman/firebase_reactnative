/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Animated, Dimensions, Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';

import DirecTVSave from './components/DirecTVSave';
import DirecTVPackage from './components/DirecTVPackage';
// My Styles
import styles from './css/DirecTVScreenCss';

class DirecTVLayout extends Component {
  constructor(props) {
    super(props);
  }

  _renderDirecTVCard() {
    return (
      <View>
        <DirecTVSave />
      </View>
    )
  }

  _renderDirecTVPackage() {
    return (
      <View>
        <DirecTVPackage />
      </View>
    )
  }

  _renderPackageReliability() {
    return (
      <View style={[styles.directvCardView, { marginTop: 20, marginBottom: 40 }]}>
        <Image style={styles.imgReliability} source={require('../assets/images/files/reliability.png')} />
        <Text style={[styles.txtSaveDescription, { marginTop: -10 }]}>Get piece of mind with DIRECTV</Text>
        <Text style={[styles.txtSaveDetail, { marginBottom: 20 }]}>
          Stop settling for cable. For the 18th year in a row, DIRECTV is rated higher in customer satisfaction
than Cable4. And with our 99% worry-free signal reliability, you get a TV experience you can depend on.
Plus, DIRECTV has been named as an ENERGY STAR® Partner of the Year for the 3rd year in a row.
        </Text>
      </View>
    );
  }
  renderContents() {
    return (
      <View style={{ width: '100%', alignItems: 'center' }}>
        <Text style={styles.txtTitle}>DIRECTV</Text>
        {this._renderDirecTVCard()}
        <Text style={styles.txtTitle}>Find the Package that is right for you</Text>
        {this._renderDirecTVPackage()}
        <Text style={styles.txtTitle}>RELIABILITY</Text>
        {this._renderPackageReliability()}
      </View>
    )
  }

  render() {
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {this.renderContents()}
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  const { current, common } = state;

  return { compareLayout: 0 };
}

export default connect(mapStateToProps)(DirecTVLayout);
