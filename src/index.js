/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';

// My Config Files
import myStore from './store/myStore';
import Routes from './routes/Routes';

export default class App extends Component {
  render() {
    return (
      <Provider store={myStore}>
        <Routes />
      </Provider>
    );
  }
}
