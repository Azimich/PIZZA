import { createStore, combineReducers } from 'redux';
import filtersReducer from './reducers/filters';



const rootReducer = combineReducers({
  
});

const store = createStore(counterReducer);
 
export default store;