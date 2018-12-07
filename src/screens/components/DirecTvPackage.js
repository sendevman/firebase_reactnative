/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Image, Text, TextInput, View, ScrollView } from 'react-native';
import { Col, Grid, Row } from "react-native-easy-grid";
import { Icon } from 'react-native-elements'

// My FakeData
import { FakeDirecTvPackages } from '../../store/DirecTVPackageFakeData';
import { FakeDirecTvChannel } from '../../store/DirecTVChannelFakeData';

// My Styles
import styles, { width } from '../css/DirecTVScreenCss';

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
      <View style={{ width, flex: 1, backgroundColor: 'white' }}>
        <View style={{ width: '100%', height: 70, alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
          <Image source={require('../../assets/images/files/dtv.logo.png')}/>
          <Text>Shop Now</Text>
        </View>

        <View style={{width: '100%', height: 60, backgroundColor: 'white'}}>
          <View style={{width: '100%', flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', paddingTop: 10, backgroundColor: 'white'}}>
              <Icon name='search' color='#00aced' onPress={() => this.toggleSearch()} />
            </View>

            {
              this.state.packages.map((pkg, index) =>
                <View key={index} style={{ flex: 1, flexDirection: 'column', alignItems: 'center', paddingTop: 10, backgroundColor: pkg.color}}>
                  <Text style={{color: 'white', fontWeight: 'bold', fontSize: 11}}>{pkg.price}/mo</Text>
                  <Text style={{color: 'white', fontSize: 8}}>Additional info</Text>
                </View>
              )
            }
          </View>
        </View>

        {
          this.state.showSearch ?
          <TextInput
            style={{height: 40, backgroundColor: 'white', borderColor: 'gray', borderWidth: 1, paddingLeft: 3, paddingRight: 3}}
            value={this.state.text}
            onChangeText={searchText => this.search(searchText)}
          />
          :
          <View></View>
        }

        <View style={{flex: 1, flexDirection: 'column'}}>
          <View style={{width: '100%', height: 60, marginTop: 10}}>
            <View style={{width: '100%', height: 60, flex: 1, flexDirection: 'row'}}>
              <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', paddingTop: 10, borderLeftColor: '#fff', borderLeftWidth: 1, borderRightColor: '#d4d4d4', borderRightWidth: 1}}>
                <Text style={{color: '#666', fontSize: 8}}>99% Local channels in USA</Text>
              </View>

              <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', paddingTop: 10, borderLeftColor: '#fff', borderLeftWidth: 1, borderRightColor: '#d4d4d4', borderRightWidth: 1}}>
                <Text style={{color: '#00aced'}}>✔</Text>
              </View>

              <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', paddingTop: 10, borderLeftColor: '#fff', borderLeftWidth: 1, borderRightColor: '#d4d4d4', borderRightWidth: 1}}>
                <Text style={{color: '#00aced'}}>✔</Text>
              </View>

              <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', paddingTop: 10, borderLeftColor: '#fff', borderLeftWidth: 1, borderRightColor: '#d4d4d4', borderRightWidth: 1}}>
                <Text style={{color: '#00aced'}}>✔</Text>
              </View>

              <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', paddingTop: 10, borderLeftColor: '#fff', borderLeftWidth: 1, borderRightColor: '#d4d4d4', borderRightWidth: 1}}>
                <Text style={{color: '#00aced'}}>✔</Text>
              </View>

              <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', paddingTop: 10, borderLeftColor: '#fff', borderLeftWidth: 1, borderRightColor: '#d4d4d4', borderRightWidth: 1}}>
                <Text style={{color: '#00aced'}}>✔</Text>
              </View>

              <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', paddingTop: 10, borderLeftColor: '#fff', borderLeftWidth: 1, borderRightColor: '#d4d4d4', borderRightWidth: 1}}>
                <Text style={{color: '#00aced'}}>✔</Text>
              </View>
            </View> 
          </View>

          {
            this.state.groups.map((group, index) => {
              return <View key={index} style={{width: '100%', height: 60, marginTop: 10}}>
                <View style={{flex: 1}}>
                  <View style={{width: '100%', height: 60, flex: 1, flexDirection: 'row'}}>
                    
                    <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', paddingTop: 10, borderLeftColor: '#fff', borderLeftWidth: 1, borderRightColor: '#d4d4d4', borderRightWidth: 1}}>
                      <Image resizeMode="contain" style={{width: 30, height: 30}} source={{uri: group.logoUrl}}/>
                    </View>
                    {
                      this.state.packages.map((pkg,idx) => {
                        return <View key={idx} style={{ flex: 1, flexDirection: 'column', alignItems: 'center', paddingTop: 10, borderLeftColor: '#fff', borderLeftWidth: 1, borderRightColor: '#d4d4d4', borderRightWidth: 1}}>
                          {
                            (idx < (this.state.packages.length - 1)) ? <Image resizeMode="contain" style={{width: 30, height: 30}} source={{uri: group.promoUrl}}/>
                            : <Text style={{color: '#00aced'}}>✔</Text>
                          }
                        </View>
                      })
                    }
                  </View>
                </View>
              </View>
            })
          }

          {
            this.state.channels.filter(channel => channel.grpName == null).map((channel, index) => {
              return <View key={index} style={{width: '100%', height: 60, marginTop: 10}}>
              <View style={{width: '100%', height: 60, flex: 1, flexDirection: 'row'}}>
                
                <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', paddingTop: 10, borderLeftColor: '#fff', borderLeftWidth: 1, borderRightColor: '#d4d4d4', borderRightWidth: 1}}>
                  <Image resizeMode="contain" style={{width: 30, height: 30}} source={{uri: channel.logoUrl}}/>
                  <Text style={{fontSize: 7}}>{channel.name}</Text>
                </View>
                {
                  this.state.packages.map((pkg, idx) => {
                    return <View key={idx} style={{ flex: 1, flexDirection: 'column', alignItems: 'center', paddingTop: 10, borderLeftColor: '#fff', borderLeftWidth: 1, borderRightColor: '#d4d4d4', borderRightWidth: 1}}>
                      {
                        
                        this.getChannelPresence(channel.chLogoId, pkg.id) ?
                          <Text style={{color: '#00aced'}}>✔</Text>
                          :
                          <View>
                          </View>
                      }
                    </View>
                  })
                }
              </View> 
            </View>
            })
          }
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
