import { combineReducers } from 'redux';
import filtersReducer from './filters';
import pizzasReducer from './pizzas';


const rootReducer = combineReducers({
  filters: filtersReducer,
  pizzasReducer: pizzasReducer,
});

window.console.log


export default rootReducer;