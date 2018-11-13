/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { AsyncStorage, Button, NativeEventEmitter, NativeModules, NetInfo, ScrollView, StatusBar, Text, View, YellowBox } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { NetworkInfo } from 'react-native-network-info';
import firebase from 'react-native-firebase';
import { connect } from 'react-redux';

// My Actions
import { setFirebaseID, setNetworkInfo } from '../actions/Common';
import { setCurrentLocation, setLocationData } from '../actions/Current';

// My Customs
import Icon from '../assets/images/Icon';

// My Layouts
import CompareLayout from '../screens/CompareLayout';
import DiscoverServiceLayout from '../screens/DiscoverServiceLayout';
import ExperienceLayout from '../screens/ExperienceLayout';
import MainLayout from '../screens/MainLayout';
import ProductLayout from '../screens/ProductLayout';
import VodLayout from '../screens/VodLayout';

// My Screens
import BottomTabNav from '../screens/BottomTabNav';

// Walkbase Engage
// import BleManager from 'walkbase-sdk';
var DeviceInfo = require('react-native-device-info');
const deviceId = DeviceInfo.getUniqueID();
const BleManagerModule = NativeModules.BleManager;
// const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);
// const ws = new WebSocket('wss://wai.walkbase.com/api/v2/subscribe/device');
// const ws = new WebSocket('wss://wai.walkbase.com/api/v2/subscribe');
const ws = new WebSocket('wss://wai.walkbase.com/api/v2/subscribe/device/zones');

YellowBox.ignoreWarnings([ 'Warning: isMounted(...) is deprecated', 'Class RCTCxxModule' ]);

const MainNav = createStackNavigator(
  {
    Home: {
      screen: MainLayout,
    },
    TabNav: {
      screen: BottomTabNav,
    },
    Compare: {
      screen: CompareLayout,
    },
    ProductLayout: {
      screen: ProductLayout,
    },
    Discover: {
      screen: DiscoverServiceLayout,
    },
    ServiceZone: {
      screen: DiscoverServiceLayout,
    },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    gesturesEnabled: false,
  },
);

class Routes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ispass: false,
    };

    this.getStoreData();
  }

  componentWillMount() {
    // My Listeners
    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
  }

  componentDidMount() {
    this.firebaseLogin();
  }

  componentWillUnmount() {
    this.websocketClose();
    navigator.geolocation.clearWatch(this.watchID);
  }

  getStoreData = async () => {
    try {
      const result = await AsyncStorage.getItem('passOnboarding');
      if (result === 'passed') {
        this.setState({ ispass: true });
      }
    } catch (error) {
      console.log('===', error);
    }
  };

  handleConnectivityChange = (isConnected) => {
    this.setNetworkInfo(isConnected);
  };

  setNetworkInfo = (isConnected) => {
    NetInfo.getConnectionInfo().then(connectionInfo => {
      NetworkInfo.getSSID(ssid => {
        let data = {
          connectionType: connectionInfo.type,
          isConnected: isConnected,
          ssid: ssid,
        };
        this.props.dispatch(setNetworkInfo(data));
      });
    });
  };

  firebaseLogin = () => {
    firebase.auth().signInAnonymously()
      .then(user => {
        console.log("firebase user : ", user._user.uid);
        this.props.dispatch(setFirebaseID(user._user.uid));
        firebase.analytics().setUserId(user._user.uid);

        /**
         * This function is called when walkbase sends us a site id.
         * Mimicing that walkbase onmessage receives a call with the site id after 10 seconds.
         * and here it goes...
         */
        /*
        setTimeout(() => {
          console.log('FIRING LOCATION');
          this.fetchSiteData('p9ZRp6uaLCjJiT9zJSDd');
          setTimeout(() => {
            console.log('FIRING OFFSITE');
            this.fetchSiteData('off_site');
          }, 20000);
        }, 10000);
        */

        this.webPresenceAPI();
      });
  };

  webPresenceAPI = () => {
    ws.onopen = () => {
      // connection opened
      // NearbyAuthRequest
      // ws.send('{"user_id": "' + deviceId + '", "api_key": "VZHkscRFhAjkScc"}'); // send a message
      ws.send('{"device_id": "' + deviceId + '", "api_key": "VZHkscRFhAjkScc"}'); // send a message
    };

    var last_zone_id = -1;
    var zone_id = -1;
    let confidence = 0;
    var zoneData = new Array();
    var confidenceData = new Array();

    ws.onmessage = (e) => {
      // implement the codes from webAPI() and remove webAPI after that.
      let locationdata = null;
      try {
        locationdata = JSON.parse(e.data);
      } catch (e) {}

      if (locationdata) {
        if (locationdata.zone_id === null) {} // zone_id = -1;
        else {
          zone_id = locationdata.zone_id;
          confidence = locationdata.confidence;
        }

        if (zoneData.length > 5) {
          zoneData.shift();
          confidenceData.shift();
        }

        zoneData.push(zone_id);
        confidenceData.push(confidence);

        if (zoneData.length === 6) {
          if (confidenceData[5] > 0.9 && confidenceData[4] > 0.9 && confidenceData[3] > 0.9 && confidenceData[2] > 0.9) {
            if (zoneData[5] === zoneData[4] && zoneData[5] === zoneData[3] && zoneData[5] === zoneData[2]) {
              if (last_zone_id != locationdata.zone_id) {
                // this.props.dispatch(setLocationData(locationdata));
                if (this.props.current.location.storeId !== locationdata.site_id) {
                  this.fetchSiteData(locationdata.site_id);
                }
              }
              last_zone_id = locationdata.zone_id;
            }
          }
        }
      } else {
        if (!this.props.current.location || this.props.current.location.storeId !== 'off_site') {
          this.fetchSiteData('off_site');
        }
      }
    };

    ws.onerror = (e) => {
      // an error occurred
      console.log(e.message);
    };
  };

  fetchSiteData = (siteId) => {
    Promise.all([
      firebase.firestore().collection(`locations/${siteId}/zones`).get(),
      firebase.firestore().collection(`locations/${siteId}/vod`).get(),
      firebase.firestore().collection(`locations/${siteId}/directv-preview`).get()
    ]).then(snapshots => {
      snapshots = snapshots.map(snapshot => {
        return snapshot.docs.map(doc => doc.data())
      });

      firebase.firestore().collection('locations').doc(siteId).get().then(siteInfoSnapshot => {
        const siteData = {
          siteInfo: siteInfoSnapshot.data(),
          zones: snapshots[0],
          vod: snapshots[1],
          directvPreview: snapshots[2],
        };

        this.props.dispatch(setCurrentLocation(siteData));
      });
    });
  };

  websocketClose = () => {
    ws.onclose = (e) => {
      // connection closed
      console.log(e.code, e.reason);
    };
  };

  handleEventReceivedAdvertisement = (data) => {
    console.log(data);
  };

  handleEventErrors = (data) => {
    if (data.state === 'WBErrorUnknown') {
      console.log(data);
    } else if (data.state === 'WBErrorBluetoothOff') {
      alert('Bluetooth is OFF. Please ON the Bluetooth');
      // this.setState({ bleState: 0 })
    } else if (data.state === 'Not error code') {
      // this.setState({ bleState: 1 })
    }
  };

  render() {
    return (
      <MainNav />
    );
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     setLocationData: data => {
//       return dispatch(setLocationData(data));
//     },
//     setNetworkInfo: data => {
//       return dispatch(setNetworkInfo(data));
//     },
//     dispatch,
//   };
// }

const mapStateToProps = state => {
  const { current } = state;

  return {
    current
  };
}

// export default connect(mapDispatchToProps, mapStateToProps)(Routes);
export default connect(mapStateToProps)(Routes);
