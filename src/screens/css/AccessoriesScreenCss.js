/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import { StyleSheet, Dimensions } from 'react-native';
var { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF5F',
    // backgroundColor: 'transparent',
    // position: 'absolute',
    bottom: 0
  },
  // Accesories Box
  textTitle: {
    color: '#1181FF',
    // fontFamily: 'Rubik',
    fontSize: 14,
    letterSpacing: 0.12,
    lineHeight: 17,
    marginTop: 16,
    marginLeft: 10
  },
  containerBox: {
    paddingHorizontal: 4,
    marginTop: 8,
    marginBottom: 14,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  // Item Box
  containerItem: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemBox: {
    height: 149,
    width: 120,
    borderRadius: 6,
    backgroundColor: '#FFFFFFB3',
    elevation: 2,
    shadowColor: '#AEBECD',
    marginHorizontal: 6
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
  itemImage: {
    height: 86,
    width: 106
  },
  separator: {
    borderTopColor: '#E3E9EF',
    borderTopWidth: 1,
    borderStyle: 'solid'
  },
  itemText: {
    marginTop: 8,
    marginHorizontal: 10,
    color: '#3E3F42',
    // fontFamily: 'Rubik',
    fontSize: 12,
    letterSpacing: 0.1,
    lineHeight: 15
  },
  // Add Box
  containerAdd: {
    height: 149,
    width: 120,
    borderRadius: 6,
    marginHorizontal: 6,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  addText: {
    width: 68,
    color: '#3E3F42',
    // fontFamily: 'Rubik',
    fontSize: 12,
    letterSpacing: 0.1,
    lineHeight: 15,
    marginTop: 4,
    textAlign: 'center'
  }
});
