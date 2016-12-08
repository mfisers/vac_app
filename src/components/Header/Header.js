import React, { Component } from 'react';
import './Header.css';
import Navigation from './components/Navigation/Navigation';
import Carousel from './components/Carousel/Carousel';
import { Link } from 'react-router';

class Header extends Component {
  render() {
    return (
      <div className="app-header">
        <div className="app-logo">
          <Link to="/home">
          <h2>Hello World!</h2>
          </Link>
        </div>
        <div className="app-navigation">
        <Navigation />
        </div>
      </div>
    );
  }
}

export default Header;
