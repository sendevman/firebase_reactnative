/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import { combineReducers } from 'redux';

// My Reducers
import current from './Current';

const rootReducer = combineReducers({
  current
});

export default rootReducer;
