import { combineReducers } from 'redux';

import filtersReducer from './filters';
import pizzasReducer from './pizzas';
import cart from './cart';
import cart from './../../../.history/src/redux/reducers/cart_20220905193419';


const rootReducer = combineReducers({
  filters: filtersReducer,
  pizzas: pizzasReducer,
});


export default rootReducer;