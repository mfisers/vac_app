import React, { Component } from 'react';
import './Header.css';
import Navigation from './components/Navigation/Navigation';
//import Carousel from './components/Carousel/Carousel';
import { Link } from 'react-router';

class Header extends Component {
  render() {
    return (
      <div className="app-header">
        <div className="app-logo">
          <Link to="/home">
          <h1>VAC</h1>
          <h3>Vienotais Apgādes Centrs</h3>
          </Link>
        </div>
        <Navigation />
      </div>
    );
  }
}

export default Header;
