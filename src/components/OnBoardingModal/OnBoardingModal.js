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
    const { onHideModal, showModal } = this.props;

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
              <View style={styles.bluetoothBox}>
                <Icon name="Bluetooth" width={205} height={56} viewBox="0 0 230 63" />
              </View>

              <View>
                <Text style={styles.modalText}>In order for AT&T Retail Companion™</Text>
                <Text style={styles.modalText}>to work, you need to grant it permission</Text>
                <Text style={styles.modalText}>to use your device’s Bluetooth.</Text>
              </View>

              <TouchableOpacity style={styles.allowBtn}
                onPress={() => Alert.alert(
                  'Turn On Bluetooth To Allow "AT&T Retail Companion" to Connect to Accessories',
                  'Go to Allow Action!',
                  [
                    { text: 'Settings', onPress: () => Platform.OS == 'ios' ? OpenSettings.openBluetooth() : SystemSetting.switchBluetooth(() => console.log('switch bluetooth successfully')) },
                    { text: 'Cancel', onPress: () => console.log('Go to Cancel'), style: 'cancel' }
                  ],
                  { cancelable: false }
                )}>
                <Text style={styles.allowBtnText}>Allow</Text>
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
