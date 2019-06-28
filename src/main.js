/**
 * App.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import history from 'utils/history';
// Import app routes
import AppRoutes from 'modules/App';
import configureStore from './store/configureStore';

require('assets/favicon.ico'); // Tell webpack to load favicon.ico

const store = configureStore();
const MOUNT_ROOT = document.getElementById('app'); //eslint-disable-line

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AppRoutes />
    </ConnectedRouter>
  </Provider>,
  MOUNT_ROOT,
);

if (module.hot) {
  module.hot.accept('./modules/App', () => {
    const NewAppRoutes = require('./modules/App').default; //eslint-disable-line
    render(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <NewAppRoutes />
        </ConnectedRouter>
      </Provider>,
      MOUNT_ROOT,
    );
  });
}
