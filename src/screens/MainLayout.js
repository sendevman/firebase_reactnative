/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import Carousel from 'react-native-snap-carousel';
import { View, Image, Text, TouchableOpacity, Dimensions, Platform } from 'react-native';
import { SafeAreaView, StackActions, NavigationActions } from 'react-navigation';

import { connect } from 'react-redux';

// My Actions
import { setLocationSelectItem } from '../actions/Locations';

// My Customs
import Icon from '../assets/images/Icon';

// My FakeData
// import { FakeAreas } from '../store/AreaFakeData';

// My Styles
import styles, { itemWidth, sliderWidth } from './css/MainScreenCss';
import Dialog, { DialogContent, SlideAnimation, DialogButton } from 'react-native-popup-dialog';
import { setAutomaticZoneEntry, setCurrentZonePopUp, setCurrentZone } from '../actions/Current';
var { width, height } = Dimensions.get('window');

class MainLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sliderActiveSlide: 0,
      visible: false,
      currentZone: null
    }
  }

  gotoDirecTV = () => {
    this.props.navigation.navigate('Discover');
  };

  gotoZone = (index) => {
    /*
    const arrAreas = this.props.location.zones[index];
    this.props.dispatch(setLocationSelectItem(arrAreas));
    this.props.navigation.navigate('TabNav', {
      areaData: arrAreas,
      title: 'wow'
    });
    */
    const arrAreas = this.props.location.zones[index];
    this.props.dispatch(setLocationSelectItem(arrAreas));
    const resetAction = StackActions.reset({
      index: 1,
      key: null,
      actions: [
          NavigationActions.navigate({ routeName: "Home", params: { resetOrder: 1 }}),
          NavigationActions.navigate({ routeName: "TabNav", params: { areaData: arrAreas }})
      ]
    });
    this.props.navigation.dispatch(resetAction);
  }

  gotoService = (index) => {
    this.props.navigation.navigate('ServiceZone');
  };

  setTestId = (identifier) => {
    if (Platform.OS === 'ios') return { testID: identifier };
    else return { accessible: true, accessibilityLabel: identifier };
  };

  _renderItem({ item, index }) {
    return (
      <View style={styles.itemContainer} key={index}>
        <View style={[styles.itemBox, { height: 200 }]}>
          <Image style={styles.bgImage} source={{ uri: item.homeCard.img }} />
          <Image
            style={styles.titleCardArrow}
            resizeMode={Image.resizeMode.cover}
            source={require("../assets/images/files/titleCardArrow.png")} />
          <TouchableOpacity onPress={() => {
            this.gotoZone(index)
          }}>
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

  render() {
    const zones = this.props.location ? [...this.props.location.zones]: [];
    const index = this.state.sliderActiveSlide;

    let bgImg = require('../assets/images/files/splash.png');

    if (zones.length && index < (zones.length - 1)) {
      bgImg = { uri: zones[index].homeCard.img };
    }

    if (zones.length > 1 && !this.props.enteredZoneAutomaticallyForFirstTime) {
      this.gotoZone(0);
      this.props.dispatch(setCurrentZone(zones[0].walkbaseId))
      this.props.dispatch(setAutomaticZoneEntry(true))
    }

    if (this.props.zoneId) {
      if (this.state.currentZone === null || (this.state.currentZone && this.state.currentZone.walkbaseId !== this.props.zoneId)) {
        const currentZone = zones.find(zone => zone.walkbaseId == this.props.zoneId)
        
        if (this.props.showZonPopup) {
          this.setState({
            currentZone,
            visible: true
          });
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
            />
          </View>

          <Dialog
              dialogAnimation={new SlideAnimation({
                useNativeDriver: true,
                slideFrom: 'bottom',
              })}
              dialogStyle={{ top: (height/2) - 80, height: 80, padding: 0}}
              visible={this.state.visible}
            >
            <DialogContent>
                <Image
                    style={{
                      position: 'absolute',
                      height: 300, width, zIndex: 0
                    }}
                  
                    resizeMode={Image.resizeMode.cover}
                    source={{ uri: this.state.currentZone ? this.state.currentZone.homeCard.backgroundImg: '' }}
                  />
                  {
                    this.state.currentZone ?
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({
                          visible: false
                        })
                        
                        this.props.dispatch(setCurrentZonePopUp(false))
    
                        setTimeout(() => {
                          const index = zones.findIndex(zone => zone.walkbaseId == this.props.zoneId)
                          this.gotoZone(index)
                        }, 300);

                      }}
                      style={{flex: 1, flexDirection: 'row', alignItems: 'center', width: width - 90, paddingTop: 20, paddingRight: 10}}>
                        <Image
                          style={{height: 50, width: 50, zIndex: 2}}
                          resizeMode={Image.resizeMode.cover}
                          source={{uri: this.state.currentZone.homeCard.img}} />
                        <View style={{marginLeft: 20, zIndex: 2}}>
                          <Text style={{ fontSize: 22, color: '#fff'}}>{this.state.currentZone.name}</Text> 
                          <Text style={{color: '#fff'}}>{this.state.currentZone.homeCard.subtitle}</Text>
                        </View>
                    </TouchableOpacity>
                    :
                    <View></View>
                  }
                  
                  <TouchableOpacity onPress={() => this.setState({ visible: false })} style={{ zIndex: 2, position: 'absolute', width: 36, height: 42, right: -10, top: 10, borderTopRightRadius: 16 }}>
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
