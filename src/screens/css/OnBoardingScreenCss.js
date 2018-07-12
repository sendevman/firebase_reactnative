/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import { StyleSheet, Dimensions } from 'react-native';
var { width } = Dimensions.get('window');

export default StyleSheet.create({
  // - - Container Box - -
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  fiftyBox: {
    height: '50%',
    flexDirection: 'row'
  },
  // - - Container Phones - -
  containerPhone: {
    width: '100%',
    height: 170,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  imagePhoneSmall: {
    width: 44,
    height: 110
  },
  imagePhoneMiddle:{
    width: 78,
    height: 150
  },
  imageOnBList: {
    width: 165,
    height: 78
  },
  imageFourLeft: {
    width: 90,
    height: 70,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8
  },
  imageFourCenter: {
    width: 164,
    height: 86
  },
  imageFourRight: {
    width: 90,
    height: 70,
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8
  },
  // - - Container Text - -
  containerText: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
    marginTop: 40
  },
  title: {
    color: '#FFFFFF',
    // fontFamily: 'Rubik',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 19,
    textAlign: 'center',
    marginBottom: 8
  },
  subTitle: {
    color: '#839FBE',
    // fontFamily: 'Roboto',
    fontSize: 15,
    lineHeight: 20,
    textAlign: 'center'
  },
  // - - Get Started Button - -
  getStartedBtn: {
    marginTop: 28,
    height: 48,
    width: 243,
    paddingVertical: 15,
    paddingHorizontal: 77,
    borderRadius: 24,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#536C88'
  },
  getStartedBtnText: {
    color: '#FFFFFF',
    // fontFamily: 'Rubik',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 19,
    textAlign: 'center'
  }
});
