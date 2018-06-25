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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerPhone: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: 76,
    marginTop: 130
  },
  imageCompare: {
    marginHorizontal: 20
  },
  imageLeft: {
    height: 74,
    width: 119,
    borderRadius: 8
  },
  PhoneHoriz: {
    height: 86,
    width: 164
  },
  imageRight: {
    height: 74,
    width: 131,
    borderRadius: 8
  },
  text: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 43,
    marginBottom: 24
  },
  textTitle: {
  	color: '#FFFFFF',
  	marginBottom: 8,
  	fontFamily: 'Rubik',
  	fontSize: 16,
  	fontWeight: '500',
  	lineHeight: 19,
  	textAlign: 'center'
  },
  subTitle: {
  	color: '#839FBE',
  	fontFamily: 'Roboto',
  	fontSize: 15,
  	lineHeight: 20,
  	textAlign: 'center'
  }
});