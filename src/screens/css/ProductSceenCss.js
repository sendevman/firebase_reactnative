/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import { StyleSheet, Dimensions } from 'react-native';
var { width } = Dimensions.get('window');

export default StyleSheet.create({

  modalContent: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  bottomModal: {
    justifyContent: "flex-end",
    margin: 0
  },
  bottomModalView: {
    backgroundColor: '#e8e8e8',
    width: width - 20,
    height: 60,
    shadowOpacity: 0.24,
    borderRadius: 5,
    elevation: 4, flexDirection: 'row', alignItems: 'center',
    shadowOffset: {
      height: 4,
      width: 2
    }
  }
})