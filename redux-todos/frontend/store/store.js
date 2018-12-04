import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer';
import { thunk } from '../middleware/thunk';
import { applyMiddleware } from 'redux';
import logger from 'redux-logger'

export default createStore(rootReducer, applyMiddleware(thunk,logger));
