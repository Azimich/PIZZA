import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './scss/app.scss';
import App from './App';
// 



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routes>
      <App/>
      {/* <Route path="/" element={<App/>}/>
      <Route path="/qwe" element={<Header/>}/> */}
    </Routes>
  </React.StrictMode>
);

