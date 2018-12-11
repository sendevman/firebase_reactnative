/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { AsyncStorage, Image, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { IndicatorViewPager, PagerDotIndicator } from 'rn-viewpager';
import { connect } from 'react-redux';

// My Styles
import styles from './css/OnBoardingScreenCss';

// My Customs
import Icon from '../assets/images/Icon';

class OnBoardingScreen extends Component {
  getStart = async () => {
    try {
      await AsyncStorage.setItem('passOnboarding', '1');
      this.props.navigation.navigate('NewOnBoarding');
    } catch (error) {
      // Error saving data
      console.log(error);
    }
  }

  _renderDotIndicator() {
    return <PagerDotIndicator pageCount={4} />;
  }

  render() {
    return (
      <LinearGradient colors={['#222A33', '#43597D']} style={styles.container}>
        <IndicatorViewPager
          style={{ flex: 1 }}
          indicator={this._renderDotIndicator()}
        >
          <View>
            <View style={[styles.fiftyBox, { alignItems: 'flex-end' }]}>
              <View style={styles.containerPhone}>
                <Image style={styles.imagePhoneSmall} source={require('../assets/images/files/shadowLeft.png')} />
                <Image style={styles.imagePhoneMiddle} source={require('../assets/images/files/shadowMedium.png')} />

                <Icon name="PhoneOrig" width={78} height={150} viewBox="0 0 86 164" />

                <Image style={styles.imagePhoneMiddle} source={require('../assets/images/files/shadowMedium.png')} />
                <Image style={styles.imagePhoneSmall} source={require('../assets/images/files/shadowRight.png')} />
              </View>
            </View>

            <View style={[styles.fiftyBox, { alignItems: 'flex-start' }]}>
              <View style={styles.containerText}>
                <Text style={styles.title}>Relevant Information at a Glance</Text>

                <View style={{ marginHorizontal: 5 }}>
                  <Text style={styles.subTitle}>Retail Insider gives you an inside look at participating AT&T retail stores based on your location.</Text>
                  <Text style={styles.subTitle}>Simply walk around the store and we'll share information about nearby products and experiences.</Text>
                </View>
              </View>
            </View>
          </View>

          <View>
            <View style={[styles.fiftyBox, { alignItems: 'flex-end' }]}>
              <View style={[styles.containerPhone, { justifyContent: 'center' }]}>
                <View>
                  <Image style={styles.imageOnBList} source={require('../assets/images/files/onBList.png')} />
                </View>
              </View>
            </View>

            <View style={[styles.fiftyBox, { alignItems: 'flex-start' }]}>
              <View style={styles.containerText}>
                <Text style={styles.title}>Hear What Others are Saying</Text>

                <View style={{ maxWidth: 314 }}>
                  <Text style={styles.subTitle}>Discover unbiased reviews from CNET, Consumer Reports and more!</Text>
                </View>
              </View>
            </View>
          </View>

          <View>
            <View style={[styles.fiftyBox, { alignItems: 'flex-end' }]}>
              <View style={[styles.containerPhone, { justifyContent: 'center' }]}>
                <View>
                  <Icon name="PhoneOrig" width={86} height={164} viewBox="0 0 86 164" />
                </View>
                <View style={{ marginHorizontal: 16 }}>
                  <Icon name="Vs" width={27} height={43} viewBox="0 0 27 43" />
                </View>
                <View>
                  <Icon name="PhoneCompare" width={93} height={171} viewBox="0 0 93 171" />
                </View>
              </View>
            </View>

            <View style={[styles.fiftyBox, { alignItems: 'flex-start' }]}>
              <View style={styles.containerText}>
                <Text style={styles.title}>Compare</Text>

                <View style={{ maxWidth: 314 }}>
                  <Text style={styles.subTitle}>Can't decide? Get a side by side comparison of key features from your favorite selections.</Text>
                </View>
              </View>
            </View>
          </View>

          <View>
            <View style={[styles.fiftyBox, { alignItems: 'flex-end' }]}>
              <View style={styles.containerPhone}>
                <View>
                  <Image style={styles.imageFourLeft} source={require('../assets/images/files/imageLeft.png')} />
                </View>
                <View>
                  <Image style={styles.imageFourCenter} source={require('../assets/images/files/imageCenter.png')} />
                </View>
                <View>
                  <Image style={styles.imageFourRight} source={require('../assets/images/files/imageRight.png')} />
                </View>
              </View>
            </View>

            <View style={[styles.fiftyBox, { alignItems: 'flex-start' }]}>
              <View style={styles.containerText}>
                <Text style={styles.title}>Watch While You Wait</Text>

                <View style={{ maxWidth: 314 }}>
                  <Text style={styles.subTitle}>Discover a selection of AT&T original content, movie trailers, and more.</Text>
                </View>

                <TouchableOpacity style={styles.getStartedBtn} onPress={this.getStart}>
                  <Text style={styles.getStartedBtnText}>Get started</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </IndicatorViewPager>
      </LinearGradient>
    );
  }
}

const mapStateToProps = state => {
  const { common } = state;

  return { bluetoothIsOn: common.bluetoothIsOn };
}

export default connect(mapStateToProps)(OnBoardingScreen);
