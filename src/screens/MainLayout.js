/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';
import Icon from '../assets/images/Icon';
// Action
import { setLocationAllInfo, setLocationSelectItem } from '../actions/Locations';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import { FakeAreas } from '../store/AreaFakeData';
// My Styles
import styles, { itemWidth, sliderWidth } from './css/MainScreenCss';

class MainLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sliderActiveSlide: 0,
    }
  }

  gotoDirecTV = () => {
    this.props.navigation.navigate('Discover');
  }

  gotoZone = (index) => {
    const arrAreas = this.props.location.zones[index];
    this.props.dispatch(setLocationSelectItem(arrAreas));
    this.props.navigation.navigate('TabNav', {
      areaData: arrAreas
    });
  }

  gotoService = (index) => {
    this.props.navigation.navigate('ServiceZone');
  }

  _renderItem({ item, index }) {
    if (item === 'DirecTV') {
      return (<View style={styles.itemContainer} key={index}>
        <View style={[styles.itemBox, { height: 200 }]}>
          <Image style={styles.bgImage} source={require("../assets/images/files/titleCardArrow.png")} />
          <Image
            style={styles.titleCardArrow}
            resizeMode={Image.resizeMode.cover}
            source={require("../assets/images/files/titleCardArrow.png")} />
          <TouchableOpacity onPress={() => this.gotoDirecTV()}>
            <View style={[styles.titleCardBox]}>
              <Icon height="30" width="30" name="ManIcon" viewBox="0 0 127 125" fill="#000" />
              <Text numberOfLines={1} style={styles.titleCard}>DirecTV</Text>
            </View>
            {/* <Text numberOfLines={1} style={styles.subTitleCard}>{item.titleCard.subtitle}</Text> */}
          </TouchableOpacity>
        </View>
      </View>
      )
    } else {
      return (
        <View style={styles.itemContainer} key={index}>
          <View style={[styles.itemBox, { height: 200 }]}>
            <Image style={styles.bgImage} source={{ uri: item.homeCard.img }} />
            <Image
              style={styles.titleCardArrow}
              resizeMode={Image.resizeMode.cover}
              source={require("../assets/images/files/titleCardArrow.png")} />
            <TouchableOpacity onPress={() => this.gotoZone(index)}>
              <View style={[styles.titleCardBox]}>
                <Icon height="30" width="30" name="ManIcon" viewBox="0 0 127 125" fill="#000" />
                <Text numberOfLines={1} style={styles.titleCard}>{item.titleCard.title}</Text>
              </View>
              <Text numberOfLines={1} style={styles.subTitleCard}>{item.titleCard.subtitle}</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    }
  }

  render() {
    const zones = this.props.location ? [...this.props.location.zones, 'DirecTV'] : ['DirecTV'];
    const index = this.state.sliderActiveSlide;

    let bgImg = require('../assets/images/files/splash.png');

    if (zones.length && index < (zones.length - 1)) {
      bgImg = { uri: zones[index].homeCard.img };
    }

    return (
      <SafeAreaView forceInset={{ top: 'always' }} style={{ backgroundColor: '#FFF' }}>
        <View style={{ width: '100%', height: '100%' }}>
          <Image style={styles.backImage} source={bgImg} />
          <View style={styles.sliderView}>
            <Carousel
              data={zones}
              renderItem={this._renderItem.bind(this)}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
              onSnapToItem={index => {
                this.setState({ sliderActiveSlide: index });
              }} />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  const { current } = state;

  return {
    ...current
  };
}

export default connect(mapStateToProps)(MainLayout);