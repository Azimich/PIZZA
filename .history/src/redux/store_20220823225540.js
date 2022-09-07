import { createStore, combineReducers } from 'redux';
import modulerootReducer from './reducers';


const store = createStore(rootReducer);
 
export default store;