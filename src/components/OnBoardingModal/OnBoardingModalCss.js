/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import { StyleSheet, Dimensions } from 'react-native';
var { width } = Dimensions.get('window');

export default StyleSheet.create({
  // - - Containers - -
  containerModal: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    width: 310,
    height: 370,
    borderRadius: 16,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#FFF'
  },
  // - - Modal Box - -
  modalBox: { marginHorizontal: 10 },
  bluetoothBox: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 34,
    marginBottom: 24
  },
  modalText: {
    color: '#3E3F42',
    // fontFamily: 'Roboto',
    fontSize: 16,
    lineHeight: 27,
    textAlign: 'center'
  },
  // - - Allow Button - -
  allowBtn: {
    marginTop: 24,
    marginHorizontal: 6,
    paddingVertical: 15,
    borderRadius: 28,
    backgroundColor: '#1181FF'
  },
  allowBtnText: {
    color: '#FFFFFF',
    // fontFamily: 'Roboto',
    fontSize: 16,
    lineHeight: 21,
    textAlign: 'center'
  },
  // - - Decline Button - -
  declineBtn: {
    marginTop: 18,
    marginHorizontal: 6,
    paddingVertical: 15,
  },
  declineBtnText: {
    color: '#536C88',
    textDecorationLine: 'underline',
    // fontFamily: 'Roboto',
    fontSize: 16,
    lineHeight: 21,
    textAlign: 'center'
  }
});
