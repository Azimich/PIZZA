import { createStore, combineReducers } from 'redux';
import moduleName from './reducers';


console.log(rootReducer);

const store = createStore(rootReducer);
 
export default store;