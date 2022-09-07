import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from './components';
import { Home, Cart } from './pages';
import { fetchPizzas. fech } from './redux/actions/pizzas';


function App() {


  React.useEffect(() => {
    console.log(dispatch(fetchPizzas()));
  }, []);        

  return (
    <div className="App">
      <div className="wrapper">
        <Header/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App;

     
