import { new_post_reducer } from './new-post-reducer';
import { createStore, combineReducers } from 'redux';

let reducers = combineReducers({ new_post_reducer: new_post_reducer });
let store = createStore(reducers);

export default store;
