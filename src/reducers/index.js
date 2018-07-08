/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import { combineReducers } from 'redux';

// My Reducers
import bleManage from './BLEManage';
import common from './Common';
import current from './Current';

const rootReducer = combineReducers({
  bleManage,
  common,
  current
});

export default rootReducer;
