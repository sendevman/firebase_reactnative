/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Alert } from 'react-native';
import { Button } from 'react-native-elements';

// My Customs
import Icon from '../../assets/images/Icon';

class ButtonBuy extends Component<props> {
  render() {
    return (
      <Button
        raiseds
        title='Buy -$79'
        color="#FFFFFF"
        borderRadius={6}
        backgroundColor="#1181FF"
        textStyle={{
          fontFamily: 'Rubik',
          fontSize: 18,
          letterSpacing: 0.1,
          lineHeight: 22,
        }}
        buttonStyle={{ marginTop: 24, marginHorizontal: 10, borderWidth: 1, borderStyle: 'solid', borderColor: '#1181FF' }  }
        onPress={() => Alert.alert(
          'Alert Title',
          'Go To Compare',
          [
            {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          { cancelable: false }
        )}
      />
    );
  }
}

export default ButtonBuy;
