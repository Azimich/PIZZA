import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import './scss/app.scss';
import App from './App';
import store from './../.history/src/redux/store_20220819115010';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (
  <Router>
    <Provider store>
      <App/>
    </Provider>
  </Router>
);

