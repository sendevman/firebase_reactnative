/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';


// My Customs
import DirecTvWatchCard from './components/DirecTvWatchCard';
import DirecTvWatchCarousel from '../components/ServicesCarousel/DirecTvWatch';

// My Styles
import styles, { width } from './css/DirecTvWatchScreenCss';

class DirecTvWatchLayout extends Component {
  constructor(props) {
    super(props);
  }

  _renderTopIcons() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <Image style={{ width: 120, height: 60 }} source={require('../assets/images/files/watchtv.jpeg')} />
        <View style={styles.topIconView}>
          <View style={{ alignItems: 'center' }}>
            <Image style={{ width: 29, height: 15, marginBottom: 5 }} source={require('../assets/images/files/icon_1.png')} />
            <Text style={styles.txtSmall}>30+ channels of live TV, {"\n"} playing 24/7</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Image style={{ width: 16, height: 16, marginBottom: 5 }} source={require('../assets/images/files/icon_2.png')} />
            <Text style={styles.txtSmall}>15,000 on-demand {"\n"} moviews & shows</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Image style={{ width: 30, height: 16, marginBottom: 5 }} source={require('../assets/images/files/icon_3.png')} />
            <Text style={styles.txtSmall}>Stream it all on your {"\n"} favorite device</Text>
          </View>
        </View>
      </View>
    )
  }

  renderContents() {
    return (
      <View style={{ width: '100%', alignItems: 'center' }}>
        {this._renderTopIcons()}
        <DirecTvWatchCarousel />
        <DirecTvWatchCard />
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

export default connect(mapStateToProps)(DirecTvWatchLayout);
