/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import { StyleSheet, Dimensions } from 'react-native';
var { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  compareBox: {
    paddingHorizontal: 10,
    marginTop: 23
  },
  containerBox: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  // - - Description Box - -
  addProduct: {
    height: 124,
    width: 124,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 6,
    borderColor: '#E3E9EF'
  },
  imagePhone: {
    height: 120
  },
  containerProduct: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 27,
    marginVertical: 32
  },
  titleProduct: {
    color: '#3E3F42',
    fontFamily: 'Rubik',
    fontSize: 12,
    letterSpacing: 0.1,
    lineHeight: 15,
    marginTop: 8
  },
  titleVs: {
    color: '#AEBECD',
    fontFamily: 'Roboto',
    fontSize: 15,
    letterSpacing: 0.13,
    lineHeight: 18
  },
  nameProduct: {
    maxWidth: 124,
    marginHorizontal: 10,
    color: '#3E3F42',
    fontFamily: 'Rubik',
    fontSize: 18,
    fontWeight: '300',
    lineHeight: 22,
    textAlign: 'center',
    marginTop: 8
  },
  titleChange: {
    color: '#1181FF',
    fontFamily: 'Roboto',
    fontSize: 12,
    letterSpacing: 0.1,
    lineHeight: 14
  },
  containerTitle: {
    width: 124,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  separador: {
    borderTopColor: '#E3E9EF',
    borderTopWidth: 1,
    borderStyle: 'solid',
    marginHorizontal: 10,
    marginTop: 16,
    marginBottom:16
  },
  descriptionProduct: {
    maxWidth: 124,
    marginHorizontal: 10,
    color: '#3E3F42',
    fontFamily: 'Roboto',
    fontSize: 15,
    letterSpacing: 0.13,
    lineHeight: 22,
    textAlign: 'center'
  }
});
