/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// My Customs
import Icon from '../../assets/images/Icon';

// My Styles
const styles = StyleSheet.create({
  headerBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerTitle: {
    width: 104,
    marginLeft: 10,
    textAlign: 'left',
    color: '#FFF',
    fontFamily: 'Rubik',
    fontSize: 16,
    lineHeight: 19
  }
});

class LogoTitleCompare extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <View style={ styles.headerBox }>
        <Icon name="Globe" width="24" height="24" fill="#FFF" viewBox="0 0 50 50" />
        <Text style={ styles.headerTitle }>Compare</Text>
      </View>
    );
  }
}

export default LogoTitleCompare;
