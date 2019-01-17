/**
 ** redux/store.js
 ** initialise the redux store
 **/

import { createStore } from 'redux';
import combinedReducers from './reducers';
import initialState from './initial_state';

const store = createStore(combinedReducers, initialState);
export default store;
