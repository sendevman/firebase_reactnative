/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import { combineReducers } from 'redux';

// My Reducers
import common from './Common';
import locations from './Location';
import current from './Current';
import productsNear from './ProductsNear';
import vod from './Vod';

const rootReducer = combineReducers({
  common,
  locations,
  current,
  productsNear,
  vod
});

export default rootReducer;
