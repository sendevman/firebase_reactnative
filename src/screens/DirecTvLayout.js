/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { connect } from 'react-redux';

// My Customs
import DirecTvSave from './components/DirecTvSave';
import DirecTvPackage from './components/DirecTvPackage';
import DirecTvCarousel from '../components/ServicesCarousel/DirecTv';

// My Styles
import styles from './css/DirecTvScreenCss';

class DirecTvLayout extends Component {
  constructor(props) {
    super(props);
  }

  _renderDirecTvCard() {
    return (
      <View>
        <DirecTvSave />
      </View>
    );
  }

  _renderDirecTvPackage() {
    return (
      <View>
        <DirecTvPackage />
      </View>
    );
  }

  _renderPackageReliability() {
    return (
      <View style={[ styles.directvCardView, { marginTop: 20, marginBottom: 40 } ]}>
        <Image style={styles.imgReliability} source={require('../assets/images/files/reliability.png')} />
        <Text style={[ styles.txtSaveDescription, { marginTop: -10 } ]}>Get piece of mind with DIRECTV</Text>
        <Text style={[ styles.txtSaveDetail, { marginBottom: 20 } ]}>
          Stop settling for cable. For the 18th year in a row, DIRECTV is rated higher in customer satisfaction than
          Cable4. And with our 99% worry-free signal reliability, you get a TV experience you can depend on. Plus,
          DIRECTV has been named as an ENERGY STAR® Partner of the Year for the 3rd year in a row.
        </Text>
      </View>
    );
  }

  renderContents() {
    const slides = [ 1, 2, 3, 4 ];
    return (
      <View style={{ width: '100%', alignItems: 'center' }}>
        <Text style={styles.txtTitle}>DIRECTV</Text>
        {/* {this._renderDirecTvCard()} */}
        <DirecTvCarousel />

        <Text style={styles.txtTitle}>RELIABILITY</Text>
        {this._renderPackageReliability()}

        <Text style={styles.txtTitle}>Find the Package that is right for you</Text>
        {this._renderDirecTvPackage()}
      </View>
    );
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
  return {};
};

export default connect(mapStateToProps)(DirecTvLayout);
