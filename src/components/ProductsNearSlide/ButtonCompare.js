/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Alert, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

// My Customs
import Icon from '../../assets/images/Icon';

const { width: viewportWidth } = Dimensions.get('window');

class ButtonCompare extends Component {
  render() {
    return (
      <Button
        raised
        icon={ (viewportWidth <= 340 ? null : { name: 'compare-arrows', style: { marginRight: 8 } }) }
        title='Compare'
        color="#FFF"
        borderRadius={18}
        backgroundColor="#1181FF"
        textStyle={{
          // fontFamily: 'Rubik',
          fontSize: 14,
          lineHeight: 17
        }}
        buttonStyle={{ padding: 6}}
        onPress={() => this.props.onGoToCompareBtn()}
      />
    );
  }
}

export default ButtonCompare;
