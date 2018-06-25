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
  },
  imageCompare: {
    marginHorizontal: 10
  },
  text: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 43
  },
  textTitle: {
  	color: '#FFFFFF',
  	marginBottom: 8,
  	fontFamily: 'Rubik',
  	fontSize: 16,
  	fontWeight: '500',
  	lineHeight: 19,
  	textAlign: 'center',
    marginTop: 42
  },
  subTitle: {
  	color: '#839FBE',
  	fontFamily: 'Roboto',
  	fontSize: 15,
  	lineHeight: 20,
  	textAlign: 'center'
  }
});