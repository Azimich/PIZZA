import { createStore, combineReducers } from 'redux';
import filtersReducer from './reducers/filters';
import pizzasReducer from './reducers/pizzas';


const rootReducer = combineReducers({
  filtersReducer,
  pizzasReducer,
});


log

const store = createStore(rootReducer);
 
export default store;