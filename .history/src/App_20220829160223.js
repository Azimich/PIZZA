import React from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { setPizzas, useDispatch } from './redux/actions/pizzas';

import { Header } from './components';
import { Home, Cart } from './pages';



function App({ setPizzas, items }) {
  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      setPizzas(data.pizzas)
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


// export default connect(
//   (state) => {
//     return {
//       items: state.pizzas.items,
//       filters: state.filters,
//     };
//   },
//   (dispatch) => {
//     return {
//       setPizzas: (items) => dispatch(setPizzas(items))
//     };
//   },
// )(App);
