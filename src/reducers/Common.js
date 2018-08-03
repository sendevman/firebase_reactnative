/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

const initialState = {
  bluetoothIsOn: false,
  network: {
    connectionType: 'none',
    isConnected: false,
    ssid: '<unknown ssid>'
  },
  firebaseid: ''
}

export default common = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_BLUETOOTH_IS_ON':
      return {
        ...state,
        bluetoothIsOn: action.payload
      }
      break;
    case 'UPDATE_NETWORK':
      return {
        ...state,
        network: action.payload
      }
      break;
    case 'GET_FIREBASE_ID':
      return {
        ...state,
        firebaseid: action.payload
      }
      break;
    default:
      return state
  }
}
