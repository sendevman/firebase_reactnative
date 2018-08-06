/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import { combineReducers } from 'redux';

// My Reducers
import common from './Common';
import current from './Current';
import productsNear from './ProductsNear';
import vod from './Vod';

const rootReducer = combineReducers({
  common,
  current,
  productsNear,
  vod
});

export default rootReducer;
