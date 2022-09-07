import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route } from 'react-router-dom';

import './scss/app.scss';
import App from './App';
import Header from './components/Header';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route path="/" component={App}/>
      <Route path="/qwe" component={Header}/>
    </BrowserRouter>
  </React.StrictMode>
);

