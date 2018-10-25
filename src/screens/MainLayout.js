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
      locationData: null
    }
    this.getCurrentLocationData();
  }

  componentWillReceiveProps(nextProps) {
    console.log("==", nextProps.locations)
    if (this.props.locationData !== nextProps.locations) {
      console.log("==", nextProps.locationData)
    }
  }
  getCurrentLocationData() {
    const locationtRef = firebase.firestore().collection('locations');
    locationtRef.get()
      .then(snapshot => {
        const ref_path = snapshot.docs.map(doc => doc.ref.path);
        const locationList = snapshot.docs.map(doc => doc.data());
        var locations = [];
        for (i = 0; i < locationList.length; i++) {
          var data = locationList[i];
          data.id = ref_path[i].split("/")[1];
          locations.push(data);
        }
        this.getLocationCollectionData(locations);
      })
  }

  getLocationCollectionData = (locations) => {
    Promise.all(
      locations.map(location => new Promise((resolve, reject) => {
        Promise.all(
          ['zones', 'directv-preview', 'vod'].map(property => new Promise((resolve1, reject1) => {
            const zoneid = 'locations/' + location.id + '/' + property;
            const zonesRef = firebase.firestore().collection(zoneid);
            zonesRef.get()
              .then(snapshot1 => {
                const propertyList = snapshot1.docs.map(doc => doc.data());
                location[property] = propertyList;
                resolve1(propertyList);
              })
              .catch(err => { console.log('Error getting documents', err); });
          }))
        )
          .then(propertis => {
            resolve(location);
          })
          .catch(err => { console.log('Error getting documents', err); });
      })
      )
    ).then(results => {
      this.props.dispatch(setLocationAllInfo(results));
      this.setState({ locationData: results })
      console.log("****", results);
    })
      .catch(error => { })
  }

  gotoZone = (index) => {
    const arrAreas = this.state.locationData[0].zones[index];
    this.props.dispatch(setLocationSelectItem(arrAreas));
    this.props.navigation.navigate('TabNav', {
      areaData: arrAreas
    });
  }
  gotoService = (index) => {
    this.props.navigation.navigate('ServiceZone');
  }

  _renderItem({ item, index }) {
    return (
      <View style={styles.itemContainer} key={index}>
        <TouchableOpacity onPress={() => this.gotoZone(index)}>
          <View style={styles.itemImgBG}>
            <Image style={styles.bgImage} source={{ uri: item.titleCard.img }} />
          </View>
        </TouchableOpacity>
        <View style={styles.itemRight}>
          <Text style={styles.textTitle}>{item.titleCard.title}</Text>
          <Text style={styles.textSubTitle}>{item.titleCard.subtitle}</Text>
        </View>
      </View>
    );
  }

  render() {
    const { locationData, sliderActiveSlide } = this.state;
    console.log(locationData);
    let currentLocationsData = null;
    let bgImg = require('../assets/images/files/splash.png');
    if (locationData !== null) {
      currentLocationsData = locationData[0].zones;
      bgImg = {uri: locationData[0].zones[sliderActiveSlide].homeCard.img};
    }
    return (
      <SafeAreaView forceInset={{ top: 'always' }} style={{ backgroundColor: '#FFF' }}>
        <View style={{ width: '100%', height: '100%' }}>
          <Image style={styles.backImage} source={bgImg} />
          <View style={styles.sliderView}>
            {currentLocationsData &&
              <Carousel
                ref={c => this._carouselRef = c}
                data={currentLocationsData}
                renderItem={this._renderItem.bind(this)}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
                onSnapToItem={index => {
                  this.setState({ sliderActiveSlide: index });
                }} />
            }
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  const { common, current, productsNear, locaitons } = state;

  return { firebaseid: common.firebaseid, currentPosition: current.position, productsNear: productsNear.productsNear, locationData: locations.locationAll };
}

export default connect(mapStateToProps)(MainLayout);
