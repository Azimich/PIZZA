import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './scss/app.scss';
import App from './App';
import Header from './components/Header';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Route path="/" ={App}/>
      <Route path="/qwe" component={Header}/>
    </Router>
  </React.StrictMode>
);

