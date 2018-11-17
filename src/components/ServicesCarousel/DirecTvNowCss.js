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
  // Slide Type: Bullets
  bulletsContainer: {
    marginVertical: 10,
    paddingHorizontal: 5,
  },
  bulletBox: {
    width: '100%',
    margin: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  bulletText: {
    color: '#000',
    marginLeft: 10,
    fontSize: 18,
  },
  // Slide Type: SubCards
  subCardsContainer: {
    marginVertical: 10,
    paddingHorizontal: 5,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  subCardBox: {
    backgroundColor: '#000',
    width: (itemWidth - 50) / 2,
    margin: 5,
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    // elevation: 2,
    borderRadius: 6,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  subCardTitle: {
    marginTop: 10,
    marginBottom: 5,
    color: '#FFF',
    fontSize: 14,
  },
  subCardBody: {
    color: '#FFF',
    fontSize: 12,
  },
  // Slide Type: International
  intSubCardsContainer: {
    marginVertical: 10,
    paddingHorizontal: 5,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  intSubCardBox: {
    backgroundColor: '#000',
    width: (itemWidth - 50) / 2,
    margin: 5,
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: 6,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  intSubCardTitle: {
    marginVertical: 5,
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  intSubCardChannels: {
    color: '#FFF',
    fontSize: 13,
    textAlign: 'center',
  },
  intSubCardPriceBox: {
    marginVertical: 12,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  intSubCardPrice: {
    color: '#FFF',
    fontSize: 10,
    fontWeight: 'bold',
  },
  intSubCardPriceNumber: {
    fontSize: 24,
    lineHeight: 26,
  },
  intSubCardExtraText: {
    width: '100%',
    color: '#FFF',
    fontSize: 9,
    textAlign: 'center',
  },
  intSubCardImgBox: {
    marginTop: 2,
    width: (itemWidth - 90) / 2,
    height: (itemWidth - 90) / 4,
  },
  intSubCardImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  // Legal Section
  legalBox: {
    width: width,
    paddingHorizontal: 10,
  },
  txtLegal: {
    color: '#FFF',
    fontSize: 12,
    marginVertical: 20,
  },
});
