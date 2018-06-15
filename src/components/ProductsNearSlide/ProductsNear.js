/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Carousel from 'react-native-carousel-view';

// My Styles
import styles from './ProductsNearCss';

// My Customs
import Icon from '../../assets/images/Icon';
import ButtonCompare from './ButtonCompare';

class ProductsNear extends Component<props> {
  render() {
    return (
      <LinearGradient colors={['#2b3748', '#43597D']}  >
        <Text style={styles.title}>PRODUCTS NEAR YOU</Text>
        <Carousel
          animate={false}
          height={136}
          indicatorOffset={4}
          indicatorColor={'#FFF'}
          indicatorSize={6}
          inactiveIndicatorColor={'rgba(255, 255, 255, 0.3)'}
          indicatorSpace={8}
          >
          <View style={styles.itemContainer}>
            <View style={styles.itemBox}>
              <View style={styles.imageBox}>
                <Image style={{ width: 84 }} source={require('../../assets/images/files/S9-Dual.png')} />
              </View>

              <View style={styles.detailsBox}>
                <Text style={styles.titleItem}>Samsung Galaxy S9</Text>

                <View style={styles.hrDivider}></View>

                <View style={styles.deviceOptionsBox}>
                  <View style={styles.deviceOptionItem}>
                    <Icon height="14" width="14" name="Storage" viewBox="0 0 24 24" />
                    <Text style={styles.deviceOptionText}>64GB</Text>
                  </View>
                  <View style={styles.deviceOptionItem}>
                    <Icon height="14" width="14" name="BatteryInclined" viewBox="0 0 20 20" />
                    <Text style={styles.deviceOptionText}>16hrs</Text>
                  </View>
                  <View style={styles.deviceOptionItem}>
                    <Icon height="14" width="14" name="Camera" viewBox="0 0 24 24" />
                    <Text style={styles.deviceOptionText}>18MP + 8MP</Text>
                  </View>
                </View>

                <ButtonCompare />
              </View>
            </View>
          </View>

          <View style={styles.itemContainer}>
            <View style={styles.itemBox}>
              <View style={styles.imageBox}>
                <Image style={{ width: 84 }} source={require('../../assets/images/files/S9-Dual.png')} />
              </View>

              <View style={styles.detailsBox}>
                <Text style={styles.titleItem}>Samsung Galaxy S9</Text>

                <View style={styles.hrDivider}></View>

                <View style={styles.deviceOptionsBox}>
                  <View style={styles.deviceOptionItem}>
                    <Icon height="14" width="14" name="Storage" viewBox="0 0 24 24" />
                    <Text style={styles.deviceOptionText}>64GB</Text>
                  </View>
                  <View style={styles.deviceOptionItem}>
                    <Icon height="14" width="14" name="BatteryInclined" viewBox="0 0 20 20" />
                    <Text style={styles.deviceOptionText}>16hrs</Text>
                  </View>
                  <View style={styles.deviceOptionItem}>
                    <Icon height="14" width="14" name="Camera" viewBox="0 0 24 24" />
                    <Text style={styles.deviceOptionText}>18MP + 8MP</Text>
                  </View>
                </View>

                <ButtonCompare />
              </View>
            </View>
          </View>

          <View style={styles.itemContainer}>
            <View style={styles.itemBox}>
              <View style={styles.imageBox}>
                <Image style={{ width: 84 }} source={require('../../assets/images/files/S9-Dual.png')} />
              </View>

              <View style={styles.detailsBox}>
                <Text style={styles.titleItem}>Samsung Galaxy S9</Text>

                <View style={styles.hrDivider}></View>

                <View style={styles.deviceOptionsBox}>
                  <View style={styles.deviceOptionItem}>
                    <Icon height="14" width="14" name="Storage" viewBox="0 0 24 24" />
                    <Text style={styles.deviceOptionText}>64GB</Text>
                  </View>
                  <View style={styles.deviceOptionItem}>
                    <Icon height="14" width="14" name="BatteryInclined" viewBox="0 0 20 20" />
                    <Text style={styles.deviceOptionText}>16hrs</Text>
                  </View>
                  <View style={styles.deviceOptionItem}>
                    <Icon height="14" width="14" name="Camera" viewBox="0 0 24 24" />
                    <Text style={styles.deviceOptionText}>18MP + 8MP</Text>
                  </View>
                </View>

                <ButtonCompare />
              </View>
            </View>
          </View>
        </Carousel>
      </LinearGradient>
    );
  }
}

export default ProductsNear;
