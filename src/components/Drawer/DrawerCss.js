/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import { StyleSheet, Dimensions } from 'react-native';
var { height } = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    height: height - 25,
    backgroundColor: '#FFF'
  },
  header: {
    height: 90,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: '#E3E9EF',
  },
  title: {
    color: '#3E3F42',
    // fontFamily: 'Rubik',
    fontSize: 17,
    lineHeight: 18,
    letterSpacing: 0.8
  },
  subTitle: {
    color: '#3E3F42',
    // fontFamily: 'Rubik',
    fontSize: 14,
    lineHeight: 16
  },
  itemsBox: {
    paddingHorizontal: 24,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  itemStyle: {
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: '#E3E9EF'
  },
  labelStyle: {
    // fontFamily: 'Rubik',
    fontSize: 14,
    lineHeight: 18,
    fontWeight: 'normal',
    marginLeft: 0
  },
  footer: {
    borderStyle: 'solid',
    borderTopWidth: 1,
    borderTopColor: '#E3E9EF',
    paddingVertical: 16
  },
  signOut: {
    color: '#F44242',
    // fontFamily: 'Rubik',
    fontSize: 14,
    lineHeight: 18
  }
});
