/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Image, Platform, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Carousel from 'react-native-snap-carousel';
import { connect } from 'react-redux';

// My Actions
import { setLocationAllInfo, setLocationSelectItem } from '../actions/Locations';

// My Customs
import Icon from '../assets/images/Icon';

// My FakeData
// import { FakeAreas } from '../store/AreaFakeData';

// My Styles
import styles, { itemWidth, sliderWidth } from './css/MainScreenCss';

class MainLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sliderActiveSlide: 0,
      locationData: null,
    };

    this.getCurrentLocationData();
  }

  componentWillReceiveProps(nextProps) {
    console.log('==', nextProps.locations);
    if (this.props.locationData !== nextProps.locations) {
      console.log('==', nextProps.locationData);
    }
  }

  getCurrentLocationData = () => {
    const locationtRef = firebase.firestore().collection('locations');
    locationtRef.get().then(snapshot => {
      const ref_path = snapshot.docs.map(doc => doc.ref.path);
      const locationList = snapshot.docs.map(doc => doc.data());
      var locations = [];
      for (i = 0; i < locationList.length; i++) {
        var data = locationList[i];
        data.id = ref_path[i].split('/')[1];
        locations.push(data);
      }
      this.getLocationCollectionData(locations);
    });
  };

  getLocationCollectionData = (locations) => {
    Promise.all(
      locations.map(
        location =>
          new Promise((resolve, reject) => {
            Promise.all(
              [ 'zones', 'directv-preview', 'vod' ].map(
                property =>
                  new Promise((resolve1, reject1) => {
                    const zoneid = 'locations/' + location.id + '/' + property;
                    const zonesRef = firebase.firestore().collection(zoneid);
                    zonesRef
                      .get()
                      .then(snapshot1 => {
                        const propertyList = snapshot1.docs.map(doc => doc.data());
                        location[property] = propertyList;
                        resolve1(propertyList);
                      })
                      .catch(err => {
                        console.log('Error getting documents', err);
                      });
                  }),
              ),
            )
              .then(propertis => {
                resolve(location);
              })
              .catch(err => {
                console.log('Error getting documents', err);
              });
          }),
      ),
    )
      .then(results => {
        this.props.dispatch(setLocationAllInfo(results));
        this.setState({ locationData: results });
      })
      .catch(error => {});
  };

  gotoDirecTV = () => {
    this.props.navigation.navigate('Discover');
  };

  gotoZone = (index) => {
    const arrAreas = this.state.locationData[1].zones[index];
    this.props.dispatch(setLocationSelectItem(arrAreas));
    this.props.navigation.navigate('TabNav', {
      areaData: arrAreas,
    });
  };

  gotoService = (index) => {
    this.props.navigation.navigate('ServiceZone');
  };

  setTestId = (identifier) => {
    if (Platform.OS === 'ios') return { testID: identifier };
    else return { accessible: true, accessibilityLabel: identifier };
  };

  _renderItem({ item, index }) {
    if (item === 'Home Card') {
      return (
        <View {...this.setTestId("MainLayoutCarouselItemCard")} style={styles.itemContainer} key={index}>
          <View style={[ styles.itemBox, { height: 200 } ]}>
            <Image style={styles.bgImage} source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/retail-companion-dev.appspot.com/o/test_images%2FHome%20open%20card.png?alt=media&token=8d506775-6c49-4ca8-b787-4da0c9e1b61d' }} />
            <Image
              style={styles.titleCardArrow}
              resizeMode={Image.resizeMode.cover}
              source={require('../assets/images/files/titleCardArrow.png')} />
            <TouchableOpacity {...this.setTestId("MainLayoutGoToZone")} onPress={() => this.gotoDirecTV()}>
              <View style={[ styles.titleCardBox ]}>
                <Icon height="30" width="30" name="ManIcon" viewBox="0 0 127 125" fill="#000" />
                <Text numberOfLines={1} style={styles.titleCard}>Home Card</Text>
              </View>
              {/* <Text numberOfLines={1} style={styles.subTitleCard}>{item.titleCard.subtitle}</Text> */}
            </TouchableOpacity>
          </View>
        </View>
      );
    } else if (item === 'DirecTV') {
      return (
        <View {...this.setTestId("MainLayoutCarouselItemCard")} style={styles.itemContainer} key={index}>
          <View style={[styles.itemBox, { height: 200 }]}>
            <Image style={styles.bgImage} source={require("../assets/images/files/titleCardArrow.png")} />
            <Image
              style={styles.titleCardArrow}
              resizeMode={Image.resizeMode.cover}
              source={require("../assets/images/files/titleCardArrow.png")} />
            <TouchableOpacity {...this.setTestId("MainLayoutGoToZone")} onPress={() => this.gotoDirecTV()}>
              <View style={[styles.titleCardBox]}>
                <Icon height="30" width="30" name="ManIcon" viewBox="0 0 127 125" fill="#000" />
                <Text numberOfLines={1} style={styles.titleCard}>DirecTV</Text>
              </View>
              {/* <Text numberOfLines={1} style={styles.subTitleCard}>{item.titleCard.subtitle}</Text> */}
            </TouchableOpacity>
          </View>
        </View>
      );
    } else {
      return (
        <View {...this.setTestId("MainLayoutCarouselItemCard")} style={styles.itemContainer} key={index}>
          <View style={[styles.itemBox, { height: 200 }]}>
            <Image style={styles.bgImage} source={{ uri: item.homeCard.img }} />
            <Image
              style={styles.titleCardArrow}
              resizeMode={Image.resizeMode.cover}
              source={require('../assets/images/files/titleCardArrow.png')} />
            <TouchableOpacity {...this.setTestId("MainLayoutGoToZone")} onPress={() => this.gotoZone(index)}>
              <View style={[styles.titleCardBox]}>
                <Icon height="30" width="30" name="ManIcon" viewBox="0 0 127 125" fill="#000" />
                <Text numberOfLines={1} style={styles.titleCard}>{item.titleCard.title}</Text>
              </View>
              <Text numberOfLines={1} style={styles.subTitleCard}>{item.titleCard.subtitle}</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
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
        <View {...this.setTestId("MainLayoutBox")} style={{ width: '100%', height: '100%' }}>
          <Image {...this.setTestId("MainLayoutImg")} style={styles.backImage} source={bgImg} />
          <View {...this.setTestId("MainLayoutCarousel")} style={styles.sliderView}>
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
