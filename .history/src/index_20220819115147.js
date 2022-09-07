import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import store from './redux/store'
import './scss/app.scss';
import App from './App';


console.log();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (
  <Router>
    <App/>
  </Router>
);

