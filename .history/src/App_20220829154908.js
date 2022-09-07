import React from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';

import { Header } from './components';
import { Home, Cart } from './pages';
import { setPizzas as setPizzasAction } from './redux/actions/pizzas';


function App(props) {

  console.log(this);
  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      props.setPizzas(data.pizzas)
    });
  }, []);        

  return (
    <div className="App">
      <div className="wrapper">
        <Header/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home items={props.items}/>} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>
        </div>
      </div>
    </div>
  ) 
}


const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
    filters: state.filters,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    setPizzas: (items) => dispatch(setPizzasAction(items))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
