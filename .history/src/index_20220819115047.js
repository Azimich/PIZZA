import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';

import './scss/app.scss';
import App from './App';
import redux from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (
  <Router>
    <App/>
  </Router>
);

