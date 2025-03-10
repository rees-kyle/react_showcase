import { createStore, combineReducers } from 'redux';
import counterReducer from './reducer';

const rootReducer = combineReducers({ counter: counterReducer });

const store = createStore(rootReducer);

console.log('Initial Redux state:', store.getState());

store.subscribe(() => console.log('Updated Redux state:', store.getState()));

export default store;
