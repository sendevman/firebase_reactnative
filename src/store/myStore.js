/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const initialStatePivot = { testing: 0 };

function reducer(state = initialStatePivot, action) {
  return state;
}

const logger = createLogger();
const enhancer = compose(
  applyMiddleware(thunk, logger)
);

const myStore = createStore(reducer, enhancer);

export default myStore;
