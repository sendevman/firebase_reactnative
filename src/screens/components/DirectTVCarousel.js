/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Image, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { FakeDirecTVPackages } from '../../store/DirecTVPackageFakeData';
import { FakeDirecTVChannel } from '../../store/DirecTVChannelFakeData';

import Carousel from 'react-native-snap-carousel';
// My Styles
import styles from '../css/DirecTVCarouselCss';
import { itemWidth, sliderWidth } from '../css/MainScreenCss';
class DirecTVCarousel extends Component {
  _renderItem(e) {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/files/directv_save.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <View style={styles.cardContainer}>
          <Text style={styles.txtTitle}>Title ...{e.item} </Text>
          <Text style={styles.txtSmall}>Content{'\nsfjiwjighijef\n'}wjiowhjighef</Text>
        </View>
        <Text style={styles.txtSaveTitle}>jghwijfiwoehfiowef</Text>
      </View>
    );
  }
  render() {
    const slides = [ 1, 2, 3, 4 ];
    return (
      <Carousel
        data={slides}
        renderItem={this._renderItem.bind(this)}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        onSnapToItem={index => {}}
      />
    );
  }
}

export default DirecTVCarousel;
