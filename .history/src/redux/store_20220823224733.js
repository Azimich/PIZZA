import { createStore, combineReducers } from 'redux';
import filters from './reducers/filters';

const rootReducer = combineReducers({
  
});

const store = createStore(counterReducer);
 
export default store;