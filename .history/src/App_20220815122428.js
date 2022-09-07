import React from 'react';
import { Route } from 'react-router-dom';

import { Header } from './components';
import { Home, Cart } from './pages';


function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header/>
        <div className="content">
          <Route path="/" element={<Home>} />
          <Route path="/cart" element={Cart} />
        </div>
      </div>
    </div>
  );
}

export default App;
