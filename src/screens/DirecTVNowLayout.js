/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Animated, Dimensions, Image, ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';

import DirecTVNowGet from './components/DirectTVNowGet';
import DirecTVPackage from './components/DirecTVPackage';
var { width } = Dimensions.get('window');

// My Styles
import styles from './css/DirecTVNowScreenCss';
const baseImages = ['base1.png', 'base2.png', 'base3.png', 'base4.png', 'base5.png'];

class DirecTVNowLayout extends Component {
  constructor(props) {
    super(props);
    this.state = { selectBase: 0 };
  }

  _renderDirecTVNowCard() {
    return (
      <View>
        <DirecTVNowGet />
      </View>
    )
  }

  _renderBasePackage() {
    const { selectBase } = this.state;
    let selectedImage = require('../assets/images/files/base1.png');
    if(selectBase === 0) selectedImage = require('../assets/images/files/base1.png');
    else if (selectBase === 1) selectedImage = require('../assets/images/files/base2.png');
    else if (selectBase === 2) selectedImage = require('../assets/images/files/base3.png');
    else if (selectBase === 3) selectedImage = require('../assets/images/files/base4.png');
    else selectedImage = require('../assets/images/files/base5.png');
    return (
      <View style={[styles.directvCardView, { marginTop: 10, marginBottom: 40 }]}>
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          {selectBase === 0 ? 
            <View style={{ width: (width - 30) / 5, height: 50, backgroundColor: '#FFC126', alignItems: 'center' }}>
              <Text style={{ color: '#FFF', marginTop: 2, fontSize: 10, }}>LIVE A LITTLE</Text>
              <Text style={{ color: '#FFF', marginTop: 2, fontSize: 14, }}>$40/month</Text>
              <Text style={{ color: '#FFF', marginTop: 2, fontSize: 8, }}>Get 65+ Channels</Text>
            </View>
          : 
          <TouchableOpacity onPress={() => this.setState({ selectBase: 0 })}>
            <View style={{ width: (width - 30) / 5, height: 50, backgroundColor: '#333', alignItems: 'center' }}>
              <Text style={{ color: '#5c5c5c', marginTop: 2, fontSize: 10, }}>LIVE A LITTLE</Text>
              <Text style={{ color: '#5c5c5c', marginTop: 2, fontSize: 14, }}>$40/month</Text>
              <Text style={{ color: '#5c5c5c', marginTop: 2, fontSize: 8, }}>Get 65+ Channels</Text>
            </View>
          </TouchableOpacity>
          }
          {selectBase === 1 ? 
            <View style={{ width: (width - 30) / 5, height: 50, backgroundColor: '#7dd105', alignItems: 'center', marginLeft: 2 }}>
              <Text style={{ color: '#FFF', marginTop: 2, fontSize: 10, }}>JUST RIGHT</Text>
              <Text style={{ color: '#FFF', marginTop: 2, fontSize: 14, }}>$55/month</Text>
              <Text style={{ color: '#FFF', marginTop: 2, fontSize: 8, }}>Get 85+ Channels</Text>
            </View>
          : 
          <TouchableOpacity onPress={() => this.setState({ selectBase: 1 })}>
            <View style={{ width: (width - 30) / 5, height: 50, backgroundColor: '#333', alignItems: 'center', marginLeft: 2 }}>
              <Text style={{ color: '#5c5c5c', marginTop: 2, fontSize: 10, }}>JUST RIGHT</Text>
              <Text style={{ color: '#5c5c5c', marginTop: 2, fontSize: 14, }}>$55/month</Text>
              <Text style={{ color: '#5c5c5c', marginTop: 2, fontSize: 8, }}>Get 85+ Channels</Text>
            </View>
          </TouchableOpacity>
          }
          {selectBase === 2 ? 
            <View style={{ width: (width - 30) / 5, height: 50, backgroundColor: '#039fdb', alignItems: 'center', marginLeft: 2 }}>
              <Text style={{ color: '#FFF', marginTop: 2, fontSize: 10, }}>GO BIG</Text>
              <Text style={{ color: '#FFF', marginTop: 2, fontSize: 14, }}>$65/month</Text>
              <Text style={{ color: '#FFF', marginTop: 2, fontSize: 8, }}>Get 105+ Channels</Text>
            </View>
          : 
          <TouchableOpacity onPress={() => this.setState({ selectBase: 2 })}>
            <View style={{ width: (width - 30) / 5, height: 50, backgroundColor: '#333', alignItems: 'center', marginLeft: 2 }}>
              <Text style={{ color: '#5c5c5c', marginTop: 2, fontSize: 10, }}>GO BIG</Text>
              <Text style={{ color: '#5c5c5c', marginTop: 2, fontSize: 14, }}>$65/month</Text>
              <Text style={{ color: '#5c5c5c', marginTop: 2, fontSize: 8, }}>Get 105+ Channels</Text>
            </View>
          </TouchableOpacity>
          }
          {selectBase === 3 ? 
            <View style={{ width: (width - 30) / 5, height: 50, backgroundColor: '#c890f8', alignItems: 'center', marginLeft: 2 }}>
              <Text style={{ color: '#FFF', marginTop: 2, fontSize: 10, }}>GOTTA HAVE IT</Text>
              <Text style={{ color: '#FFF', marginTop: 2, fontSize: 14, }}>$75/month</Text>
              <Text style={{ color: '#FFF', marginTop: 2, fontSize: 8, }}>Get 125+ Channels</Text>
            </View>
          : 
          <TouchableOpacity onPress={() => this.setState({ selectBase: 3 })}>
            <View style={{ width: (width - 30) / 5, height: 50, backgroundColor: '#333', alignItems: 'center', marginLeft: 2 }}>
              <Text style={{ color: '#5c5c5c', marginTop: 2, fontSize: 10, }}>GOTTA HAVE IT</Text>
              <Text style={{ color: '#5c5c5c', marginTop: 2, fontSize: 14, }}>$75/month</Text>
              <Text style={{ color: '#5c5c5c', marginTop: 2, fontSize: 8, }}>Get 125+ Channels</Text>
            </View>
          </TouchableOpacity>
          }
          {selectBase === 4 ? 
            <View style={{ width: (width - 30) / 5, height: 50, backgroundColor: '#FFF', alignItems: 'center', marginLeft: 2 }}>
              <Text style={{ color: '#333', marginTop: 2, fontSize: 10, }}>TODO Y MAS</Text>
              <Text style={{ color: '#333', marginTop: 2, fontSize: 14, }}>$45/month</Text>
              <Text style={{ color: '#333', marginTop: 2, fontSize: 8, }}>Get 90+ Channels</Text>
            </View>
          : 
          <TouchableOpacity onPress={() => this.setState({ selectBase: 4 })}>
            <View style={{ width: (width - 30) / 5, height: 50, backgroundColor: '#333', alignItems: 'center', marginLeft: 2 }}>
              <Text style={{ color: '#5c5c5c', marginTop: 2, fontSize: 10, }}>TODO Y MAS</Text>
              <Text style={{ color: '#5c5c5c', marginTop: 2, fontSize: 14, }}>$45/month</Text>
              <Text style={{ color: '#5c5c5c', marginTop: 2, fontSize: 8, }}>Get 90+ Channels</Text>
            </View>
          </TouchableOpacity>
          }
        </View>
        <Image style={{ width: width-30, height:(width-30)*262/929, resizeMode:'contain', marginBottom: 20, marginTop: 10 }} source={selectedImage} />
      </View>
    );
  }
  renderContents() {
    return (
      <View style={{ width: '100%', alignItems: 'center' }}>
        <Image
          style={{
            backgroundColor: '#ccc',
            flex: 1,
            position: 'absolute',
            width: '100%',
            height: '100%',
            justifyContent: 'center',
          }}
          source={require('../assets/images/files/backgroundHD.png')}
        />
        <Text style={styles.txtTitle}>DIRECTV NOW</Text>
        {this._renderDirecTVNowCard()}
        {this._renderBasePackage()}
      </View>
    )
  }

  render() {
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {this.renderContents()}
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  const { current, common } = state;

  return { compareLayout: 0 };
}

export default connect(mapStateToProps)(DirecTVNowLayout);
