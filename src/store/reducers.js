import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import counterReducer from 'modules/Counter/counterReducer';

import history from './history';

const rootReducer = combineReducers({
  router: connectRouter(history),
  counter: counterReducer,
});

export default rootReducer;
