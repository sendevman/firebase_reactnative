/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import AutoHeightImage from 'react-native-auto-height-image';
import { connect } from 'react-redux';

// My Customs
import DirecTvNowGet from './components/DirecTvNowGet';
import DirecTvNowCarousel from '../components/ServicesCarousel/DirecTvNow';

// My Styles
import styles, { width } from './css/DirecTVNowScreenCss';

const channelImgs = [
  [
    require('../assets/images/now/tab1.png')
    // require('../assets/images/now/1/1.png'),
    // require('../assets/images/now/1/2.png'),
    // require('../assets/images/now/1/3.png'),
    // require('../assets/images/now/1/4.png')
  ],
  [
    require('../assets/images/now/tab2.png')
    // require('../assets/images/now/2/1.png'),
    // require('../assets/images/now/2/2.png'),
    // require('../assets/images/now/2/3.png'),
    // require('../assets/images/now/2/4.png'),
    // require('../assets/images/now/2/5.png')
  ],
  [
    require('../assets/images/now/tab3.png')
    // require('../assets/images/now/3/1.png'),
    // require('../assets/images/now/3/2.png'),
    // require('../assets/images/now/3/3.png'),
    // require('../assets/images/now/3/4.png')
  ],
  [
    require('../assets/images/now/tab4.png')
    // require('../assets/images/now/4/1.png'),
    // require('../assets/images/now/4/2.png'),
    // require('../assets/images/now/4/3.png'),
    // require('../assets/images/now/4/4.png')
  ],
  [
    require('../assets/images/now/tab5.png')
    // require('../assets/images/now/5/1.png'),
    // require('../assets/images/now/5/2.png'),
    // require('../assets/images/now/5/3.png'),
    // require('../assets/images/now/5/4.png'),
    // require('../assets/images/now/5/6.png'),
    // require('../assets/images/now/5/7.png'),
    // require('../assets/images/now/5/8.png'),
    // require('../assets/images/now/5/9.png'),
    // require('../assets/images/now/5/10.png'),
    // require('../assets/images/now/5/11.png'),
    // require('../assets/images/now/5/12.png'),
    // require('../assets/images/now/5/13.png'),
    // require('../assets/images/now/5/14.png'),
    // require('../assets/images/now/5/15.png'),
    // require('../assets/images/now/5/16.png'),
    // require('../assets/images/now/5/17.png'),
    // require('../assets/images/now/5/18.png'),
    // require('../assets/images/now/5/19.png'),
    // require('../assets/images/now/5/20.png'),
    // require('../assets/images/now/5/21.png'),
    // require('../assets/images/now/5/22.png')
  ]
];

class DirecTvNowLayout extends Component {
  constructor(props) {
    super(props);

    this.state = { selectBase: 0 };
  }

  _renderDirecTvNowCard() {
    return (
      <View>
        <DirecTvNowGet />
      </View>
    );
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
      <View style={[styles.directvCardView, { width: '100%', marginTop: 30, marginBottom: 40 }]}>
        <ScrollView horizontal>
          {selectBase === 0 ? 
            <View style={{ width: 150, height: 65, backgroundColor: '#FFC126', alignItems: 'center' }}>
              <Text style={{ color: '#FFF', marginTop: 7, fontSize: 12, }}>LIVE A LITTLE</Text>
              <Text style={{ color: '#FFF', marginTop: 2, fontSize: 14, }}>$40/mo</Text>
              <Text style={{ color: '#FFF', marginTop: 2, fontSize: 14, }}>65+ channels</Text>
            </View>
          : 
          <TouchableOpacity onPress={() => this.setState({ selectBase: 0 })}>
            <View style={{ width: 150, height: 65, backgroundColor: '#333', alignItems: 'center' }}>
              <Text style={{ color: '#5c5c5c', marginTop: 7, fontSize: 12, }}>LIVE A LITTLE</Text>
              <Text style={{ color: '#5c5c5c', marginTop: 2, fontSize: 14, }}>$40/mo</Text>
              <Text style={{ color: '#5c5c5c', marginTop: 2, fontSize: 14, }}>65+ channels</Text>
            </View>
          </TouchableOpacity>
          }
          {selectBase === 1 ? 
            <View style={{ width: 150, height: 65, backgroundColor: '#7dd105', alignItems: 'center', marginLeft: 2 }}>
              <Text style={{ color: '#FFF', marginTop: 7, fontSize: 12, }}>JUST RIGHT</Text>
              <Text style={{ color: '#FFF', marginTop: 2, fontSize: 14, }}>$55/mo</Text>
              <Text style={{ color: '#FFF', marginTop: 2, fontSize: 14, }}>85+ channels</Text>
            </View>
          :
          <TouchableOpacity onPress={() => this.setState({ selectBase: 1 })}>
            <View style={{ width: 150, height: 65, backgroundColor: '#333', alignItems: 'center', marginLeft: 2 }}>
              <Text style={{ color: '#5c5c5c', marginTop: 7, fontSize: 12, }}>JUST RIGHT</Text>
              <Text style={{ color: '#5c5c5c', marginTop: 2, fontSize: 14, }}>$55/mo</Text>
              <Text style={{ color: '#5c5c5c', marginTop: 2, fontSize: 14, }}>85+ channels</Text>
            </View>
          </TouchableOpacity>
          }
          {selectBase === 2 ? 
            <View style={{ width: 150, height: 65, backgroundColor: '#039fdb', alignItems: 'center', marginLeft: 2 }}>
              <Text style={{ color: '#FFF', marginTop: 7, fontSize: 12, }}>GO BIG</Text>
              <Text style={{ color: '#FFF', marginTop: 2, fontSize: 14, }}>$65/mo</Text>
              <Text style={{ color: '#FFF', marginTop: 2, fontSize: 14, }}>105+ channels</Text>
            </View>
          : 
          <TouchableOpacity onPress={() => this.setState({ selectBase: 2 })}>
            <View style={{ width: 150, height: 65, backgroundColor: '#333', alignItems: 'center', marginLeft: 2 }}>
              <Text style={{ color: '#5c5c5c', marginTop: 7, fontSize: 12, }}>GO BIG</Text>
              <Text style={{ color: '#5c5c5c', marginTop: 2, fontSize: 14, }}>$65/mo</Text>
              <Text style={{ color: '#5c5c5c', marginTop: 2, fontSize: 14, }}>105+ channels</Text>
            </View>
          </TouchableOpacity>
          }
          {selectBase === 3 ? 
            <View style={{ width: 150, height: 65, backgroundColor: '#c890f8', alignItems: 'center', marginLeft: 2 }}>
              <Text style={{ color: '#FFF', marginTop: 7, fontSize: 12, }}>GOTTA HAVE IT</Text>
              <Text style={{ color: '#FFF', marginTop: 2, fontSize: 14, }}>$75/mo</Text>
              <Text style={{ color: '#FFF', marginTop: 2, fontSize: 14, }}>125+ channels</Text>
            </View>
          : 
          <TouchableOpacity onPress={() => this.setState({ selectBase: 3 })}>
            <View style={{ width: 150, height: 65, backgroundColor: '#333', alignItems: 'center', marginLeft: 2 }}>
              <Text style={{ color: '#5c5c5c', marginTop: 7, fontSize: 12, }}>GOTTA HAVE IT</Text>
              <Text style={{ color: '#5c5c5c', marginTop: 2, fontSize: 14, }}>$75/mo</Text>
              <Text style={{ color: '#5c5c5c', marginTop: 2, fontSize: 14, }}>125+ channels</Text>
            </View>
          </TouchableOpacity>
          }
          {selectBase === 4 ? 
            <View style={{ width: 150, height: 65, backgroundColor: '#FFF', alignItems: 'center', marginLeft: 2 }}>
              <Text style={{ color: '#333', marginTop: 7, fontSize: 12, }}>TODO Y MAS</Text>
              <Text style={{ color: '#333', marginTop: 2, fontSize: 14, }}>$45/mo</Text>
              <Text style={{ color: '#333', marginTop: 2, fontSize: 14, }}>90+ channels</Text>
            </View>
          : 
          <TouchableOpacity onPress={() => this.setState({ selectBase: 4 })}>
            <View style={{ width: 150, height: 65, backgroundColor: '#333', alignItems: 'center', marginLeft: 2 }}>
              <Text style={{ color: '#5c5c5c', marginTop: 7, fontSize: 12, }}>TODO Y MAS</Text>
              <Text style={{ color: '#5c5c5c', marginTop: 2, fontSize: 14, }}>$45/mo</Text>
              <Text style={{ color: '#5c5c5c', marginTop: 2, fontSize: 14, }}>90+ channels</Text>
            </View>
          </TouchableOpacity>
          }
        </ScrollView>

        <View style={styles.container}>
          <View style={{flex: 1, width}} contentContainerStyle={{alignItems: 'center'}}>
            {
              channelImgs[selectBase].map((img, idx) => 
                <AutoHeightImage key={idx} width={width} source={img} />
              )
            }
          </View>
        </View>
      </View>
    );
  }

  renderContents() {
    return (
      <View style={{ width: '100%', alignItems: 'center' }}>
        <Text style={styles.txtTitle}>DIRECTV NOW</Text>
        
        <DirecTvNowCarousel />
        
        {/* this._renderDirecTvNowCard() */}
        
        {this._renderBasePackage()}
      </View>
    );
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
  return {};
}

export default connect(mapStateToProps)(DirecTvNowLayout);
