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
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 5,
    textAlign: 'center',
  },
  txtBody: {
    fontSize: 14,
    color: '#3E3F42',
  },
  legalBox: {
    width: width,
    paddingHorizontal: 10,
  },
  txtLegal: {
    color: '#FFF',
    fontSize: 12,
    marginVertical: 20,
  },
  // View More Plans
  readMoreBox: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    marginTop: 4,
    borderTopRightRadius: 6,
    borderTopLeftRadius: 6,
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6,
    paddingVertical: 11
  },
  readMoreText: {
    color: '#1181FF',
    fontSize: 13,
    letterSpacing: 0.09,
    lineHeight: 15,
    fontWeight: '500',
    textAlign: 'center'
  },
  directvCardView: {
    width: width - 20,
    alignItems: 'center',
    backgroundColor: '#000',
    // borderTopWidth: 5,
    borderStyle: 'solid',
    elevation: 2,
    borderRadius: 6,
    marginTop: 10,
    marginBottom: 14,
  },
  imgSave: {
    // width: width - 60,
    height: 200,
    marginTop: 10,
    resizeMode: 'contain',
  },
  txtSaveDescription: {
    color: '#333',
    paddingHorizontal: 5,
    fontSize: 16,
    fontWeight: '300',
    lineHeight: 18,
    marginTop: 10,
    marginBottom: 10,
  },
  txtSaveDetail: {
    color: '#333',
    paddingHorizontal: 15,

    fontSize: 12,
    lineHeight: 12,
    marginBottom: 10,
  },
  contentReadMore: {
    borderColor: '#E3E9EF',
    borderTopWidth: 1,
    borderStyle: 'solid',
    borderBottomWidth: 0,
    paddingVertical: 11,
    width: width - 20,
  },
  textReadMore: {
    color: '#FFF',
    // fontFamily: 'Roboto',
    fontSize: 13,
    letterSpacing: 0.09,
    lineHeight: 15,
    fontWeight: '500',
    textAlign: 'center',
  },
  //Package Part
  directvPackageView: {
    width: width - 20,
    borderRadius: 6,
    alignItems: 'center',
    backgroundColor: '#EEEEEE',
    marginTop: 10,
    marginBottom: 14,
  },
  tableView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'flex-end',
    marginRight: 4,
    // height: 200,
  },
  packageItemView: {
    width: (width - 20) / 7 - 3,
    borderTopWidth: 5,
    marginLeft: 2,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  logoPart: {
    width: (width - 20) * 5 / 6,
    marginTop: 5,
    marginBottom: 10,
    backgroundColor: '#dadbdd',
    alignSelf: 'flex-end',
    borderBottomWidth: 4,
    borderColor: '#289e46',
    flexDirection: 'row',
  },
  logoDescription: {
    width: (width - 20) * 5 / 6 - 75,
  },
  channeltableView: {
    flexDirection: 'column',
    marginRight: 4,
    marginBottom: 10,
    height: 200,
    width: width - 20,
  },
  channelRow: {
    width: width - 20,
    flexDirection: 'row',
    marginLeft: 5,
    borderTopWidth: 1,
  },
  channelItemView: {
    width: (width - 20) / 7 - 3,
    marginLeft: 2,
    height: 40,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgReliability: {
    width: width - 60,
    resizeMode: 'contain',
  },
  imgReimagned: {
    width: 60,
    height: 40,
    marginTop: 5,
  },
});
