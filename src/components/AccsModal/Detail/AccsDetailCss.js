/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import { StyleSheet, Dimensions } from 'react-native';
var { width } = Dimensions.get('window');

export default StyleSheet.create({
  containerModal: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerNuevo: {
    width: 310,
    height: 370,
    borderRadius: 16,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#FFF'
  },

  container: {
    backgroundColor: '#FFFFFF'
  },
  posChoose: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 18,
    marginBottom: 16
  },
  textCompatible: {
    color: '#3E3F42',
    fontFamily: 'Rubik',
    fontSize: 16,
    letterSpacing: 0.11,
    lineHeight: 19,
    paddingLeft: 16,
    paddingRight: 290,
    textAlign: 'left'
  },
  separator: {
    borderTopColor: '#E3E9EF',
    borderTopWidth: 1,
    borderStyle: 'solid'
  },
  containerAccesories: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10
  },
  Accesories:{
    height: 196,
    borderRadius: 6,
    borderStyle: 'solid',
    borderColor: '#E3E9EF',
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 9,
    marginBottom: 16,
    marginHorizontal: 10
  },
  frameImage: {
    height: 167,
    width: 167,
    borderRadius: 6,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
    marginHorizontal: 94
  },
  containerDescription: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginHorizontal: 16
  },
  textName: {
    color: '#3E3F42',
    fontFamily: 'Rubik',
    fontSize: 16,
    lineHeight: 19,
    marginBottom: 5, 
    letterSpacing: 0.1
  },
  textDescription: {
    color: '#3E3F42',
    fontFamily: 'Roboto',
    fontSize: 14,
    letterSpacing: 0.1,
    lineHeight: 21,
    marginTop: 15,
    marginRight: 50
  }
  
});