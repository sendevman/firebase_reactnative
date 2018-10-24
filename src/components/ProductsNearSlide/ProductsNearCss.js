/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import { Dimensions, Platform, StyleSheet } from 'react-native';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
  const value = (percentage * (viewportWidth > 400 ? 400 : viewportWidth)) / 100;
  return Math.round(value);
};

const IS_IOS = Platform.OS === 'ios';
const slideWidth = wp(80);
const itemHorizontalMargin = wp(1);

export const sliderWidth = (viewportWidth > 400 ? 400 : viewportWidth);
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

export default StyleSheet.create({
  // Wraper Gradient
  gradient: { ...StyleSheet.absoluteFillObject },
  // TitleCard Section
  bgImage: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    borderRadius: IS_IOS ? 6 : 0,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    opacity: 1
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
  title: {
    color: '#FFF',
    // fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: 'bold',
    lineHeight: 14,
    marginVertical: 10,
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
    paddingHorizontal: 0,
    flexDirection: 'column',
    alignItems: 'center'
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
  loadingBox: {
    height: '100%',
    maxWidth: 400,
    width: '100%',
    paddingVertical: 8,
    paddingHorizontal: 4,
    borderRadius: 6,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
  },
  imageBox: {
    backgroundColor: 'transparent',
    height: 164,
    width: 164,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#E3E9EF',
    borderRadius: 6,
    paddingTop: 14,
    paddingHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemImage: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 6,
    resizeMode: 'cover'
  },
  detailsBox: {
    flexGrow: 1,
    paddingLeft: 8,
    height: 164,
    width: itemWidth - 180
  },
  titleItem: {
    color: '#3E3F42',
    // fontFamily: 'Rubik',
    fontSize: 18,
    lineHeight: 22,
    width: itemWidth - 188
  },
  hrDivider: {
    borderTopWidth: 1,
    borderStyle: 'solid',
    borderTopColor: '#E3E9EF',
    marginBottom: 7
  },
  deviceOptionsBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8
  },
  deviceOptionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10
  },
  deviceOptionText: {
    width: 120,
    color: '#3E3F42',
    // fontFamily: 'Roboto',
    fontSize: 13,
    lineHeight: 15,
    marginLeft: 3
  },
  // Slide Pagination Section
  paginationContainer: {
    paddingTop: 8,
    paddingBottom: 0
  },
  paginationDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    marginHorizontal: 0
  }
});
