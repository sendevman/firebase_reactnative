/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Image, View, Text, StyleSheet, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
var { width } = Dimensions.get('window');

// My Customs
import Icon from '../../assets/images/Icon';

class BatteryComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { battery, subType } = this.props;
    const viewWidth = width - 34;
    const { capacity, life } = battery;
    const capacityEmpty = (!capacity || !capacity.trim() || 0 === capacity.length);
    const lifeEmpty = (life !== "undefined"); //Object.keys(life).length === 0 && 
    const talkTimeEmpty = (!life.talkTime || !life.talkTime.trim() || 0 === life.talkTime.length);
    const videoEmpty = (!life.video || !life.video.trim() || 0 === life.video.length);
    const talkEmpty = (!life.talk || !life.talk.trim() || 0 === life.talk.length);
    const workoutEmpty = (!life.workout || !life.workout.trim() || 0 === life.workout.length);
    const audioEmpty = (!life.audio || !life.audio.trim() || 0 === life.audio.length);
    const internetWifiEmpty = (!life.internetWifi || !life.internetWifi.trim() || 0 === life.internetWifi.length);
    const internetL4GEmpty = (!life.internetL4G || !life.internetL4G.trim() || 0 === life.internetL4G.length);
    const batteryLifeEmpty = (talkTimeEmpty && videoEmpty && audioEmpty && internetWifiEmpty && internetL4GEmpty);
    const chargingNoEmpty = (!lifeEmpty &&
      (life.chargingWired || life.chargingWireless ||
        (life.wirelesChargingType && life.wirelesChargingType.length > 0)));
    return (
      <View style={{ height: viewWidth * 670 / 1080, marginTop: 10 }}>
        <View style={styles.hrDivider}></View>
        {/* <Text style={styles.titleDivider}>Battery</Text> */}
        {/* <Icon name="Heading_battery" width={viewWidth} height={viewWidth / 1080 * 210} fill="#1181FF" viewBox="0 0 1080 210" style={{ marginLeft: 6 }} /> */}
        <Image style={[styles.colorBackground, { width: viewWidth, height: viewWidth * 670 / 1080, marginLeft: 6, }]} source={require('../../assets/images/files/battery.png')} />

        <View style={[styles.featuresBox, styles.expandableBox, { width: viewWidth, marginLeft: 6, marginTop: -viewWidth / 1080 * (670 - 210) - 10 }]}>
          {!batteryLifeEmpty &&
            <View style={styles.featureBox}>
              {!talkTimeEmpty &&
                <View>
                  <View style={styles.featureItemBattery}></View>
                  <View style={styles.featureItemBox}>
                    {subType === 'phone' ?
                      <Text style={styles.featureItemTitle}>CALLING</Text>
                      :
                      <Text style={styles.featureItemTitleSmall}>GENERAL USE</Text>
                    }
                    <Text style={styles.featureItemMount}>{life.talkTime.replace(' hrs', '')}</Text>
                    <Text style={styles.featureItemHour}>hours</Text>
                  </View>
                </View>
              }

              {!videoEmpty &&
                <View>
                  <View style={styles.featureItemBattery}></View>
                  <View style={styles.featureItemBox}>
                    <Text style={styles.featureItemTitle}>VIDEO</Text>
                    <Text style={styles.featureItemMount}>{life.video.replace(' hrs', '')}</Text>
                    <Text style={styles.featureItemHour}>hours</Text>
                  </View>
                </View>
              }
              {!talkEmpty &&
                <View>
                  <View style={styles.featureItemBattery}></View>
                  <View style={styles.featureItemBox}>
                    <Text style={styles.featureItemTitle}>TALK</Text>
                    <Text style={styles.featureItemMount}>{life.talk.replace(' hrs', '')}</Text>
                    <Text style={styles.featureItemHour}>hours</Text>
                  </View>
                </View>
              }

              {!audioEmpty &&
                <View>
                  <View style={styles.featureItemBattery}></View>
                  <View style={styles.featureItemBox}>
                    <Text style={styles.featureItemTitle}>AUDIO</Text>
                    <Text style={styles.featureItemMount}>{life.audio.replace(' hrs', '')}</Text>
                    <Text style={styles.featureItemHour}>hours</Text>
                  </View>
                </View>
              }


              {!workoutEmpty &&
                <View>
                  <View style={styles.featureItemBattery}></View>
                  <View style={styles.featureItemBox}>
                    <Text style={styles.featureItemTitle}>WORKOUT</Text>
                    <Text style={styles.featureItemMount}>{life.workout.replace(' hrs', '')}</Text>
                    <Text style={styles.featureItemHour}>hours</Text>
                  </View>
                </View>
              }

              {!internetWifiEmpty &&
                <View>
                  <View style={styles.featureItemBattery}></View>
                  <View style={styles.featureItemBox}>
                    <Text style={styles.featureItemTitle}>WI-FI</Text>
                    <Text style={styles.featureItemMount}>{life.internetWifi.replace(' hrs', '')}</Text>
                    <Text style={styles.featureItemHour}>hours</Text>
                  </View>
                </View>
              }

              {!internetL4GEmpty &&
                <View>
                  <View style={styles.featureItemBattery}></View>
                  <View style={styles.featureItemBox}>
                    {/* <LinearGradient colors={['#39E80E', '#00FFB4']} style={styles.featureItemBox}> */}
                    <Text style={styles.featureItemTitle}>LTE</Text>
                    <Text style={styles.featureItemMount}>{life.internetL4G.replace(' hrs', '')}</Text>
                    <Text style={styles.featureItemHour}>hours</Text>
                  </View>
                </View>
              }
            </View>
          }

          {/* {chargingNoEmpty && */}
            <View style={styles.chagingTypeBox}>
              {/* {life.chargingWired && */}
                <View style={styles.chagingItemBox}>
                  <Icon name="WiredCharging" width="30" height="30" viewBox="0 0 34 34" />
                  <Text style={styles.chagingItemText}>Wired charging</Text>
                </View>
              {/* } */}

              {/* {life.chargingWireless && */}
                <View style={styles.chagingItemBox}>
                  <Icon name="WifiCharging" width="40" height="23" viewBox="0 0 45 26" />
                  <Text style={styles.chagingItemText}>Wireless charging</Text>
                </View>
              {/* } */}
            </View>
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  hrDivider: {
    borderTopWidth: 0,
    borderStyle: 'solid',
    borderTopColor: '#1181FF',
    marginTop: 0,
    marginBottom: 10
  },
  storageBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  // Charging Type Box
  chagingTypeBox: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  chagingItemBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  chagingItemText: {
    marginLeft: 5,
    color: '#3E3F42',
    // fontFamily: 'Roboto',
    fontSize: 11,
    letterSpacing: 0.12,
    lineHeight: 20,
    textAlign: 'center'
  },

  // Feature Box
  featuresBox: {
    marginBottom: 6,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  featureBox: {
    marginTop:10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  // Feature Item Box
  featureItemBattery: {
    backgroundColor:'#4CA90C',
    width: 40,
    height: 8,
    marginLeft:12,
  },
  featureItemBox: {
    borderColor:'#4CA90C',
    borderWidth:2,
    margin: 3,
    marginTop: 0,
    flexGrow: 1,
    height: 85,
    minWidth: 56,
    maxWidth: 56,
    borderRadius: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  featureItemTitle: {
    color: '#3E3F42',
    // fontFamily: 'Roboto',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 0.12,
    lineHeight: 14,
    textAlign: 'center',
    height: 22
  },
  featureItemTitleSmall: {
    color: '#3E3F42',
    height: 22,
    // fontFamily: 'Roboto',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 0.12,
    lineHeight: 10,
    textAlign: 'center'
  },
  featureItemMount: {
    color: '#3E3F42',
    // fontFamily: 'Roboto',
    fontSize: 24,
    letterSpacing: 0.24,
    lineHeight: 28,
    marginTop: 4
  },
  featureItemHour: {
    color: '#3E3F42',
    // fontFamily: 'Roboto',
    fontSize: 12,
    letterSpacing: 0.12,
    lineHeight: 14
  },
})
export default BatteryComponent;
