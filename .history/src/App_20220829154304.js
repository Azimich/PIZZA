import React from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';

import { Header } from './components';
import { Home, Cart } from './pages';
import { setPizzas as setPizzasAction } from './redux/actions/pizzas';


function App() {
  return () 
}


class App extends React.Component {
  componentDidMount() {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      this.props.setPizzas(data.pizzas)
    });
  }

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
