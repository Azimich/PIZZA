import { createStore, combineReducers } from 'redux';
import filtersReducer from './reducers/filters';
import pizzasReducer from './reducers/pizzas'


const rootReducer = combineReducers({
  
});

const store = createStore(counterReducer);
 
export default store;