/**
 * Conexus-Tech - Reatail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import { StyleSheet, ScrollView, Image, Button, Text, View } from 'react-native';

export default StyleSheet.create({
  container: { backgroundColor: '#FFF' },
  infoSpecBox: { paddingHorizontal : 10 },
  // - - Description Box - - 
  description: {
    marginVertical: 10,
    textAlign: 'left',
    fontFamily: 'Rubik',
    fontSize: 18,
    fontWeight: '300',
    letterSpacing: 0.12,
    lineHeight: 22
  },
  hrDivider: {
    borderTopWidth: 1,
    borderStyle: 'solid',
    borderTopColor: '#1181FF',
    marginTop: 10,
    marginBottom: 10
  },
  titleDivider: {
    top: -20,
    width: 50,
    backgroundColor: '#FFF',
    color: '#1181FF',
    fontFamily: 'Rubik',
    fontSize: 14,
    letterSpacing: 0.12,
    lineHeight: 17
  },
  // - - Color Box - - 
  colorItemBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  colorItem: {
    width: 70,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  colorImage: {
    height: 85,
    width: 40,
    marginLeft: 5
  },
  colorTitle: {
    height: 28,
    width: 50,
    color: '#3E3F42',
    fontFamily: 'Roboto',
    fontSize: 12,
    letterSpacing: 0.1,
    lineHeight: 14,
    textAlign: 'center',
    marginVertical: 5
  },
  // - - Storage Box - - 
  storageBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  storageItem: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 65,
    minWidth: '48%',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#E3E9EF',
    borderRadius: 6,
    backgroundColor: '#FFFFFF'
  },
  storageGB: {
    color: '#3E3F42',
    fontFamily: 'Roboto',
    fontSize: 18,
    lineHeight: 21
  },
  storagePrice: {
    color: '#AEBECD',
    fontFamily: 'Roboto',
    fontSize: 18,
    lineHeight: 21
  },
  // - - Display Box - - 
  displayBox: { justifyContent: 'space-evenly' },
  displaySizeItem: {
    height: 50,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center'
  },
  displaySizeHr: {
    position: 'absolute',
    height: '110%',
    width: 2,
    backgroundColor: '#E3E9EF',
    transform: [{ rotate: '45deg' }] 
  },
  displaySize: {
    backgroundColor: 'white',
    color: '#3E3F42',
    fontFamily: 'Rubik',
    fontSize: 20,
    letterSpacing: 0.17,
    lineHeight: 22
  },
  displayTextItem: {
    height: 50,
    justifyContent: 'center'
  },
  displayText: {
    color: '#3E3F42',
    fontFamily: 'Roboto',
    fontSize: 14,
    letterSpacing: 0.12,
    lineHeight: 20
  },
  // - - Camera Box - - 
  cameraItem: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 85,
    minWidth: '48%',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#E3E9EF',
    borderRadius: 6,
    backgroundColor: '#FFFFFF'
  },
  cameraTitle: {
    color: '#3E3F42',
    fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 0.12,
    lineHeight: 20
  },
  cameraText: {
    color: '#3E3F42',
    fontFamily: 'Roboto',
    fontSize: 14,
    letterSpacing: 0.12,
    lineHeight: 20
  }
});
