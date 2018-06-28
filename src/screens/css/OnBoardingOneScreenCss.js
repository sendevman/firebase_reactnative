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
    justifyContent: 'center'
  },
  containerPhone: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  imagePhonetwo:{
  	width:93,
  	height: 164
  },
  imagePhoneThree: {
  	width:52,
  	height: 134
  },
  text: {
  	marginTop: 46,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 26
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