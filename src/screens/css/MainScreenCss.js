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
    resizeMode: 'stretch',
    opacity: 0.8
  },
  sliderView: {
    height: 200,
    width: width,
    marginTop: -240
  },
  itemBox: {
    backgroundColor: '#FFF',
    maxHeight: 200,
    // height: '100%',
    maxWidth: 400,
    width: '100%',
    padding: 8,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center'
  },
  titleCardArrow: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: IS_IOS ? 6 : 0,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    width: itemWidth,
    height: null
  },
  titleCardBox: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 10
  },
  titleCard: {
    color: '#009FDB',
    // fontFamily: 'Roboto',
    fontSize: 35,
    fontWeight: 'bold',
    lineHeight: 35,
    marginTop: 3,
    marginLeft: 4
  },
  subTitleCard: {
    color: '#5A5A5A',
    // fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: 'bold',
    lineHeight: 14,
    paddingHorizontal: 8,
    marginTop: -5
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
    borderWidth: 2,
    borderColor: '#8d8'
    // backgroundColor: 'white'
  },
  bgImage: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    borderRadius: IS_IOS ? 6 : 0,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    opacity: 1,
  },
  itemRight: {
    flexDirection: 'column',
    marginLeft: 20,
    borderRadius: 10,
    alignItems: 'flex-start',
    height: 160
    // backgroundColor: 'white'
  },
  textTitle: {
    height: 32,
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 0.1,
    lineHeight: 26,
  },
  textSubTitle: {
    // height: 32,
    color: '#FFF',
    fontSize: 20,
    letterSpacing: 0.1,
    lineHeight: 22,
  }
})