/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator } from 'rn-viewpager';
import SystemSetting from 'react-native-system-setting';
import { connect } from 'react-redux';

// My Styles
import styles from './css/OnBoardingScreenCss';

// My Customs
import OnBoardingModal from '../components/OnBoardingModal/OnBoardingModal';

// My Actions
import { updateBluetoothIsOn, updateLocationIsOn } from '../actions/Common';

class NewOnBoardingScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locationShowModal: false,
      bluetoothShowModal: false,
      currentModal: 'location',
    };

    this.checkSwitchLocation = this.checkSwitchLocation.bind(this);
    this.checkSwitchBluetooth = this.checkSwitchBluetooth.bind(this);
  };

  componentWillMount() {
    SystemSetting.addBluetoothListener(this.checkSwitchBluetooth);
    SystemSetting.addLocationListener(this.checkSwitchLocation);
  }

  checkSwitchLocation() {
    SystemSetting.isLocationEnabled().then((enable) => {
      this.props.dispatch(updateLocationIsOn(enable));
    })
  }

  checkSwitchBluetooth() {
    SystemSetting.isBluetoothEnabled().then((enable) => {
      this.props.dispatch(updateBluetoothIsOn(enable));
    })
  }

  locationHideModal = () => {
    this.setState({
      locationShowModal: false,
    });
    this.bluetoothShowModal();
  }

  locationShowModal = () => {
    if (this.props.bluetoothIsOn) {
      this.bluetoothShowModal();
    } else {
      this.setState({ locationShowModal: true });
    }
  }

  bluetoothHideModal = () => {
    this.setState({ bluetoothShowModal: false });
    this.props.navigation.navigate('Home');
  }

  bluetoothShowModal = () => {
    if (this.props.bluetoothIsOn) {
      this.props.navigation.navigate('Home');
    } else {
      this.setState({ bluetoothShowModal: true });
    }
  }

  maybeLater = () => {
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <LinearGradient colors={['#222A33', '#43597D']} style={styles.container}>
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

              <TouchableOpacity style={styles.getStartedBtn} onPress={this.locationShowModal}>
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
        <OnBoardingModal type='location' onHideModal={this.locationHideModal} showModal={this.state.locationShowModal} />
        <OnBoardingModal type='bluetooth' onHideModal={this.bluetoothHideModal} showModal={this.state.bluetoothShowModal} />
      </LinearGradient>
    );
  }
}

const mapStateToProps = state => {
  const { common } = state;

  return {
    bluetoothIsOn: common.bluetoothIsOn,
    locationIsOn: common.locationIsOn,
  };
}

export default connect(mapStateToProps)(NewOnBoardingScreen);
