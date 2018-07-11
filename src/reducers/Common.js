/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

const initialState = {
  customHeaderNav: {
    hideHeader: false,
    heightHeader: 56,
    hideSlide: false,
    heightSlide: 166
  }
}

export default common = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_HEADERNAV':
      return action.newValue
    default:
      return state
  }
}
