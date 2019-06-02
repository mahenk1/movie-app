import {createStore,applyMiddleware} from 'redux';
import rootReducer from './../reducers/rootReducer';
import thunk from 'redux-thunk';
import {logger} from 'redux-logger';
import initialState from './initialState';

const store = createStore(rootReducer,{},applyMiddleware(thunk));

export default store;
