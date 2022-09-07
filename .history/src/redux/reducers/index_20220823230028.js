import { combineReducers } from 'redux';
import filtersReducer from './filters';
import pizzasReducer from './pizzas';


const rootReducer = combineReducers({
  filtersR,
  pizzasReducer,
});


export default rootReducer;