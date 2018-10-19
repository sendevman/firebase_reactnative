/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import { Dimensions, Platform, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

function wp (percentage) {
  const value = (percentage * (width > 400 ? 400 : width)) / 100;
  return Math.round(value);
};

const IS_IOS = Platform.OS === 'ios';
const slideWidth = wp(85);
const itemHorizontalMargin = wp(1);

export const sliderWidth = (width > 400 ? 400 : width);
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

export default StyleSheet.create({
  backImage: {
    height: height,
    width: width,
    resizeMode: 'contain',
    opacity: 0.2
  },
  sliderView: {
    height: 200,
    width: width,
    resizeMode: 'contain',
    marginTop: -280
  },
  // Item Section
  itemContainer: {
    backgroundColor: '#808080',
    paddingHorizontal: 0,
    flexDirection: 'row',
    alignItems: 'center',
    height: 200,
    borderRadius: 10
  },
  // TitleCard Section
  itemImgBG: {
    marginTop: 0,
    marginLeft: 10,
    width: 140,
    height: 180,
    borderRadius: 10,
    backgroundColor: 'white'
  },
  bgImage: {
    // ...StyleSheet.absoluteFillObject,
    width: 140,
    height: 180,
    resizeMode: 'contain',
    opacity: 1
  },
  itemRight: {
    flexDirection: 'column',
    marginLeft: 20,
    borderRadius: 10,
    alignItems: 'center',
    // backgroundColor: 'white'
  }
})