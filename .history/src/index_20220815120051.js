import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, BrowserRouter } from 'react-router-dom';

import './scss/app.scss';
import App from './App';
// import Header from './components/Header';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
      {/* <Route path="/" element={<App/>}/>
      <Route path="/qwe" element={<Header/>}/> */}
    </BrowserRouter>
  </React.StrictMode>
);

