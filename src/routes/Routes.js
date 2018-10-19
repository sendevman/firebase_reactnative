/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { AsyncStorage, Button, NetInfo, ScrollView, StatusBar, Text, View, NativeEventEmitter, NativeModules } from 'react-native';
import { createDrawerNavigator, createBottomTabNavigator, SafeAreaView } from 'react-navigation';
import { NetworkInfo } from 'react-native-network-info';
import firebase from 'react-native-firebase';
import { connect } from 'react-redux';

// My Customs
import Icon from '../assets/images/Icon';

// My Layouts
import ProductLayout from '../screens/ProductLayout';
import VodLayout from '../screens/VodLayout';

// My Actions
import { setLocationData } from '../actions/Current';
import { setFirebaseID, setNetworkInfo } from '../actions/Common';

// Walkbase Engage
// import BleManager from 'walkbase-sdk';
import MainLayout from '../screens/MainLayout';
import DirecTVLayout from '../screens/DirecTVLayout';
import ExperienceLayout from '../screens/ExperienceLayout';
var DeviceInfo = require('react-native-device-info');
const deviceId = DeviceInfo.getUniqueID();
const BleManagerModule = NativeModules.BleManager;
// const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);
const ws = new WebSocket('wss://wai.walkbase.com/api/v2/subscribe/device');

const BottomTabNav = createBottomTabNavigator(
  {
    Home: {
      screen: MainLayout,
      navigationOptions: {
        title: 'Home',
        tabBarIcon: ({ tintColor }) => {
          return <Icon name="SharedSession" width="22" height="22" fill={tintColor} viewBox="0 0 22 22" />;
        }
      }
    },
    ExclusiveVod: {
      screen: VodLayout,
      navigationOptions: {
        title: 'VOD',
        tabBarIcon: ({ tintColor }) => {
          if (tintColor === "#3E3F42")
            return <Icon name="ExclusiveVodUnFill" width="22" height="18" viewBox="0 0 22 18" />;
          else
            return <Icon name="ExclusiveVodFill" width="22" height="18" viewBox="0 0 22 18" />;
        }
      }
    },
    DirecTV: {
      screen: DirecTVLayout,
      navigationOptions: {
        title: 'DirecTV',
        tabBarIcon: ({ tintColor }) => {
          if (tintColor === "#3E3F42")
            return <Icon name="ExclusiveVodUnFill" width="22" height="18" viewBox="0 0 22 18" />;
          else
            return <Icon name="ExclusiveVodFill" width="22" height="18" viewBox="0 0 22 18" />;
        }
      }
    },
    Experience: {
      screen: ExperienceLayout,
      navigationOptions: {
        title: 'Experience',
        tabBarIcon: ({ tintColor }) => {
          return <Icon name="Compare" width="22" height="22" fill={tintColor} viewBox="0 0 22 22" />;
        }
      }
    },
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      activeTintColor: '#FFF',
      activeBackgroundColor: '#1181FF',
      inactiveTintColor: '#3E3F42',
      style: { height: 55 },
      labelStyle: {
        marginTop: -4,
        marginBottom: 8,
        // fontFamily: 'SF Pro Text',
        fontSize: 11,
        fontWeight: '500',
        letterSpacing: 0.13,
        lineHeight: 13,
        textAlign: 'center'
      }
    }
  }
);

// export default DrawerNav;
// END Before --------------------------------------------------------------

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ispass: false
    };
    this.getStoreData();
  }
  getStoreData = async () => {
    try {
      const result = await AsyncStorage.getItem('passOnboarding');
      if (result === "passed") {
        this.setState({
          ispass: true
        })
      }
    } catch (error) {
      console.log("===", error);
    }
  }

  componentWillMount() {
    // My Listeners
    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
  }

  componentDidMount() {
    this.webAPI();
    this.firebaseLogin();
  }

  componentWillUnmount() {
    this.websocketClose();
    navigator.geolocation.clearWatch(this.watchID);
  }
  
  firebaseLogin() {
    firebase.auth().signInAnonymously()
      .then(user => {
        console.log("firebase user : ", user._user.uid);
        this.props.dispatch(setFirebaseID(user._user.uid));
        firebase.analytics().setUserId(user._user.uid);
      });
  }

  handleConnectivityChange = isConnected => { this.setNetworkInfo(isConnected); }

  setNetworkInfo(isConnected) {
    NetInfo.getConnectionInfo()
      .then(connectionInfo => {
        NetworkInfo.getSSID(ssid => {
          let data = {
            connectionType: connectionInfo.type,
            isConnected: isConnected,
            ssid: ssid
          }
          this.props.dispatch(setNetworkInfo(data));
        });
      });
  }

  handleEventReceivedAdvertisement(data) {
    console.log(data);
  }

  handleEventErrors(data) {
    if (data.state === 'WBErrorUnknown') {
      console.log(data);
    } else if (data.state === 'WBErrorBluetoothOff') {
      alert("Bluetooth is OFF. Please ON the Bluetooth");
      // this.setState({ bleState: 0 })
    } else if (data.state === 'Not error code') {
      // this.setState({ bleState: 1 })
    }
  }


  webAPI() {
    ws.onopen = () => {
      // connection opened
      ws.send('{"user_id": "' + deviceId + '", "api_key": "VZHkscRFhAjkScc"}'); // send a message
    };

    var last_zone_id = -1;
    var zone_id = -1;
    var zoneData = new Array();
    var errorCheck = 0;
    const maxLength = 5;
    ws.onmessage = (e) => {

      if (e.data !== "") {
        locationdata = JSON.parse(e.data);
        if (locationdata.zone_id === null) { }//zone_id = -1;
        else zone_id = locationdata.zone_id;

        if (zoneData.length > 5) zoneData.shift();

        zoneData.push(zone_id);

        if (zoneData.length === 6) {
          console.log("zonData===", JSON.stringify(zoneData));
          if (zoneData[5] === zoneData[4] || zoneData[5] === zoneData[3]) {
            for (let i = 0; i < 5; i++) {
              if (zoneData[5] === zoneData[i]) errorCheck += (i + 1);
            }
            if (errorCheck >= 4) {
              if (last_zone_id != locationdata.zone_id) {
                this.props.dispatch(setLocationData(locationdata));
              }
              last_zone_id = locationdata.zone_id;
              errorCheck = 0;
            }
          }
          else if (zoneData[4] === zoneData[3]) {
            for (let i = 0; i < 4; i++) {
              if (zoneData[4] === zoneData[i]) errorCheck += (i + 1);
            }
            if (errorCheck >= 3) {
              if (last_zone_id != locationdata.zone_id) {
                this.props.dispatch(setLocationData(locationdata));
              }
              last_zone_id = locationdata.zone_id;
              errorCheck = 0;
            }
          }
        }
      }

    };

    ws.onerror = (e) => {
      // an error occurred
      console.log(e.message);
    };
  }

  websocketClose() {
    ws.onclose = (e) => {
      // connection closed
      console.log(e.code, e.reason);
    };
  }

  render() {
    return (
      <BottomTabNav />
    )
  }
  render1() {
    const ispass = this.state.ispass;
    return (
      ispass ? <DrawerNav /> : <DrawerNav1 />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setLocationData: (data) => {
      return dispatch(setLocationData(data))
    },
    setNetworkInfo: (data) => {
      return dispatch(setNetworkInfo(data))
    }
  };
}

export default connect(mapDispatchToProps)(Routes);
