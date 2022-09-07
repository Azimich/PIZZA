import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { Header } from './components';
import { Home, Cart } from './pages';
import { fetchPizzas } from './redux/actions/pizzas';


function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(f)
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

     
