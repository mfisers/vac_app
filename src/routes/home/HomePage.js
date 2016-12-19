import React, { Component } from 'react';
import Carousel from './Carousel/Carousel';
import { Link } from 'react-router';

class HomePage extends Component {
  render() {
    return (
      <div className="app-content-page">
        <Carousel />
          <div className="app-content-page-text">
            <Link to="/home">
            <div className="product-container"><span>Product container1</span></div>
            </Link>
            <Link to="/home">
            <div className="product-container"><span>Product container2</span></div>
            </Link>
            <Link to="/home">
            <div className="product-container"><span>Product container3</span></div>
            </Link>
            <Link to="/home">
            <div className="product-container"><span>Product container4</span></div>
            </Link>
            <Link to="/home">
            <div className="product-container"><span>Product container5</span></div>
            </Link>
            <Link to="/home">
            <div className="product-container"><span>Product container6</span></div>
            </Link>
            <Link to="/home">
            <div className="product-container"><span>Product container7</span></div>
            </Link>
            <Link to="/home">
            <div className="product-container"><span>Product container8</span></div>
            </Link>
          </div>
      </div>
    );
  }
}

export default HomePage;
