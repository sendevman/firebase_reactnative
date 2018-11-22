/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Image, Platform, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import { NavigationActions, SafeAreaView, StackActions } from 'react-navigation';
import Carousel from 'react-native-snap-carousel';
import Dialog, { DialogContent, SlideAnimation } from 'react-native-popup-dialog';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';

var { width, height } = Dimensions.get('window');

// My Actions
import { setAutomaticZoneEntry, setCurrentZone, setCurrentZonePopUp } from '../actions/Current';
import { setLocationSelectItem } from '../actions/Locations';

// My Customs
import Icon from '../assets/images/Icon';

// My FakeData
// import { FakeAreas } from '../store/AreaFakeData';

// My Styles
import styles, { itemWidth, sliderWidth } from './css/MainScreenCss';
import AutoHeightImage from 'react-native-auto-height-image';
import firebase from 'react-native-firebase';

class MainLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sliderActiveSlide: 0,
      visible: false,
      currentZone: null,
      home: null
    };

    firebase.firestore().doc(`locations/off_site/siteData/home`).get().then(e => {
      this.setState({
        home: e.data()
      });
    })
  }

  gotoZone = (index) => {
    // this is homecard and not a zone.
    if (index === -1) {
      return;
    }
    /*
    const arrAreas = this.props.location.zones[index];
    this.props.dispatch(setLocationSelectItem(arrAreas));
    this.props.navigation.navigate('TabNav', {
      areaData: arrAreas,
    });
    */
    const arrAreas = this.props.location.zones[index];
    console.log(arrAreas);

    const videoService = arrAreas.titleCard.title == 'Video Service';
    this.props.dispatch(setLocationSelectItem(arrAreas));
    const resetAction = StackActions.reset({
      index: 1,
      key: null,
      actions: [
        NavigationActions.navigate({ routeName: "Home", params: { resetOrder: 1 } }),
        NavigationActions.navigate({ routeName: "TabNav", params: { areaData: arrAreas, videoService } })
      ]
    });
    this.props.navigation.dispatch(resetAction);
  };

  gotoService = (index) => {
    this.props.navigation.navigate('ServiceZone');
  };

  setTestId = (identifier) => {
    if (Platform.OS === 'ios') return { testID: identifier };
    else return { accessible: true, accessibilityLabel: identifier };
  };

  _renderItem({ item, index }) {
    return (
      <View {...this.setTestId("MainLayoutCarouselItemCard")} style={styles.itemContainer} key={index}>
        <View style={[styles.itemBox, { height: 200 }]}>
          <Image style={styles.bgImage} source={{ uri: item.homeCard.img }} />
          <Image
            style={styles.titleCardArrow}
            resizeMode={Image.resizeMode.cover}
            source={require('../assets/images/files/titleCardArrow.png')} />

          <TouchableOpacity
            {...this.setTestId("MainLayoutGoToZone")}
            onLongPress={() => {
              console.log('LONG PRESS');
              setTimeout(() => {
                this.props.dispatch(setCurrentZone(10011));
                this.props.dispatch(setCurrentZonePopUp(true));
              }, 3000);
            }}
            onPress={() => {
              this.gotoZone(index - 1);
            }}
          >
            <View style={styles.titleCardBox}>
              <Icon height="30" width="30" name="ManIcon" viewBox="0 0 127 125" fill="#000" />
              <Text numberOfLines={1} style={styles.titleCard}>{item.homeCard.title}</Text>
            </View>
            <Text numberOfLines={1} style={styles.subTitleCard}>{item.homeCard.subtitle}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  render() {
    let zones = [];

    if (this.state.home) {
      zones.push(this.state.home);
    }

    if (this.props.location) {
      zones = [...zones, ...this.props.location.zones];
    }

    const index = this.state.sliderActiveSlide;

    let bgImg = require('../assets/images/files/splash.png');

    if (zones.length && index < (zones.length - 1)) {
      bgImg = { uri: zones[index].homeCard.bgImg };
    }

    if (zones.length > 1 && !this.props.enteredZoneAutomaticallyForFirstTime) {
      // Commented at Joseph's request!
      // 2. When the app opens it should open to the home page not the discover page
      // this.gotoZone(0);
      // this.props.dispatch(setCurrentZone(zones[0].walkbaseId))
      // this.props.dispatch(setAutomaticZoneEntry(true))
    }

    if (this.props.zoneId) {
      if (this.state.currentZone === null || (this.state.currentZone && this.state.currentZone.walkbaseId !== this.props.zoneId)) {
        const currentZone = zones.find(zone => zone.walkbaseId == this.props.zoneId);

        if (this.props.showZonPopup) {
          this.setState({ currentZone, visible: true });
        }
      }
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

          <Dialog
            dialogAnimation={new SlideAnimation({ useNativeDriver: true, slideFrom: 'bottom' })}
            dialogStyle={styles.dialogStyle}
            visible={this.state.visible}
          >
            <DialogContent>
              <Image
                style={styles.dialogContentImage}
                resizeMode={Image.resizeMode.cover}
                source={{ uri: this.state.currentZone ? this.state.currentZone.homeCard.bgImg : '' }} />
              {
                this.state.currentZone ?
                <TouchableOpacity
                  onPress={() => {
                    this.setState({ visible: false });

                    this.props.dispatch(setCurrentZonePopUp(false));

                    setTimeout(() => {
                      const index = zones.findIndex(zone => zone.walkbaseId == this.props.zoneId);
                      this.gotoZone(index);
                    }, 300);
                  }}
                  style={styles.dialogContentTouch}>
                  <Image
                    style={styles.dialogContentTouchImage}
                    resizeMode={Image.resizeMode.cover}
                    source={{ uri: this.state.currentZone.homeCard.img }} />
                  <View style={{ marginLeft: 20, zIndex: 2, height: 60 }}>
                    <Text style={{ fontSize: 22, color: '#fff' }}>{this.state.currentZone.homeCard.title}</Text> 
                    <Text style={{ color: '#fff' }}>{this.state.currentZone.homeCard.subtitle}</Text>
                  </View>
                </TouchableOpacity>
                :
                <View></View>
              }
              <TouchableOpacity onPress={() => this.setState({ visible: false })} style={styles.dialogContentTouchOut}>
                <Icon name="CloseX" width="14" height="14" viewBox="0 0 14 14" fill="#1181FF" />
              </TouchableOpacity>
            </DialogContent>
          </Dialog>
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
