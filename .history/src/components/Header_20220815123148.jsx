import React from 'react';
import { Link } from 'react-router-dom';
import logoSvg from '../assets/img/pizza-logo.svg';
import Button from '../components/Button';



function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <img width="38" src={logoSvg} />
          <div className="header__logo-discription">
            <h1>React Pizza</h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </div>
        <div className="header__cart">
          <Link>
          
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header;