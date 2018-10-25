/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

// import {} from '../actions/Current';


const initialState = {
  locationAll: [],
  locationItem:{}
};

export default locations = (state = initialState, action) => {
  switch (action.type) {
    case 'STORE_LOCATION_ALL_INFO':
      return {
        ...state,
        locationAll: action.payload
      }
    case 'STORE_LOCATION_ITEM':
      return {
        ...state,
        locationItem: action.payload
      }
    default:
      return state;
  }
};
