import React from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';

import { Header } from './components';
import { Home, Cart } from './pages';


function App() {
  const [pizzas, setPizzas] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then((resp) => {
      console.log('axios', resp);
    });

    fetch('http://localhost:3000/db.json')
    .then((resp) => {
      console.log('fech', resp);
      return resp.json();
    })
    .then((json) => {
      setPizzas(json.pizzas);
    });
      
  }, []);  

  return (
    <div className="App">
      <div className="wrapper">
        <Header/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home items={pizzas}/>} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
