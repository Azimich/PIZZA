import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes } from 'react-router-dom';

import './scss/app.scss';
import App from './App';
// import Header from './components/Header';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Bro>
      <App/>
      {/* <Route path="/" element={<App/>}/>
      <Route path="/qwe" element={<Header/>}/> */}
    </Bro>
  </React.StrictMode>
);

