import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as R, Route } from 'react-router-dom';

import './scss/app.scss';
import App from './App';
import Header from './components/Header';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route exact path="/" component={App}/>
      <Route exact path="/qwe" component={Header}/>
    </BrowserRouter>
  </React.StrictMode>
);

