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
  imageLogin: {
  	width:165,
  	height: 78
  },
  text: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 46
  },
  textTitle: {
  	color: '#FFFFFF',
  	marginBottom: 8,
  	fontFamily: 'Rubik',
  	fontSize: 16,
  	fontWeight: '500',
  	lineHeight: 19,
  	textAlign: 'center',
    marginTop: 97
  },
  subTitle: {
  	color: '#839FBE',
  	fontFamily: 'Roboto',
  	fontSize: 15,
  	lineHeight: 20,
  	textAlign: 'center'
  }
});