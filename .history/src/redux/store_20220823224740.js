import { createStore, combineReducers } from 'redux';
import filtersRe from './reducers/filters';

const rootReducer = combineReducers({
  
});

const store = createStore(counterReducer);
 
export default store;