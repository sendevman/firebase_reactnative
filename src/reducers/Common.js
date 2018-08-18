/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

const initialState = {
  bluetoothIsOn: false,
  firebaseid: '',
  network: {
    connectionType: 'none',
    isConnected: false,
    ssid: '<unknown ssid>'
  },
  selectedTab: 0
}

export default common = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_BLUETOOTH_IS_ON':
      return {
        ...state,
        bluetoothIsOn: action.payload
      }
      break;
    case 'UPDATE_NETWORK_INFO':
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
    case 'SELECT_TABBAR_ID':
      return {
        ...state,
        selectedTab: action.payload
      }
      break;
    default:
      return state
  }
}
