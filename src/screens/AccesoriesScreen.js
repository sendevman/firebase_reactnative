/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Image, ScrollView, Text, View, WebView } from 'react-native';
import { connect } from 'react-redux';

// My Styles
import styles from './css/AccesoriesScreenCss';

// My Customs
import Icon from '../assets/images/Icon';

class AccesoriesScreen extends Component {
  render() {
    return (
      <View contentContainerStyle={styles.container}>
        <Text style={styles.textTitle}>Compatible accesories</Text>
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
      </View>
    );
  }
}
function mapStateToProps(state) {
  return { compare: 0 };
}

export default connect(mapStateToProps)(AccesoriesScreen);