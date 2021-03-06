import { createStore, applyMiddleware ,combineReducers} from 'redux';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';

import UsreReducer from './reducer/user/index'

const middlewares = [reduxThunk, logger]

const rootReducer = combineReducers({
    UserData: UsreReducer
   });
   

export const store = createStore(rootReducer, applyMiddleware(...middlewares));