/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Image, Text, TextInput, View, ScrollView, TouchableOpacity } from 'react-native';
import { Col, Grid, Row } from "react-native-easy-grid";
import { Icon, Button } from 'react-native-elements'

// My FakeData
import { FakeDirecTvPackages } from '../../store/DirecTVPackageFakeData';
import { FakeDirecTvChannel } from '../../store/DirecTVChannelFakeData';

// My Styles
import styles, { width } from '../css/DirecTVScreenCss';
import AutoHeightImage from 'react-native-auto-height-image';

const package_channels = require('../../assets/channels/package_channels.json');
const packages = require('../../assets/channels/packages.json');
const allChannels = require('../../assets/channels/channels.json');
const groups = require('../../assets/channels/groups.json');

class DirecTvPackage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      packages: [],
      channels: [],
      groups: [],
      showSearch: false
    }
  }

  _renderPackageHeaders() {
    return (
      <View style={styles.tableView}>
        {
          FakeDirecTvPackages.map((item, index) => {
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

  getInitialChannels = () => allChannels.filter(channel => channel.initial == true)

  componentDidMount() {
    // groups.map(group => {
    //   group.channels = channels.find(channel => channel.grpName == group.groupName);
    //   group.showChannels = false;
    // });

    const channels = this.getInitialChannels()

    this.setState({
      packages,
      channels,
      groups
    });
  
  }

  getChannelPresence(chLogoId, pkgId) {
    const channels = package_channels[pkgId];
    if (channels) {
      const channelPresence = channels.find(pr => pr.chLogoId == chLogoId);
      return channelPresence && channelPresence.chPresence == "true";
    }
    return false;
  }

  search(phrase) {
    const channels = phrase ? allChannels.filter(channel => 
      channel.name.toLowerCase().indexOf(phrase.toLowerCase()) != -1
    ) : this.getInitialChannels();

    this.setState({
      channels,
      groups: phrase ? [] : groups
    });
  }

  toggleSearch = () => {
    this.setState({
      showSearch: !this.state.showSearch
    });

    if (this.state.showSearch) {
      this.setState({
        channels: this.getInitialChannels(),
        groups
      })
    }
  }

  render() {
    return (
      <View style={{flex: 1, width}}>
        <View style={{width, alignItems: 'center', marginTop: 10}}>
          <AutoHeightImage width={width} source={require('../../assets/images/directv/img_pkg_pricing.jpg')}/>
        </View>
      </View>
    );
  }
}

const tvChannelStyles = {
  container: {
    backgroundColor: '#EEEEEE',
    height: 500,
    flexDirection: 'column',
    width
  }
}

export default DirecTvPackage;
