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

class ButtonGet extends Component<props> {
  render() {
    return (
      <Button
        raiseds
        title='Get started'
        color="#FFFFFF"
        borderRadius={24}
        backgroundColor="transparent"
        textStyle={{
          fontFamily: 'Rubik',
          fontSize: 16,
          lineHeight: 19,
          fontWeight: '500'
        }}
        buttonStyle={{ paddingVertical: 15 , paddingHorizontal: 77, borderWidth: 1, borderStyle: 'solid', borderColor: '#536C88' }  }
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

export default ButtonGet;
