/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import { StyleSheet, Dimensions } from 'react-native';
var { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    paddingLeft:16,
    paddingRight: 16,
  },
  closeVod: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop:40
  },
  containerImage: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  containerTrailer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  textTitle: {
    marginTop: 8,
    color: '#FFFFFF',
    fontFamily: 'Rubik',
    fontSize: 16,
    fontWeight: '300',
    lineHeight: 19,
  },
  textSubtitle: {
    marginTop: 4,
    fontFamily: 'Roboto',
    fontSize: 14,
    lineHeight: 16,
    color: 'rgba(255,255,255,0.29)',
  },
  textTrailer: {
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontSize: 14,
    lineHeight: 21,
    marginTop: 16,
  },
  playButton:{
    backgroundColor: '#2E2F32',
    borderRadius: 6,
    marginTop: 24,
    paddingVertical: 18,
    marginBottom: 8
  },
  containerWatch: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imagePlay: {
    height: 42,
    width: 42
  },
  textWatch: {
    color: '#FFFFFF',
    fontFamily: 'Rubik',
    fontSize: 18,
    letterSpacing: 0.1,
    lineHeight: 22,
    marginLeft: 8
  },
  containerBigScreen: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 55
  },
  textBigScreen: {
    color: '#FFFFFF',
    fontFamily: 'Rubik',
    fontSize: 18,
    letterSpacing: 0.1,
    lineHeight: 22,
    textDecorationLine: 'underline',
    marginLeft: 11
  }
});