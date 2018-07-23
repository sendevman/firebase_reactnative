/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

const initialState = {
  bluetoothIsOn: false,
  customHeaderNav: {
    hideHeader: false,
    heightHeader: 56,
    hideSlide: false,
    heightSlide: 166,
    heightScrolled: false
  }
}

export default common = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_HEADERNAV':
      // return state
      return {
        ...state,
        customHeaderNav: action.payload
      }
    case 'UPDATE_BLUETOOTH_IS_ON':
      return {
        ...state,
        bluetoothIsOn: action.payload
      }
      break;
    default:
      return state
  }
}
