/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import { StyleSheet, Dimensions } from 'react-native';
var { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: '#EEF1F4'
  },
  textTitle:{
    color: '#1181FF',
    fontFamily: 'Rubik',
    fontSize: 14,
    letterSpacing: 0.12,
    lineHeight: 17,
    marginTop: 16,
    marginLeft: 10
  },
  containerBox: {
    paddingHorizontal: 10,
    marginTop: 8,
    marginBottom: 14,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  containerAccesories: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 6
  },
  Accesories:{
    width: 120,
    height: 149,
    borderRadius: 6,
    backgroundColor: '#FFFFFF',
    elevation: 2,
    shadowColor: '#AEBECD'
  },
  frameImage: {
    height: 86,
    width: 106,
    borderRadius: 6,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 7,
    marginHorizontal: 7
  },
  resizeMode: {
    height: 86,
    width: 106
  },
  separator: {
    borderTopColor: '#E3E9EF',
    borderTopWidth: 1,
    borderStyle: 'solid'
  },
  Text: {
    marginTop: 8,
    marginHorizontal: 10,
    color: '#3E3F42',
    fontFamily: 'Rubik',
    fontSize: 12,
    letterSpacing: 0.1,
    lineHeight: 15
  },
  addAcc: {
    height: 149,
    width: 120
  },
  moreAcc: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 27,
    marginVertical: 32
  },
  textMore: {
    color: '#3E3F42',
    fontFamily: 'Rubik',
    fontSize: 12,
    letterSpacing: 0.1,
    lineHeight: 15,
    marginTop: 4
  }
  
});