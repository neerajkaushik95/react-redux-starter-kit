import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import counterReducer from 'modules/Counter/counterReducer';
import authReducer from 'shared/reducers/auth';

import history from './history';

const rootReducer = combineReducers({
  router: connectRouter(history),
  counter: counterReducer,
  auth: authReducer,
});

export default rootReducer;
