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

class ButtonCompare extends Component<props> {
  render() {
    return (
      <Button
        raised
        icon={{name: 'compare-arrows', style: { marginRight: 8 }}}
        title='Compare product'
        color="#FFF"
        borderRadius={18}
        backgroundColor="#1181FF"
        textStyle={{
          // fontFamily: 'Rubik',
          fontSize: 14,
          lineHeight: 17
        }}
        buttonStyle={{ paddingTop: 10, paddingBottom: 9 }}
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

export default ButtonCompare;
