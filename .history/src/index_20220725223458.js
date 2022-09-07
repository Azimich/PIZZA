import React from 'react';
import ReactDOM from 'react-dom/client';


import './scss/_variables.scss';


import './scss/app.scss';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

