/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

// My Root Reducer
import rootReducer from '../reducers/index';

const logger = createLogger();
const middleware = [ thunk, logger ];
const enhancer = compose(applyMiddleware(...middleware));

const myStore = createStore(rootReducer, enhancer);

export default myStore;
