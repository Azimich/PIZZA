import { createStore, combineReducers } from 'redux';


const rootReducer = combineReducers({})

const store = createStore(counterReducer);
 
export default store;