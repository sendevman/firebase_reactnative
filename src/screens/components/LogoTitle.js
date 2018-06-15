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
    width: 85,
    marginLeft: 10,
    textAlign: 'left',
    color: '#FFF',
    fontFamily: 'Rubik',
    fontSize: 16,
    lineHeight: 19
  }
});

class LogoTitle extends Component<props> {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <View style={ styles.headerBox }>
        <Icon name="Globe" width="44" height="44" fill="#FFF" viewBox="0 0 50 50" />
        <Text style={ styles.headerTitle }>Retail Companion</Text>
      </View>
    );
  }
}

export default LogoTitle;
