/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import { FakeAreas } from '../store/AreaFakeData';
// My Styles
import styles, { itemWidth, sliderWidth } from './css/MainScreenCss';

class MainLayout extends Component {
  constructor(props) {
    super(props);
  }

  _renderItem({ item, index }) {
    console.log(item);
    return (
      <View style={styles.itemContainer} key={index}>
        <View style={styles.itemImgBG}>
          <Image style={styles.bgImage} source={{ uri: item.img }} />
        </View>
        <View style={styles.itemRight}>
          <Text>{item.title}</Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView forceInset={{ top: 'always' }} style={{ backgroundColor: '#FFF' }}>
        <View style={{ width: '100%', height: '100%' }}>
          <Image style={styles.backImage} source={require('../assets/images/files/splash.png')} />
          <View style={styles.sliderView}>
            <Carousel
              ref={c => this._carouselRef = c}
              data={FakeAreas}
              renderItem={this._renderItem.bind(this)}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth} />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  const { common, current, productsNear } = state;

  return { firebaseid: common.firebaseid, locationData: current.position, productsNear: productsNear.productsNear };
}

export default connect(mapStateToProps)(MainLayout);
