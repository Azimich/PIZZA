import { createStore } from 'redux';
import rootReducer from './reducers';


const store = createStore(counterReducer);

export default store;