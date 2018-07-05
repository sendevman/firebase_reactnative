/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import moment from 'moment';
import { Image, Text, View,YellowBox,
  NativeEventEmitter,
  NativeModules, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Carousel from 'react-native-carousel-view';

// My Styles
import styles from './ProductsNearCss';

// My Customs
import Icon from '../../assets/images/Icon';
import ButtonCompare from './ButtonCompare';

// Walkbase Engage
import BleManager from 'react-native-ble-manager';
const BleManagerModule = NativeModules.BleManager;
const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);
const ws = new WebSocket('wss://wai.walkbase.com/api/v2/subscribe/device');
var wsUri = "wss://wai.walkbase.com/api/v2/subscribe/device";
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

class ProductsNear extends Component {
  constructor() {
    super();
    this.state = {
      walkbaseState: '',
      auth:"CHECKING...",
      latitude: 0,
      longitude: 0,
      sentData : '',
      receivedData : '',
      bleState: 0 // 0: off, 1: on
    };
    this.handleEventNotDetermined = this.handleEventNotDetermined.bind(this);
    this.handleEventInitializing = this.handleEventInitializing.bind(this);
    this.handleEventPause = this.handleEventPause.bind(this);
    this.handleEventScanning = this.handleEventScanning.bind(this);
    this.handleEventFailed = this.handleEventFailed.bind(this);
    this.handleEventReceivedAdvertisement = this.handleEventReceivedAdvertisement.bind(this);
    this.handleEventErrors = this.handleEventErrors.bind(this);
  };

  componentDidMount() {
    this.watchID = navigator.geolocation.watchPosition(
      (position) => {
        this.setState({
          latitude : position.coords.latitude,
          longitude: position.coords.longitude
        });
        this.getStreamingData();
       },
       (error) => this.setState({ error: error.message }),
       { enableHighAccuracy: true, timeout: 2000, maximumAge: 0, distanceFilter: 1},
    );
  }
  componentWillMount() {
    this.handlerDiscover1 = bleManagerEmitter.addListener('WBEngageManagerStateNotDetermined', this.handleEventNotDetermined );
    this.handlerDiscover2 = bleManagerEmitter.addListener('WBEngageManagerStateInitializing', this.handleEventInitializing );
    this.handlerDiscover3 = bleManagerEmitter.addListener('WBEngageManagerStatePaused', this.handleEventPause );
    this.handlerDiscover4 = bleManagerEmitter.addListener('WBEngageManagerStateScanning', this.handleEventScanning );
    this.handlerDiscover5 = bleManagerEmitter.addListener('WBEngageManagerStateFailed', this.handleEventFailed );
    this.handlerDiscover6 = bleManagerEmitter.addListener('WBEngageManagerReceivedAdvertisement', this.handleEventReceivedAdvertisement );
    this.handlerDiscover7 = bleManagerEmitter.addListener('WBEngageManagerOff', this.handleEventErrors );
    this.webAPI();
  };

  handleEventNotDetermined(data) { console.log("Not determined"); alert("a")};
  handleEventInitializing(data) { console.log("Initializing");  alert("b")};
  handleEventPause(data) { console.log("Pause");  alert("c")};
  handleEventScanning(data) { console.log("Scanning");  alert("d")};
  handleEventFailed(data) { console.log("Failed");};

  handleEventReceivedAdvertisement(data) {
    console.log(data);
    this.handleFetchData(data);
    alert("f")
  };

  handleEventErrors(data) {
    if(data.state === 'WBErrorUnknown') {
      console.log(data);
    } else if(data.state === 'WBErrorBluetoothOff') {
      alert("Bluetooth is OFF. Please ON the Bluetooth");
      this.setState({bleState:0})
    } else if(data.state === 'Not error code') {
      this.setState({bleState:1})
    }
  };

  handleFetchData(data) { /* Analyzing the data */ };
  
  componentWillUnmount() {
    this.websocketClose();
    this.handlerDiscover1.remove();
    this.handlerDiscover2.remove();
    this.handlerDiscover3.remove();
    this.handlerDiscover4.remove();
    this.handlerDiscover5.remove();
    this.handlerDiscover6.remove();
    this.handlerDiscover7.remove();
    navigator.geolocation.clearWatch(this.watchID);
  };

  webAPI() {
    
    ws.onopen = () => {
      // connection opened
      ws.send('{"user_id": "office_dev", "api_key": "VZHkscRFhAjkScc"}'); // send a message
    };
    
    ws.onmessage = (e) => {
      // a message was received
      if(e.data === "") { //Auth true
        this.setState({auth:"TRUE", receivedData: e});
        console.log("AUTH true", e);
      } else { //Auth false
        this.setState({auth:"FALSE"});
        console.log("AUTH false", e);
      }
    };
    
    ws.onerror = (e) => {
      // an error occurred
      alert("error");
      console.log(e.message);
    };
  }
  websocketClose() {    
    ws.onclose = (e) => {
      // connection closed
      alert("close");
      console.log(e.code, e.reason);
    };
  }

  getStreamingData() {
    let time = moment.utc().format();
    let send_data = {
      "lat" : this.state.latitude,
      "lng" : this.state.longitude,
      "height" : 1.0,
      "ts": time,
      "flood_id": 123,
      "zone_id": null
    }
    this.setState({sentData: JSON.stringify(send_data)});
    // ws.send(JSON.stringify(send_data));
    console.log("Sent data" + JSON.stringify(send_data));
  }
  render() {
    const {latitude, longitude, bleState, auth, sentData, receivedData} = this.state;
    return (
      <LinearGradient colors={['#2b3748', '#43597D']} height={166}>
        <Text style={styles.title}>PRODUCTS NEAR YOU</Text>
        <Text style={styles.testpart1}> Latitude : {latitude}    Longitude : {longitude} </Text>
        <Text style={styles.testpart1}> Auth : {auth} </Text>
        <Text style={styles.testpart1}> Sent Data : {sentData} </Text>
        <Text style={styles.testpart1}> Received Data : {receivedData.data} </Text>
        {/* <Carousel
          animate={false}
          height={136}
          indicatorOffset={4}
          indicatorColor={'#FFF'}
          indicatorSize={6}
          inactiveIndicatorColor={'rgba(255, 255, 255, 0.3)'}
          indicatorSpace={8}
          >
          <View style={styles.itemContainer}> */}
            {/* <View style={styles.itemBox}>
              <View style={styles.imageBox}>
                <Image style={{ width: 84 }} source={require('../../assets/images/files/S9-Dual.png')} />
              </View>

              <View style={styles.detailsBox}>
                <Text style={styles.titleItem}>Samsung Galaxy S9</Text>

                <View style={styles.hrDivider}></View>

                <View style={styles.deviceOptionsBox}>
                  <View style={styles.deviceOptionItem}>
                    <Icon height="14" width="14" name="Storage" viewBox="0 0 24 24" />
                    <Text style={styles.deviceOptionText}>64GB</Text>
                  </View>
                  <View style={styles.deviceOptionItem}>
                    <Icon height="14" width="14" name="BatteryInclined" viewBox="0 0 20 20" />
                    <Text style={styles.deviceOptionText}>16hrs</Text>
                  </View>
                  <View style={styles.deviceOptionItem}>
                    <Icon height="14" width="14" name="Camera" viewBox="0 0 24 24" />
                    <Text style={styles.deviceOptionText}>18MP + 8MP</Text>
                  </View>
                </View>

                <ButtonCompare />
              </View>
            </View>
          </View>

          <View style={styles.itemContainer}>
            <View style={styles.itemBox}>
              <View style={styles.imageBox}>
                <Image style={{ width: 84 }} source={require('../../assets/images/files/S9-Dual.png')} />
              </View>

              <View style={styles.detailsBox}>
                <Text style={styles.titleItem}>Samsung Galaxy S9</Text>

                <View style={styles.hrDivider}></View>

                <View style={styles.deviceOptionsBox}>
                  <View style={styles.deviceOptionItem}>
                    <Icon height="14" width="14" name="Storage" viewBox="0 0 24 24" />
                    <Text style={styles.deviceOptionText}>64GB</Text>
                  </View>
                  <View style={styles.deviceOptionItem}>
                    <Icon height="14" width="14" name="BatteryInclined" viewBox="0 0 20 20" />
                    <Text style={styles.deviceOptionText}>16hrs</Text>
                  </View>
                  <View style={styles.deviceOptionItem}>
                    <Icon height="14" width="14" name="Camera" viewBox="0 0 24 24" />
                    <Text style={styles.deviceOptionText}>18MP + 8MP</Text>
                  </View>
                </View>

                <ButtonCompare />
              </View>
            </View>
          </View>

          <View style={styles.itemContainer}>
            <View style={styles.itemBox}>
              <View style={styles.imageBox}>
                <Image style={{ width: 84 }} source={require('../../assets/images/files/S9-Dual.png')} />
              </View>

              <View style={styles.detailsBox}>
                <Text style={styles.titleItem}>Samsung Galaxy S9</Text>

                <View style={styles.hrDivider}></View>

                <View style={styles.deviceOptionsBox}>
                  <View style={styles.deviceOptionItem}>
                    <Icon height="14" width="14" name="Storage" viewBox="0 0 24 24" />
                    <Text style={styles.deviceOptionText}>64GB</Text>
                  </View>
                  <View style={styles.deviceOptionItem}>
                    <Icon height="14" width="14" name="BatteryInclined" viewBox="0 0 20 20" />
                    <Text style={styles.deviceOptionText}>16hrs</Text>
                  </View>
                  <View style={styles.deviceOptionItem}>
                    <Icon height="14" width="14" name="Camera" viewBox="0 0 24 24" />
                    <Text style={styles.deviceOptionText}>18MP + 8MP</Text>
                  </View>
                </View>

                <ButtonCompare />
              </View>
            </View> */}
          {/* </View>
        </Carousel> */}
      </LinearGradient>
    );
  }
}

export default ProductsNear;
