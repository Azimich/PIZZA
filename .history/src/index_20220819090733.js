import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';

import './scss/app.scss';
import App from './App';

function counterReducer(state = { value: 0 }, action) {
  if (action.type === '') {

  }
}

const store = createStore(counterReducer);

store.subscribe(() => console.log('Хранилище изменилось', store.getState()));



console.log(store.getState());
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (
  <Router>
    <App/>
  </Router>
);

