/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { connect } from 'react-redux';
var DeviceInfo = require('react-native-device-info');
const deviceId = DeviceInfo.getUniqueID();

class TestScreen extends Component {
  render() {
    const { bledata, network } = this.props;

    return (
        <View style={{ flex: 1, marginTop:30 }}>
          <ScrollView>
            <Text>PRODUCTS NEAR YOU</Text>
            <Text>Latitude  : {bledata.lat}</Text>
            <Text>Longitude : {bledata.lng}</Text>
            <Text>Height    : {bledata.height}</Text>
            <Text>Floor ID  : {bledata.floor_id}</Text>
            <Text>Zone ID   : {bledata.zone_id}</Text>
            <Text>Time      : {bledata.ts}</Text>
            <Text>Device ID : {deviceId}</Text>
            <Text>SSID      : {network.ssid}</Text>
          </ScrollView>
        </View>
    );
  }
}

const mapStateToProps = state => {
  const { current, common } = state;

  return { bledata: current.position, network: common.network };
}

export default connect(mapStateToProps)(TestScreen);
