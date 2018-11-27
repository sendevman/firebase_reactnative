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
  txtTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 5,
    textAlign: 'center',
  },
  txtBody: {
    marginTop: 5,
    fontSize: 14,
    color: '#3E3F42',
  },
  // Slide Type: SubCards
  subCardsContainer: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  subCardBox: {
    backgroundColor: 'transparent',
    width: '100%',
    marginVertical: 5,
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#ccc',
    // elevation: 2,
    borderRadius: 6,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  subCardTitle: {
    marginTop: 10,
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  subCardLegal: {
    color: '#000',
    fontSize: 10,
  },
  // Slide Type: Bullets
  bulletsBox: { marginVertical: 5 },
  bulletText: {
    marginVertical: 2,
    color: '#000',
    fontSize: 14,
  },
});
