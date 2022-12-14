import { combineReducers } from 'redux';

import filtersReducer from './filters';
import pizzasReducer from './pizzas';
import cart from './ca';


const rootReducer = combineReducers({
  filters: filtersReducer,
  pizzas: pizzasReducer,
});


export default rootReducer;