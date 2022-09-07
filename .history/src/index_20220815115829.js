import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './scss/app.scss';
import App from './App';
import Header from './components/Header';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/qwe" element={<Header/>}/>
    </Routes>
  </React.StrictMode>
);

