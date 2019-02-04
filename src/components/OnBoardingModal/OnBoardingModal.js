/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Alert, Modal, Text, TouchableOpacity, View, Platform } from 'react-native';

// My Styles
import styles from './OnBoardingModalCss';

// My Customs
import Icon from '../../assets/images/Icon';
import OpenSettings from 'open-settings';

import SystemSetting from 'react-native-system-setting';



// My Actions
import { updateBluetoothIsOn } from '../../actions/Common';

class OnBoardingModal extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    const { type, onHideModal, showModal, location, bluetooth } = this.props;

    let turnOnText = '';
    console.log('location', 'bluetooth', location, bluetooth);
    if (location == false && bluetooth == false) {
      turnOnText = 'Location and Bluetooth';
    } else {
      if (!location) {
        turnOnText = 'Location';
      } else {
        turnOnText = 'Bluetooth';
      }
    }

    
    return (
      <Modal
        animationType="slide"
        transparent={true}
        presentationStyle="overFullScreen"
        visible={showModal}
        onRequestClose={() => { onHideModal() }}>
        <View style={styles.containerModal}>
          <View style={styles.container}>
            <View style={styles.modalBox}>
              {bluetooth &&
                <View style={styles.bluetoothBox}>
                  <Icon name="Bluetooth" width={205} height={56} viewBox="0 0 230 63" />
                </View>}

              <View>
                <Text style={styles.modalText}>In order for AT&T Retail Companion™</Text>
                <Text style={styles.modalText}>to work, you need to grant it permission</Text>
                <Text style={styles.modalText}>to use your device’s {turnOnText}.</Text>
              </View>

              <TouchableOpacity style={styles.allowBtn}
                onPress={() => {
                  OpenSettings.openSettings()
                }}>
                <Text style={styles.allowBtnText}>Open settings</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.declineBtn}
                onPress={() => { onHideModal() }}>
                <Text style={styles.declineBtnText}>Decline</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

export default OnBoardingModal;
