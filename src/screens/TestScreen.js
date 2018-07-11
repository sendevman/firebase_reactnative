/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';

class TestScreen extends Component {
  render() {
    const bledata = this.props.positionData ? (this.props.positionData.postition || {}) : {}
    console.log("======", this.props.positionData);

    return (
      <SafeAreaView forceInset={{ top: 'always' }}>
        <View style={{ flex: 1 }}>
          <ScrollView>
            <Text>PRODUCTS NEAR YOU</Text>
            <Text>Latitude  : {bledata.lat}</Text>
            <Text>Longitude : {bledata.lng}</Text>
            <Text>Height    : {bledata.height}</Text>
            <Text>Floor ID  : {bledata.floor_id}</Text>
            <Text>Zone ID   : {bledata.zone_id}</Text>
            <Text>Time      : {bledata.ts}</Text>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return { positionData: state.current };
}

export default connect(mapStateToProps)(TestScreen);
