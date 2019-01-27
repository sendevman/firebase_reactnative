/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { AppState, AsyncStorage, Image, Text, TouchableOpacity, View, NativeModules, PermissionsAndroid, Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { IndicatorViewPager, PagerDotIndicator } from 'rn-viewpager';
import { connect } from 'react-redux';

// My Styles
import styles from './css/OnBoardingScreenCss';

// My Customs
import Icon from '../assets/images/Icon';

class OnBoardingScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      gpsEnabled: false,
      bluetoothEnabled: false
    }
  }

  // async componentDidMount() {
  //   this.checksensors()
  //   AppState.addEventListener('change', this._handleAppStateChange);
  // }

  // componentWillUnmount() {
  //   AppState.removeEventListener('change', this._handleAppStateChange);
  // }



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
    return <PagerDotIndicator pageCount={5} />;
  }

  locationCheck = async () => {
    var permissionn = await this.hasPermission();
    if (permissionn) {
      // if i immediately call this.goHome() it throws exception (i donnt know why).
      // this is a work around to that exception
      setTimeout(() => {
        AsyncStorage.setItem('passOnboarding', '1');

        setTimeout(()=> {
          this.goHome();
        }, 3000)

      }, 500)
    }
  }

  maybeLater = () => {
    AsyncStorage.setItem('maybeLater', '1');
    this.goHome();
  }

  hasPermission = () => {
    return new Promise((resolve, reject) => {

      if (Platform.OS === 'ios') {
        navigator.geolocation.getCurrentPosition((success) => {
          console.log(success, 'success');

          // call native code to initialise walkbase.
          // implemennted onn example code, its nothing related to calender or event.
          // TODO: Change class name from CalendarManager to WalkbaseManager in objective c.
          
          setTimeout(() => {
            var CalendarManager = NativeModules.CalendarManager;
            CalendarManager.addEvent('test', 'test');
          }, 5000);
  
          resolve(true);
        }, function(err) {
          console.log('error', err);
          resolve(false);
        });
      } else {
        
        PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            'title': 'The application wants to access your location',
            'message': 'Please grant the location access to use the full functionalities of the app'
          }
        ).then(grant => {
          if (grant === 'granted') {
            // call native android code to initialise walkbase sdk.
            NativeModules.WalkbaseModule.initWalkbase();
            resolve(true);
          } else  {
            resolve(false);
          }
        })
      }
      
    });
  }

  goHome = () => {
    this.props.navigation.navigate('Home');
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

              </View>
            </View>
          </View>
          <View>
          

          <View>
          <View style={[styles.fiftyBox, { height: '30%', alignItems: 'flex-end' }]}>
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

          <View style={[styles.fiftyBox, { height: '70%', alignItems: 'flex-start' }]}>
            <View style={styles.containerText}>

              <View>
                <Text style={[styles.subTitle, { marginBottom: 20, marginLeft: 12, marginRight: 12 }]}>
                  Retail Insider is an exclusive in store AT&T experience.
                  When you turn on location we will cerify that you are in an AT &T store and can access the Retail Insidder experience.
                </Text>
                <Text style={[styles.subTitle, { marginBottom: 20, marginLeft: 12, marginRight: 12 }]}>
                  If you choose not to allow access parts of the experience may not be accessible.
                </Text>
                <Text style={[styles.subTitle, { marginLeft: 12, marginRight: 12 }]}>
                  We may use your location to support or improve this application.
                </Text>
              </View>

              <TouchableOpacity style={styles.getStartedBtn} onPress={this.locationCheck}>
                <Text style={styles.getStartedBtnText}>OK WITH ME</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={this.maybeLater} style={{ fontSize: 15, marginTop: 10 }}>
                <Text style={styles.getStartedBtnText}>Maybe Later</Text>
              </TouchableOpacity>

              <View>
                <Text style={[styles.subTitle, { marginTop: 10, marginLeft: 12, marginRight: 12 }]}>
                  For more informations on how AT&T is using your location data, see our Terms of Service and Privacy Policy
                </Text>
              </View>
            </View>
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
