import { createStore, combineReducers } from 'redux';
import modulerootReducerName from './reducers';


console.log(rootReducer);

const store = createStore(rootReducer);
 
export default store;