/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

function wp (percentage) {
  const value = (percentage * (width > 400 ? 400 : width)) / 100;
  return Math.round(value);
};

const slideWidth = wp(85);
const itemHorizontalMargin = wp(1);

export const sliderWidth = (width > 400 ? 400 : width);
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

export default StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    width: width,
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  hangOffImg: {
    position: 'absolute',
    width: itemWidth - 40,
    height: (itemWidth - 60) / 2,
    left: 20,
    zIndex: 1,
    borderRadius: 6,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  cardContainer: {
    backgroundColor: '#FFFFFF',
    width: itemWidth,
    marginTop: ((itemWidth - 60) / 6),
    padding: 10,
    paddingTop: ((itemWidth - 60) / 3),
    // elevation: 2,
    borderRadius: 6,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  txtBody: {
    marginVertical: 5,
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  // Slide Type: Bullets
  bulletsContainer: {
    width: itemWidth - 20,
    marginVertical: 10,
  },
  bulletBox: {
    marginVertical: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  bulletImg: {
    width: 30,
    height: 20,
  },
  bulletText: {
    width: itemWidth - 52,
    color: '#333',
    marginLeft: 8,
    fontSize: 14,
  },
  // Slide Type: Destination
  destBox: {
    width: itemWidth - 20,
    marginVertical: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  destLegal: {
    marginVertical: 5,
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
  },
});
