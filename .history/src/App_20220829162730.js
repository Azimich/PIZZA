import React from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import { Header } from './components';
import { Home, Cart } from './pages';
import { setPizzas } from './redux/actions/pizzas';
import { setSortBy } from './redux/actions/filters';


function App({ items }) {
  const dispatch = useDispatch();
  const hranil = useSelector(({pizzas, filters}) => {
    return {
      items: pizzas.items,
      filters: filters.setSortBy
    }
  }); 

console.log(hranil);
  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      dispatch(setPizzas(data.pizzas));
    });
  }, []);        

  return (
    <div className="App">
      <div className="wrapper">
        <Header/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home items={[]}/>} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>
        </div>
      </div>
    </div>
  ) 
}

export default App;


