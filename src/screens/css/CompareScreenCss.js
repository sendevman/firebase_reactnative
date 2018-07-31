/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import { StyleSheet, Dimensions } from 'react-native';
var { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: { backgroundColor: '#FFF' },
  compareBox: { 
    paddingHorizontal: 10,
    paddingVertical: 24
  },
  // - - Compare Item Box - -
  compareItemBox: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  // - - Add Product Box - -
  addProductBox: {
    height: 124,
    width: 124,
    borderRadius: 6,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#E3E9EF'
  },
  addBtn: {
    borderRadius: 6,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleAdd: {
    color: '#3E3F42',
    // fontFamily: 'Rubik',
    fontSize: 12,
    letterSpacing: 0.1,
    lineHeight: 15,
    marginTop: 8
  },
  // - - Vs Text Box - -
  vsBox: {
    position: 'relative',
    minHeight: 20,
    minWidth: 50,
    maxWidth: 90,
    width: width - 270,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  titleVs: {
    color: '#AEBECD',
    // fontFamily: 'Roboto',
    fontSize: 15,
    letterSpacing: 0.13,
    lineHeight: 18,
    textAlign: 'center'
  },
  itemImage: {
    height: 122,
    width: 122,
    borderRadius: 6
  },
  // - - Detail Box - -
  detailBox: {
    width: 124,
    marginTop: 9
  },
  detailFlex: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  // - - Title Product Box - -
  titleProduct: {
    height: 44,
    color: '#3E3F42',
    // fontFamily: 'Rubik',
    fontSize: 18,
    fontWeight: '300',
    lineHeight: 22,
    textAlign: 'center'
  },
  changeBtn: {
    height: 23,
    width: 81,
    marginTop: 8,
    borderRadius: 11.5,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#1181FF',
    backgroundColor: '#FFF',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  changeBtnText: {
    color: '#1181FF',
    // fontFamily: 'Roboto',
    fontSize: 12,
    letterSpacing: 0.1,
    lineHeight: 14,
    textAlign: 'center'
  },
  // - - Detail Item Box - -
  whitBorder: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 16,
    borderTopWidth: 1,
    borderStyle: 'solid',
    borderColor: '#E3E9EF'
  },
  featureTitle: {
    color: '#1181FF',
    // fontFamily: 'Roboto',
    fontSize: 15,
    letterSpacing: 0.13,
    lineHeight: 20,
    textAlign: 'center'
  },
  featureDescription: {
    color: '#3E3F42',
    // fontFamily: 'Roboto',
    fontSize: 14,
    letterSpacing: 0.13,
    lineHeight: 20,
    textAlign: 'center'
  },
  featureSubTitle: {
    color: '#AEBECD',
    // fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 0.12,
    lineHeight: 20,
    textAlign: 'center'
  },
  textAbsolute: {
    position: 'absolute',
    width: 90,
    top: 9,
    left: ((width-20)/2) - 45,
    zIndex: 1
  }
});
