/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Image, Text, TouchableOpacity, View, Dimensions } from 'react-native';
var { width } = Dimensions.get('window');

// My Styles
import styles from '../css/DirecTVNowScreenCss';
const bulletList = ['No annual contracts', 'No satellite needed', 'True Cloud DVR BETA* included', 'No installation guy', 'Cancel anytime'];
class DirecTVNowGet extends Component {
  constructor(props) {
    super(props);

    this.state = { readMore: false };
  }

  toggleReadMore = () => {
    this.setState({ readMore: !this.state.readMore });
  }

  _renderMoreViews() {
    return (
      <View style={{ width: width - 60, }}>
        <View style={{ flexDirection: 'row', }}>
          <Text style={styles.txtSaveTitle}> THIS IS LIVE TV, </Text>
          <Text style={[styles.txtSaveTitle, { color: '#039fdb' }]}> REIMAGINED.</Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <View style={{ width: width / 2 - 40, borderWidth: 0, borderColor: '#FFF', margin: 4 }}>
            <Image style={styles.imgReimagned} source={require('../../assets/images/files/reimagned1.png')} />
            <Text style={{ color: '#FFF', marginTop: 20, fontSize: 18, }}>PREMIUM CHANNELS</Text>
            <Text style={{ color: '#FFF', marginTop: 20, fontSize: 13, }}>Load up on premium networks at an unbelievable price. Add HBO® or Cinemax® for $5/mo and SHOWTIME® or STARZ® for $8/mo!</Text>
          </View>
          <View style={{ width: width / 2 - 40, borderWidth: 0, borderColor: '#FFF', margin: 4 }}>
            <Image style={[styles.imgReimagned, { width: 64, height: 48 }]} source={require('../../assets/images/files/reimagned2.png')} />
            <Text style={{ color: '#FFF', marginTop: 10, fontSize: 18, }}>SPANISH ADD-ONS</Text>
            <Text style={{ color: '#FFF', marginTop: 20, fontSize: 13, }}>Add the sports networks you crave to an English package for $5/mo. Or go all-in with news, hit shows and sports for $10/mo.</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 10 }}>
          <View style={{ width: width / 2 - 40, borderWidth: 0, borderColor: '#FFF', margin: 4 }}>
            <Image style={[styles.imgReimagned, { width: 66, height: 47 }]} source={require('../../assets/images/files/reimagned3.png')} />
            <Text style={{ color: '#FFF', marginTop: 20, fontSize: 18, }}>TRUE CLOUD DVR </Text>
            <Text style={{ color: '#FFF', marginTop: 20, fontSize: 13, }}>BETA{"\n\n"}Get the true DVR experience! Record up to 20 hours and watch, fast forward, or rewind from anywhere.</Text>
          </View>
          <View style={{ width: width / 2 - 40, borderWidth: 0, borderColor: '#FFF', margin: 4 }}>
            <Image style={[styles.imgReimagned, { width: 64, height: 38 }]} source={require('../../assets/images/files/reimagned4.png')} />
            <Text style={{ color: '#FFF', marginTop: 8, fontSize: 18, }}>MULTI-STREAMING</Text>
            <Text style={{ color: '#FFF', marginTop: 20, fontSize: 13, }}>Watch 2 different shows on 2 devices at the same time so no one misses out. Or add a third stream for just $5/mo.</Text>
          </View>
        </View>

        <View style={{ alignSelf: 'center' }}>
          <Text style={[styles.txtSaveTitle, { color: '#039fdb', width: width - 60, textAlign: 'center' }]}> INTERNATIONAL TV</Text>
          <Text style={{ color: '#FFF', marginTop: 10, fontSize: 13, width: width - 60, textAlign: 'center' }}>Watch live sports, news, and hit shows from around the globe! Get any package on its own, pair the two together, or add them to a base for the best of both worlds.</Text>

        </View>
        <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 10 }}>
          <View style={{ width: width / 2 - 40, borderWidth: 1, borderColor: '#FFF', margin: 4, alignItems: 'center' }}>
            <Text style={{ color: '#FFF', fontWeight: 'bold', marginTop: 20, fontSize: 18, }}>VIETNAMESE</Text>
            <Text style={{ color: '#FFF', marginTop: 20, fontSize: 13, }}>9 channels</Text>
            <View style={{ flexDirection: 'row', }}>
              <Text style={{ color: '#FFF', fontWeight: 'bold', marginTop: 20, fontSize: 10, }}>$</Text>
              <Text style={{ color: '#FFF', fontWeight: 'bold', marginTop: 20, fontSize: 16, }}>20</Text>
              <Text style={{ color: '#FFF', fontWeight: 'bold', marginTop: 20, fontSize: 10, }}>/mo</Text>
            </View>
            <Text style={{ color: '#FFF', marginTop: 20, fontSize: 11, textAlign: 'center', }}>Includes these live and on-demand channels:</Text>
            <Image style={[styles.imgReimagned, { width: 140, height: 56, marginBottom: 10 }]} source={require('../../assets/images/files/international1.png')} />
          </View>
          <View style={{ width: width / 2 - 40, borderWidth: 1, borderColor: '#FFF', margin: 4, alignItems: 'center' }}>
            <Text style={{ color: '#FFF', fontWeight: 'bold', marginTop: 20, fontSize: 18, }}>BRAZILIAN</Text>
            <Text style={{ color: '#FFF', marginTop: 20, fontSize: 13, }}>2 channels</Text>
            <View style={{ flexDirection: 'row', }}>
              <Text style={{ color: '#FFF', fontWeight: 'bold', marginTop: 20, fontSize: 10, }}>$</Text>
              <Text style={{ color: '#FFF', fontWeight: 'bold', marginTop: 20, fontSize: 16, }}>25</Text>
              <Text style={{ color: '#FFF', fontWeight: 'bold', marginTop: 20, fontSize: 10, }}>/mo</Text>
            </View>
            <Text style={{ color: '#FFF', marginTop: 20, fontSize: 11, textAlign: 'center', }}>Includes these live and on-demand channels:</Text>
            <Image style={[styles.imgReimagned, { width: 85, height: 33, marginBottom: 10 }]} source={require('../../assets/images/files/international2.png')} />
          </View>
        </View>
      </View>
    )
  }

  render() {
    const { item } = this.props;
    const { readMore } = this.state;

    let readMoreText = readMore ? "- Collapse" : "+ Read more";
    let showProsCons = readMore;

    return (
      <View style={[styles.directvCardView]}>

        <Image style={styles.imgSave} source={require('../../assets/images/files/directvnow1.png')} />
        <View style={{ flexDirection: 'row' }}>
          <Text style={[styles.txtSaveTitle, { color: '#039fdb' }]}>LET'S GET</Text>
          <Text style={styles.txtSaveTitle}> STREAMING!</Text>
        </View>
        <View style={{ marginTop: 10, marginBottom: 10 }}>
          {bulletList.map((item, index) => {
            return (
              <View key={index} style={{ flexDirection: 'row', width: width - 80, margin: 5 }}>
                <Image style={{ width: 18, height: 18 }} source={require('../../assets/images/files/checkMark.png')} />
                <Text style={{ color: '#FFF', marginLeft: 20, fontSize: 18, }}>{item}</Text>
              </View>
            )
          })}
        </View>
        {showProsCons && this._renderMoreViews()}

        <TouchableOpacity style={styles.contentReadMore} onPress={this.toggleReadMore}>
          <Text style={styles.textReadMore}>{readMoreText}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default DirecTVNowGet;
