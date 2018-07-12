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

class ButtonChange extends Component<props> {
  render() {
    return (
      <Button
        raised
        title='Change'
        color="#1181FF"
        borderRadius={12}
        backgroundColor="#FFF"
        textStyle={{
          // fontFamily: 'Roboto',
          fontSize: 12,
          lineHeight: 14
        }}
        buttonStyle={{ marginTop: 8, paddingTop: 5, paddingBottom: 4, paddingHorizontal: 20, borderWidth: 1, borderStyle: 'solid', borderColor: '#1181FF' }}
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

export default ButtonChange;
