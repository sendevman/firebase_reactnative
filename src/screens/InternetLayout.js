/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import { connect } from 'react-redux';

// My Customs
import InternetCarousel from '../components/ServicesCarousel/Internet';

// My Styles
import styles from './css/InternetScreenCss';

class InternetLayout extends Component {
  constructor(props) {
    super(props);
  }

  renderContents() {
    return (
      <View style={{ width: '100%', alignItems: 'center' }}>
        <Text style={styles.txtTitle}>INTERNET</Text>

        <InternetCarousel />

        <View style={styles.askRepBox}>
          <AutoHeightImage width={200} source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/retail-companion-dev.appspot.com/o/assets%2Fimg%2FToLearnMore.png?alt=media&token=efe76a21-32cf-4ac6-91c1-58c2084f2784' }} />
        </View>
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
  return {};
}

export default connect(mapStateToProps)(InternetLayout);
