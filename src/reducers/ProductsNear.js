/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

// import {} from '../actions/Current';

// My FakeData
import { FakeProduct } from '../store/ProductFakeData';

const initialState = {
  productsNear: [],
  productsAll: []
};

export default productsNear = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_PRODUCTS_NEAR_INFO':
      return {
        ...state,
        productsNear: action.payload
      }
      break;
    case 'STORE_PRODUCTS_ALL_INFO':
      return {
        ...state,
        productsAll: action.payload
      }
      break;
    default:
      return state;
  }
};
