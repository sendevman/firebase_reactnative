/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Image, ScrollView, Text, View, WebView } from 'react-native';
import { connect } from 'react-redux';

// My Styles
import styles from './css/AccesoriesBrowseScreenCss';

// My Customs
import Icon from '../assets/images/Icon';


class AccesoriesBrowseScreen extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
      
        <View style={styles.posChoose}>
          <Text style={styles.textCompatible}>Compatible accessories</Text>
          <Icon height="14" width="14" name="CloseX" viewBox="0 0 14 14" fill="#1181FF" />
        </View>

        <View style={[styles.separator, {marginHorizontal: 10}]}></View>
        
        <Text style={styles.textTitle}>Battery packs</Text>
          <ScrollView  horizontal={true} >
            <View style={styles.containerBox}>

          	<View style={styles.containerAccesories}>
              <View style={styles.Accesories}>
                <View style={styles.frameImage}>
                  <Image 
                    style={styles.resizeMode}
                    resizeMode={Image.resizeMode.contain}
                    source={require('../assets/images/files/S9-Compare1.png')} />
            		</View>
                <View style={styles.separator}></View>
                <View>
                  <Text style={styles.Text}>10000 mAh Battery Pack</Text>
                </View>
              </View>
            </View>

            <View style={styles.containerAccesories}>
              <View style={styles.Accesories}>
                <View style={styles.frameImage}>
                  <Image 
                    style={styles.resizeMode}
                    resizeMode={Image.resizeMode.contain}
                    source={require('../assets/images/files/S9-Compare.png')} />
                </View>
                <View style={styles.separator}></View>
                <View>
                  <Text style={styles.Text}>RAVPower Battery Pack</Text>
                </View>
              </View>
            </View>

            <View style={styles.containerAccesories}>
              <View style={styles.Accesories}>
                <View style={styles.frameImage}>
                  <Image 
                    style={styles.resizeMode}
                    resizeMode={Image.resizeMode.contain}
                    source={require('../assets/images/files/Bitmap.png')} />
                </View>
                <View style={styles.separator}></View>
                <View>
                  <Text style={styles.Text}>Battery Pack 5100mAh</Text>
                </View>
              </View>
            </View>
              
            <View style={styles.addAcc}>
              <View style={styles.moreAcc}>
                <Icon height="37" width="37" name="AddBtn" viewBox="0 0 37 37" fill="#1181FF" />
                <Text style={styles.textMore}>View more accesories</Text>
              </View>
            </View>
          </View>
          </ScrollView>

        <Text style={styles.textTitle}>Cases & Covers</Text>
          <ScrollView  horizontal={true} >
            <View style={styles.containerBox}>

            <View style={styles.containerAccesories}>
              <View style={styles.Accesories}>
                <View style={styles.frameImage}>
                  <Image 
                    style={styles.resizeMode}
                    resizeMode={Image.resizeMode.contain}
                    source={require('../assets/images/files/S9-Dual.png')} />
                </View>
                <View style={styles.separator}></View>
                <View>
                  <Text style={styles.Text}>Sillicon cover in Dark Grey</Text>
                </View>
              </View>
            </View>

            <View style={styles.containerAccesories}>
              <View style={styles.Accesories}>
                <View style={styles.frameImage}>
                  <Image 
                    style={styles.resizeMode}
                    resizeMode={Image.resizeMode.contain}
                    source={require('../assets/images/files/S9-Compare.png')} />
                </View>
                <View style={styles.separator}></View>
                <View>
                  <Text style={styles.Text}>RAVPower Battery Pack</Text>
                </View>
              </View>
            </View>

            <View style={styles.containerAccesories}>
              <View style={styles.Accesories}>
                <View style={styles.frameImage}>
                  <Image 
                    style={styles.resizeMode}
                    resizeMode={Image.resizeMode.contain}
                    source={require('../assets/images/files/Bitmap.png')} />
                </View>
                <View style={styles.separator}></View>
                <View>
                  <Text style={styles.Text}>Battery Pack 5100mAh</Text>
                </View>
              </View>
            </View>

            <View style={styles.addAcc}>
              <View style={styles.moreAcc}>
                <Icon height="37" width="37" name="AddBtn" viewBox="0 0 37 37" fill="#1181FF" />
                <Text style={styles.textMore}>View more accesories</Text>
              </View>
            </View>
          </View>
        </ScrollView>

        <Text style={styles.textTitle}>Audio</Text>
          <ScrollView  horizontal={true} >
            <View style={styles.containerBox}>

            <View style={styles.containerAccesories}>
              <View style={styles.Accesories}>
                <View style={styles.frameImage}>
                  <Image 
                    style={styles.resizeMode}
                    resizeMode={Image.resizeMode.contain}
                    source={require('../assets/images/files/S9-Dual.png')} />
                </View>
                <View style={styles.separator}></View>
                <View>
                  <Text style={styles.Text}>Samsung GearVR Headset</Text>
                </View>
              </View>
            </View>

            <View style={styles.containerAccesories}>
              <View style={styles.Accesories}>
                <View style={styles.frameImage}>
                  <Image
                    style={styles.resizeMode}
                    resizeMode={Image.resizeMode.contain}
                    source={require('../assets/images/files/S9-Compare.png')} />
                </View>
                <View style={styles.separator}></View>
                <View>
                  <Text style={styles.Text}>LED View Cover</Text>
                </View>
              </View>
            </View>

            <View style={styles.containerAccesories}>
              <View style={styles.Accesories}>
                <View style={styles.frameImage}>
                  <Image
                    style={styles.resizeMode}
                    resizeMode={Image.resizeMode.contain}
                    source={require('../assets/images/files/BitmapGris.png')}
                  />
                </View>
                <View style={styles.separator}></View>
                <View>
                  <Text style={styles.Text}>Battery Pack 5100mAh</Text>
                </View>
              </View>
            </View>

            <View style={styles.addAcc}>
              <View style={styles.moreAcc}>
                <Icon height="37" width="37" name="AddBtn" viewBox="0 0 37 37" fill="#1181FF" />
                <Text style={styles.textMore}>View more accesories</Text>
              </View>
            </View>
          </View>
        </ScrollView>

      </ScrollView>
    );
  }
}
function mapStateToProps(state) {
  return { compare: 0 };
}

export default connect(mapStateToProps)(AccesoriesBrowseScreen);