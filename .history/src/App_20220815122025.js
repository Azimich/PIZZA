import React from 'react';

import { Header } from './components';
import { Home, Cart } from './pages';


function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header/>
        <div className="content">
          <Cart/>
        </div>
      </div>
    </div>
  );
}

export default App;
