/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

// import {} from '../actions/Current';
// import _ from 'lodash'

// My FakeData
import { FakeProduct } from '../store/ProductFakeData';

const initialState = {
  allAreas: [],
  postition: {},
  product: {},
  compare: [],
  network: {}
};

export default current = (state = initialState, action) => {
  let newState = Object.assign({}, state); // _.merge({}, state)
  switch (action.type) {
    case 'UPDATE_LOCATION':
      return {
        ...state,
        postition: action.payload
      }
      break;
    case 'UPDATE_PRODUCT_INFO':
      return {
        ...state,
        product: action.payload
      }
      break;
    case 'UPDATE_AREA_INFO':
      return {
        ...state,
        allAreas: action.payload
      }
      break;
    case 'UPDATE_WIFI':
      return {
        ...state,
        network: action.payload
      }
      break;
    default:
      return newState;
  }
  return newState;
};
