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
      <View style={{flex: 1, width, backgroundColor: '#F0F0F0'}}>
        <View style={{width, height: 80, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity style={{width: '55%'}}>
            <Image resizeMode="contain" style={{width: '100%', height: 60}} source={require('../../assets/images/directv/sm_btn_vap.jpg')}/>
          </TouchableOpacity>
          <TouchableOpacity style={{width: '40%'}}>
            <Image resizeMode="contain" style={{width: '100%', height: 60}} source={require('../../assets/images/directv/sm_btn_call_to_order.jpg')}/>
          </TouchableOpacity>
        </View>
        <AutoHeightImage width={width} source={require('../../assets/images/directv/hdr_Packages.jpg')}/>
        <View style={{width, backgroundColor: '#fff', alignItems: 'center', paddingTop: 20, paddingBottom: 20}}>
          <Text style={{fontSize: 15}}>Build your perfect entertainment package.</Text>
          <AutoHeightImage style={{marginTop: 20}} width={width} source={require('../../assets/images/directv/img_pkg_pricing.jpg')}/>
          <Text style={{color: '#5f5f5f', fontWeight: 'bold', fontSize: 10, width, textAlign: 'center', paddingTop: 10}}>
            All DIRECTV offers require 24-mo. TV agreement. $19.95 ACTIVATION, EARLY TERMINATION FEE OF $20/MO. FOR EACH MONTH REMAINING ON AGMT., EQUIPMENT NON-RETURN & ADD’L FEES APPLY.
          </Text>
          <Text style={{color: '#9c9c9c', fontSize: 8, width, textAlign: 'center', paddingTop: 10}}>
            Price incl. TV Pkg., monthly service and equip. fees for 1 HD DVR & is after $5/mo. AutoPay & Paperless bill discount for 12 mo. New approved residential customers only (equipment lease req’d). Credit card req’d (except MA & PA). Restr’s apply.
          </Text>
          <Text style={{fontSize: 14, textAlign: 'center', paddingTop: 10}}>
            Get an HD DVR at no extra cost
          </Text>
          <Text style={{fontSize: 10, textAlign: 'center', paddingTop: 5}}>Our all-included DIRECTV package prices include an HD DVR at no extra cost. It's a simpler way to enjoy DIRECTV and all your favorite movies and shows.</Text>
        </View>
        
        <View style={{width, backgroundColor: '#fff', alignItems: 'center', paddingTop: 20, paddingBottom: 20, borderBottomColor: '#e4e7ed', borderBottomWidth: 1}}>
          <AutoHeightImage style={{marginTop: 20}} width={width} source={require('../../assets/images/directv/img_pkg_premiums.jpg')}/>
          
          <Text style={{fontSize: 14, textAlign: 'center', paddingTop: 15}}>
            Get first 3 months of premium networks at no extra cost!
          </Text>

          <Text style={{color: '#5f5f5f', textAlign: 'center', paddingTop: 15, fontSize: 12}}>
            Get the shows everyone's buzzing about on your TV and streaming on all your favorite devices—live and On Demand^.            
          </Text>

          <Text style={{color: '#9c9c9c', textAlign: 'center', paddingTop: 15, fontSize: 8, paddingLeft: 10, paddingRight: 10}}>
            WITH SELECT through ULTIMATE Pkgs. After 3 mos. services automatically continue each month at then prevailing rate (currently $53.99/mo) unless you call to change or cancel. Req's you to select offer.
          </Text>
        </View>

        <View style={{width, backgroundColor: '#fff', alignItems: 'center', paddingBottom: 20, borderBottomColor: '#e4e7ed', borderBottomWidth: 1}}>
          <AutoHeightImage width={width} source={require('../../assets/images/directv/img_pkg_NFLST.jpg')}/>
          
          <Text style={{fontSize: 14, textAlign: 'center', paddingTop: 15}}>
            2018 & 2019 seasons at no extra cost.
          </Text>

          <Text style={{color: '#5f5f5f', textAlign: 'center', paddingTop: 15, fontSize: 12}}>
            Get every NFL game, every Sunday with NFL SUNDAY TICKET. Only on DIRECTV.
          </Text>

          <Text style={{color: '#9c9c9c', textAlign: 'center', paddingTop: 15, fontSize: 8, paddingLeft: 10, paddingRight: 10}}>
            With CHOICE™ Package or above. Subscription renews automatically for 2020 season and each season thereafter at then prevailing rate (currently $293.94/season) unless you call to cancel prior to the start of the season. Req's you to select offer.
          </Text>
        </View>

        <View style={{width, backgroundColor: '#fff', alignItems: 'center', paddingBottom: 20, borderBottomColor: '#e4e7ed', borderBottomWidth: 1}}>
          <Text style={{fontSize: 16, textAlign: 'center', paddingTop: 15}}>
            Get special exclusive offers sent to your inbox.
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 100, width}}>
            <TextInput
              style={{height: 40, width: '65%', borderColor: '#9c9c9c', borderWidth: 1}}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
            />
            <Button
              title="Submit"
              color="#fff"
              style={{backgroundColor: '#2E81C3',  width: 80}}
            />
          </View>
        </View>

        <View style={{width, alignItems: 'center', paddingBottom: 20, borderBottomColor: '#e4e7ed', borderBottomWidth: 1}}>
          <Text style={{color: '#5f5f5f', fontSize: 8, fontWeight: '800', paddingTop: 15}}>
            All DIRECTV offers require 24-mo. TV agreement. $19.95 ACTIVATION, EARLY TERMINATION FEE OF $20/MO. FOR EACH MONTH REMAINING ON AGMT., EQUIPMENT NON-RETURN & ADD’L FEES APPLY
          </Text>
          <Text style={{color: '#5f5f5f', fontSize: 8, paddingLeft: 5, paddingRight: 5}}>
            Price incl. TV Pkg., monthly service and equip. fees for 1 HD DVR & is after $5/mo. AutoPay & Paperless bill discount for 12 mo. New approved residential customers only (equipment lease req’d). Credit card req’d (except MA & PA). Restr’s apply. 
          </Text>
          <Text style={{color: '#5f5f5f', fontSize: 8, paddingLeft: 5, paddingRight: 5}}>
            1-YR ALL INCLUDED PACKAGE: Ends 1/19/19. Available only in the U.S. (excludes Puerto Rico and U.S.V.I.). 1st & 2nd year Pricing: $35/mo for SELECT All Included; $40/mo for ENTERTAINMENT All Included; $45/mo for CHOICE All Included; $55/mo for XTRA All Included; $60/mo for ULTIMATE All Included; $110/mo for PREMIER All Included for first 12 mos. only. After 12 mos. or loss of eligibility, then prevailing rate applies (currently $78/mo for SELECT All Included; $90/mo for ENTERTAINMENT All Included; $105/mo for CHOICE All Included; $117/mo for XTRA All Included; $128/mo for ULTIMATE All Included; $181/mo for PREMIER All Included), unless cancelled or changed prior to end of the promo period. Pricing subject to change. $5/mo. discount: Must enroll inAutoPay & Paperless bill within 30 days of TV activation to receive bill credit starting in 1-3 bill cycles. First time credit will include all credits earned since meeting offer requirements. Must maintain AutoPay/Paperless bill and valid email address to continue credits. No credits in 2nd year for AutoPay/Paperless bill. Includes: All Included TV Pkg., monthly service & equipment fees for one Genie HD DVR, and standard pro installation. Exclusions: Price excludes Regional Sports Fee of up to $7.49/mo. (which is extra & applies to CHOICE and/or MÁS ULTRA and higher Pkgs.), applicable use tax expense surcharge on retail value of installation, custom installation, equipment upgrades/add-ons (min. $99 one-time & $7/mo. monthly fees for each extra receiver/DIRECTV Ready TV/Device), and certain other add’l fees & charges. Different offers may apply for eligible multi-dwelling unit and telco customers. 
          </Text>
          <Text style={{color: '#5f5f5f', fontSize: 8, paddingLeft: 5, paddingRight: 5}}>
            DIRECTV SVC TERMS: Subject to Equipment Lease & Customer Agreements. Must maintain a min. base TV pkg of $29.99/mo. Programming, pricing, terms and conditions subject to change at any time. Some offers may not be available through all channels and in select areas. Visit directv.com/legal or call for details. 
          </Text>
          <Text style={{color: '#5f5f5f', fontSize: 8, paddingLeft: 5, marginTop: 5, paddingRight: 5}}>
            ©2018 Home Box Office, Inc. All rights reserved. HBO® and related channels and service marks are the property of Home Box Office, Inc. SHOWTIME, THE MOVIE CHANNEL, FLIX and related marks are trademarks of Showtime Networks Inc., a CBS Company. STARZ® and related channels and service marks are the property of STARZ Entertainment, LLC.
          </Text>
          <Text style={{color: '#5f5f5f', fontSize: 8, paddingLeft: 5, marginTop: 5, paddingRight: 5}}>          
            ©2018 Home Box Office, Inc. All rights reserved. HBO® and related channels and service marks are the property of Home Box Office, Inc. SHOWTIME, THE MOVIE CHANNEL, FLIX and related marks are trademarks of Showtime Networks Inc., a CBS Company. STARZ® and related channels and service marks are the property of STARZ Entertainment, LLC.
          </Text>


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
