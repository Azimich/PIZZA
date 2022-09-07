import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';

import './scss/app.scss';
import App from './App';

function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case 'counter/incremented':
      return { value: state.value + 1 }
    case 'counter/decremented':
      return { value: state.value - 1 }
    default:
      return state
  }
}

const store = createStore(counterReducer);

store.subscribe(() => console.log('Хранилище изменилось', store.getState))

console.log(store);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (
  <Router>
    <App/>
  </Router>
);

