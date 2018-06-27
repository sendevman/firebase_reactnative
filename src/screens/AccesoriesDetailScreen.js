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
import styles from './css/AccesoriesDetailScreenCss';

// My Customs
import Icon from '../assets/images/Icon';
import ButtonBuy from './components/ButtonBuy';


class AccesoriesDetailScreen extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
      
        <View style={styles.posChoose}>
          <Icon height="14" width="10" name="Flecha" viewBox="0 0 10 14" fill="#1181FF" />
          <Text style={styles.textCompatible}>Details</Text>
          <Icon height="14" width="14" name="CloseX" viewBox="0 0 14 14" fill="#1181FF" />
        </View>

        <View style={[styles.separator, {marginHorizontal: 10}]}></View>

        <View style={styles.Accesories}>
          <View style={styles.frameImage}>
            <Image source={require('../assets/images/files/S9-Compare.png')} />
          </View>
        </View>
        
        <View style={styles.containerDescription}>
          <Text style={styles.textName}>10.000 mAh RAVPower Battery Pack</Text>
            <Rating
                    type='custom'
                    ratingColor='#3498db'
                    ratingBackgroundColor='#c8c7c8'
                    ratingCount={5}
                    imageSize={22}
                    onFinishRating={this.ratingCompleted}
              />
          <Text style={styles.textDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sagittis, tortor eu sodales facilisis, magna justo vehicula purus, eget ultrices tellus augue eu arcu.</Text>
        </View>
      <ButtonBuy />
      </ScrollView>
    );
  }
}
function mapStateToProps(state) {
  return { compare: 0 };
}

export default connect(mapStateToProps)(AccesoriesDetailScreen);