/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import { combineReducers } from 'redux';

// My Reducers
import common from './Common';
import current from './Current';

const rootReducer = combineReducers({
  common,
  current
});

export default rootReducer;
