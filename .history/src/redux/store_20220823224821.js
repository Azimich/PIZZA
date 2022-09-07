import { createStore, combineReducers } from 'redux';
import filtersReducer from './reducers/filters';
import pizzasReducer from './reducers/'


const rootReducer = combineReducers({
  
});

const store = createStore(counterReducer);
 
export default store;