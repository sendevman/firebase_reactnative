/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Image, ScrollView, Text, View, WebView } from 'react-native';
import { connect } from 'react-redux';
import { Rating } from 'react-native-ratings';

// My Styles
import styles from './css/CompareTwoScreenCss';

// My Customs
import Icon from '../assets/images/Icon';
import ButtonChange from './components/ButtonChange';

class CompareTwoScreen extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.compareBox}>

          <View style={styles.containerBox}>
            <View style={styles.addProduct}>
                <Image style={styles.imagePhone} source={require('../assets/images/files/S9-Compare1.png')} />
            </View>
            <View>
              <Text style={styles.titleVs}>VS</Text>
            </View>
            <View style={styles.addProduct}>
                <Image style={styles.imagePhone} source={require('../assets/images/files/S9-Compare.png')} />
            </View>
          </View>

          <View style={styles.containerBox}>
            <View style={styles.containerTitle}>
              <Text style={styles.nameProduct}>Samsung Galaxy S9</Text>
              <ButtonChange />
            </View>
            <View>
              <Text style={styles.titleVs}></Text>
            </View>
            <View style={styles.containerTitle}>
              <Text style={styles.nameProduct}>Apple iPhone X</Text>
              <ButtonChange />
            </View>
          </View>

          <View style={styles.separador}></View>

          <View style={[styles.containerBox, {alignItems: 'flex-start'}]}>
            <View style={styles.containerTitle}>
              <Text style={styles.descriptionProduct}>$720</Text>
            </View>
            <View>
              <Text style={styles.textFuntion}>Price</Text>
            </View>
            <View style={styles.containerTitle}>
              <Text style={styles.descriptionProduct}>$999</Text>
            </View>
          </View>

          <View style={styles.separador}></View>

          <View style={[styles.containerBox, {alignItems: 'flex-start'}]}>
            <View style={styles.containerTitle}>
              <Text style={styles.descriptionProduct}>64GB</Text>
              <Text style={styles.descriptionProduct}>SD Card</Text>
            </View>
            <View>
              <Text style={styles.textFuntion}>Storage</Text>
            </View>
            <View style={styles.containerTitle}>
              <Text style={styles.descriptionProduct}>64GB</Text>
              <Text style={styles.descriptionProduct}>256GB</Text>
            </View>
          </View>

          <View style={styles.separador}></View>

          <View style={[styles.containerBox, {alignItems: 'flex-start'}]}>
            <View style={styles.containerTitle}>
              <Text style={styles.descriptionProduct}>5.8-inch</Text>
              <Text style={styles.descriptionProduct}>Super</Text>
              <Text style={styles.descriptionProduct}>AMOLED</Text>
              <Text style={styles.descriptionProduct}>2960 x 1440</Text>
              <Text style={styles.descriptionProduct}>570ppi</Text>
            </View>
            <View>
              <Text style={styles.textFuntion}>Display</Text>
            </View>
            <View style={styles.containerTitle}>
              <Text style={styles.descriptionProduct}>5.8-inch</Text>
              <Text style={styles.descriptionProduct}>OLED</Text>
              <Text style={styles.descriptionProduct}>2436 x 1125</Text>
              <Text style={styles.descriptionProduct}>458ppi</Text>
            </View>
          </View>

          <View style={styles.separador}></View>

          <View style={[styles.containerBox, {alignItems: 'flex-start'}]}>
            <View style={styles.containerTitle}>
              <Text style={styles.subTitle}>FRONT CAMERA</Text>
              <Text style={styles.description}>8MP AF sensor</Text>
              <Text style={styles.description}>F1.7 aperture</Text>
              <Text style={[styles.subTitle, styles.space]}>REAR CAMERA</Text>
              <Text style={styles.description}>12MP AF sensor</Text>
              <Text style={styles.description}>F1.5 aperture</Text>
            </View>
            <View>
              <Text style={styles.textFuntion}>Camera</Text>
            </View>
            <View style={styles.containerTitle}>
              <Text style={styles.subTitle}>FRONT CAMERA</Text>
              <Text style={styles.description}>7MP AF sensor</Text>
              <Text style={styles.description}>F2.2 aperture</Text>
              <Text style={[styles.subTitle, styles.space]}>REAR CAMERA</Text>
              <Text style={styles.description}>12MP AF sensor</Text>
              <Text style={styles.description}>F1.5 aperture</Text>
            </View>
          </View>

          <View style={styles.separador}></View>

          <View style={[styles.containerBox, {alignItems: 'flex-start'}]}>
            <View style={styles.containerTitle}>
              <Text style={styles.subTitle}>PROCESSOR</Text>
              <Text style={styles.description}>Snapdragon</Text>
              <Text style={styles.description}>845</Text>
              <Text style={[styles.subTitle, styles.space]}>MEMORY</Text>
              <Text style={styles.description}>4GB</Text>
            </View>
            <View>
              <Text style={styles.textFuntion}>Performance</Text>
            </View>
            <View style={styles.containerTitle}>
              <Text style={styles.subTitle}>PROCESSOR</Text>
              <Text style={styles.description}>A11 Bionic</Text>
              <Text style={styles.description}>F2.2 aperture</Text>
              <Text style={[styles.subTitle, styles.space]}>MEMORY</Text>
              <Text style={styles.description}>3GB</Text>
            </View>
          </View>

          <View style={styles.separador}></View>

          <View style={[styles.containerBox, {alignItems: 'flex-start'}]}>
            <View style={styles.containerTitle}>
              <Text style={styles.subTitle}>CAPACITY</Text>
              <Text style={styles.description}>3000mAh</Text>
              <Text style={[styles.subTitle, styles.space]}>TALK TIME</Text>
              <Text style={styles.description}>Up to 22hrs</Text>
              <Text style={[styles.subTitle, styles.space]}>INTERNET USE 4G</Text>
              <Text style={styles.description}>Up to 12hrs</Text>
             </View>
            <View>
              <Text style={styles.textFuntion}>Battery</Text>
            </View>
            <View style={styles.containerTitle}>
              <Text style={styles.subTitle}>CAPACITY</Text>
              <Text style={styles.description}>2716mAh</Text>
              <Text style={[styles.subTitle, styles.space]}>TALK TIME</Text>
              <Text style={styles.description}>Up to 21hrs</Text>
              <Text style={[styles.subTitle, styles.space]}>INTERNET USE 4G</Text>
              <Text style={styles.description}>Up to 12hrs</Text>
            </View>
          </View>

          <View style={styles.separador}></View>

          <View style={[styles.containerBox, {alignItems: 'flex-start'}]}>
            <View style={styles.containerTitle}>
              <Text style={styles.descriptionProduct}>Yes</Text>
            </View>
            <View>
              <Text style={styles.textFuntion}>Headphone Jack</Text>
            </View>
            <View style={styles.containerTitle}>
              <Text style={styles.descriptionProduct}>No</Text>
            </View>
          </View>

          <View style={styles.separador}></View>

          <View style={[styles.containerBox, {alignItems: 'flex-start'}]}>
            <View style={styles.containerTitle}>
              <Text style={styles.subTitle}>SINGLE CORE</Text>
              <Text style={styles.description}>3356</Text>
              <Text style={[styles.subTitle, styles.space]}>MULTI-CORE</Text>
              <Text style={styles.description}>8551</Text>
            </View>
            <View>
              <Text style={styles.textFuntion}>Geekbench Score</Text>
            </View>
            <View style={styles.containerTitle}>
              <Text style={styles.subTitle}>SINGLE CORE</Text>
              <Text style={styles.description}>4206</Text>
              <Text style={[styles.subTitle, styles.space]}>MULTI-CORE</Text>
              <Text style={styles.description}>10125</Text>
            </View>
          </View>

          <View style={[styles.separador, { borderTopColor: '#FFFFFF'}]}></View>
        </View>
      </ScrollView>
    );
  }
}
function mapStateToProps(state) {
  return { compare: 0 };
}

export default connect(mapStateToProps)(CompareTwoScreen);
