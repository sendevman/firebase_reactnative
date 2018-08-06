/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

// My FakeData
import { FakeVod } from '../store/VodFakeData';

const initialState = {
  featured: FakeVod.featured, // {},
  fullList: FakeVod.fullList// []
};

export default current = (state = initialState, action) => {
  let newState = Object.assign({}, state); // _.merge({}, state)
  switch (action.type) {
    case 'UPDATE_VOD_INFO':
      return Object.assign({}, action.payload)
      break;
    case 'UPDATE_FEATURED_INFO':
      return {
        ...state,
        featured: action.payload
      }
      break;
    case 'UPDATE_FULL_LIST_INFO':
      return {
        ...state,
        fullList: action.payload
      }
      break;
    default:
      return newState;
  }
  return newState;
};
