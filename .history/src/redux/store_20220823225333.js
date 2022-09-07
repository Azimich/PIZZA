import { createStore, combineReducers } from 'redux';
import modulerootReducer from './reducers';


console.log(rootReducer);

const store = createStore(rootReducer);
 
export default store;