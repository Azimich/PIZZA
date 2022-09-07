import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';

import './scss/app.scss';
import App from './App';

function counterReducer(state = { value: 0 }, action) {
  if (action.type === 'INCREMENT') {
    return state +1;
  }
  if (action.type === 'DECREMENT') {
    return state -1;
  }
  return state
}

const store = createStore(counterReducer);

store.subscribe(() => console.log('Хранилище изменилось', store.getState()));

console.log(store.getState());
store.dispatch({ type: 'counter/incremented' })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (
  <Router>
    <App/>
  </Router>
);

