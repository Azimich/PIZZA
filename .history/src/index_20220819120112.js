import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import store from './redux/store'
import './scss/app.scss';
import App from './App';


const inc = () => {
  store.dispatch({
    type: 'ДОБАВИТЬ'
  })
}

store.sub

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (
  <Router>
    <button onClick={(inc)}>+1</button>
    <App/>
  </Router>
);

