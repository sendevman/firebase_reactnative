/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Image, View, Text, StyleSheet, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
var { width } = Dimensions.get('window');

// My Customs
import Icon from '../../assets/images/Icon';

class DisplayComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { display } = this.props;
    const viewWidth = width - 34;
    return (
      <View style={{ paddingBottom: 10 }}>
        <Image style={[styles.colorBackground, { width: viewWidth, height: viewWidth * 410 / 1080, marginLeft: 6, }]} source={require('../../assets/images/files/display.png')} />
        <View style={[styles.storageBox, { width: viewWidth - 1, marginLeft: 6, marginTop: -viewWidth / 1080 * (410 - 210) }]}>
          <View style={styles.displaySizeItem}>
            <View style={styles.displaySizeHr}></View>
            <Text style={styles.displaySize}>{display.size}"</Text>
          </View>
          <View style={styles.displayTextItem}>
            <Text style={styles.displayText}>{display.description} ({display.resolution}) {display.ppi} ppi</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  // - - Display Box - -
  storageBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  displayBox: {
    backgroundColor: '#FFFFFFBF',
    marginTop: 0,
    justifyContent: 'space-evenly'
  },
  displaySizeItem: {
    height: 50,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center'
  },
  displaySizeHr: {
    position: 'absolute',
    height: '110%',
    width: 2,
    backgroundColor: '#E3E9EF',
    transform: [{ rotate: '45deg' }]
  },
  displaySize: {
    // backgroundColor: 'white',
    color: '#3E3F42',
    // fontFamily: 'Rubik',
    fontSize: 20,
    letterSpacing: 0.17,
    lineHeight: 22
  },
  displayTextItem: {
    height: 70,
    maxWidth: '76%',
    justifyContent: 'center'
  },
  displayText: {
    color: '#3E3F42',
    // fontFamily: 'Roboto',
    fontSize: 14,
    letterSpacing: 0.12,
    lineHeight: 20
  },
})
export default DisplayComponent;
