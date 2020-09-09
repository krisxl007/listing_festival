import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import dashboard from './reducers/Dashboard'

// Application reducers

// All application reducer combine definitions
const reducers = combineReducers({
  dashboard
});

// Default redux middleware definitions
const middlewareList = [thunk];

// We only want redux state logging in development mode
if (process.env.NODE_ENV === 'development') {
  middlewareList.push(logger);
}

const middleware = applyMiddleware(...middlewareList);

export default createStore(reducers, middleware);
