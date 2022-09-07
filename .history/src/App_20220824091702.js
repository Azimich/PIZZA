import React from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { store } from './redux/store';

import { Header } from './components';
import { Home, Cart } from './pages';
import 


class App extends React.Component {
  componentDidMount() {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      store.disputch()
    });
  }

  render() {
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
}

export default App;
