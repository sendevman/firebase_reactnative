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
  replaceurl: '',
  selectedTab: 0
}

export default common = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_BLUETOOTH_IS_ON':
      return {
        ...state,
        bluetoothIsOn: action.payload
      }
    case 'UPDATE_LOCATION_IS_ON':
      return {
        ...state,
        locationIsOn: action.payload
      }
    case 'UPDATE_NETWORK_INFO':
      return {
        ...state,
        network: action.payload
      }
    case 'UPDATE_REPLACE_URL':
      return {
        ...state,
        replaceurl: action.payload
      }
    case 'GET_FIREBASE_ID':
      return {
        ...state,
        firebaseid: action.payload
      }
    case 'SELECT_TABBAR_ID':
      return {
        ...state,
        selectedTab: action.payload
      }
    default:
      return state
  }
}
