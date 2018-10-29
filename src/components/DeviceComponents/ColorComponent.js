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

class ColorComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { colors } = this.props;
    const viewWidth = width - 34;
    return (
      <View style={[{ paddingBottom: 20, paddingTop: 20 }]}>
        <Image style={[styles.colorBackground, { width: viewWidth, height: viewWidth * 610 / 1080, marginLeft: 6, }]} source={require('../../assets/images/files/color.png')} />
        <View style={[styles.colorItemBox, { width: viewWidth, marginLeft: 6, marginTop: -viewWidth / 1080 * (610 - 200) }]}>
          {colors.map((item, index) => {
            return (
              <View key={index} style={styles.colorItem}>
                <Image style={styles.colorImage} resizeMode={Image.resizeMode.contain} source={{ uri: item.img }} />
                <Text style={styles.colorTitle}>{item.name}</Text>
              </View>
            );
          })
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // - - Color Box - -
  colorBackground: {
    borderRadius: 6
  }, 
  colorItemBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  colorItem: {
    alignItems: 'center',
    width: 70,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  colorImage: {
    height: 85,
    width: 40
  },
  colorTitle: {
    height: 28,
    width: 53,
    color: '#3E3F42',
    // fontFamily: 'Roboto',
    fontSize: 12,
    letterSpacing: 0.1,
    lineHeight: 14,
    textAlign: 'center',
    marginVertical: 15
  },
})
export default ColorComponent;
