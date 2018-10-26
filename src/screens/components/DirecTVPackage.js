/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Image, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { FakeDirecTVPackages } from '../../store/DirecTVPackageFakeData';
import { FakeDirecTVChannel } from '../../store/DirecTVChannelFakeData';

// My Styles
import styles from '../css/DirecTVScreenCss';

class DirecTVPackage extends Component {
  constructor(props) {
    super(props);
  }

  _renderPackageHeaders() {
    return (
      <View style={styles.tableView}>
        {
          FakeDirecTVPackages.map((item, index) => {
            return (
              <View key={index} style={[styles.packageItemView, { borderColor: item.color }]}>
                <Text style={{ height: 30, color: '#070303', fontSize: 12, fontWeight: 'bold', textAlign: 'center', marginTop: 10 }}>{item.title}</Text>
                <Text style={{ color: '#070303', fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginTop: 10 }}>{item.channelCount}</Text>
                <Text style={{ color: '#070303', fontSize: 12, textAlign: 'center', marginTop: 2 }}>Channels</Text>
                <Text style={{ height: 15, color: '#333', fontSize: 14, fontWeight: 'bold', textAlign: 'center', marginTop: 10 }}>{item.tax}</Text>
                <Text style={{ height: 20, color: '#070303', fontSize: 8, textAlign: 'center', marginTop: 2 }}>{item.taxDescription}</Text>
                <Text style={{ color: '#666', fontSize: 8, textAlign: 'center', marginTop: 8 }}>{item.details}</Text>
              </View>
            )
          })
        }
      </View>
    )
  }

  _renderPackageLogo() {
    const tmp = "With CHOICE™ Package and above. Subscription renews automatically for 2019 season and each season thereafter at then prevailing rate (currently $293.94/season) unless you call to cancel within two weeks after the start of the season. Req's you to select offer. Out-of-market games only. Select int'l games excluded.";
    return (
      <View style={styles.logoPart}>
        <Image style={{ width: 46, height: 60, margin: 8 }} source={require('../../assets/images/files/logo_packages.png')} />
        <View style={{ margin: 4, marginRight: 24 }}>
          <Text style={[styles.logoDescription, { height: 15, color: '#333', fontSize: 14, fontWeight: 'bold', marginTop: 2 }]}>NFL SUNDAY TICKET INCLUDED</Text>
          <Text style={[styles.logoDescription, { color: '#333', fontSize: 8, marginTop: 2 }]} >{tmp}</Text>
        </View>
      </View>
    )
  }

  _renderPackageChannels() {
    return (
      <ScrollView style={styles.channeltableView} showsVerticalScrollIndicator={false}>
        {
          FakeDirecTVChannel.map((item, index) => {
            return (
              <View key={index} style={styles.channelRow}>
                <View style={[styles.channelItemView]}>
                  <Text style={{ color: '#070303', fontSize: 10, fontWeight: 'bold', textAlign: 'center' }}>{item.title}</Text>
                </View>
                {item.enable.map((item1, index) => {
                  return (
                    <View key={index} style={[styles.channelItemView]}>
                      {item1 && <Image style={{ width: 20, height: 15, margin: 8 }} source={require('../../assets/images/files/check.png')} />}
                    </View>
                  )
                })}
              </View>
            )
          })
        }
      </ScrollView>
    )
  }


  render() {
    return (
      <View style={[styles.directvPackageView]}>
        <Text style={[styles.txtSaveDetail, { padding: 10, fontSize: 11 }]}>DIRECTV gives you sports, news, shows, and movies for the whole family, with the powerful Genie® HD DVR to deliver it all.</Text>
        {this._renderPackageHeaders()}
        {this._renderPackageLogo()}
        {this._renderPackageChannels()}
      </View>
    );
  }
}

export default DirecTVPackage;
