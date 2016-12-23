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
            <span>Produkts 1</span>
            <img alt="placeholder" src="http://larics.rasip.fer.hr/wp-content/uploads/2016/04/default-placeholder.png"/>
            </Link>
            <Link to="/home">
            <span>Produkts 2</span>
            <img alt="placeholder" src="http://larics.rasip.fer.hr/wp-content/uploads/2016/04/default-placeholder.png"/>
            </Link>
            <Link to="/home">
            <span>Produkts 3</span>
            <img alt="placeholder" src="http://larics.rasip.fer.hr/wp-content/uploads/2016/04/default-placeholder.png"/>
            </Link>
            <Link to="/home">
            <span>Produkts 4</span>
            <img alt="placeholder" src="http://larics.rasip.fer.hr/wp-content/uploads/2016/04/default-placeholder.png"/>
            </Link>
            <Link to="/home">
            <span>Produkts 5</span>
            <img alt="placeholder" src="http://larics.rasip.fer.hr/wp-content/uploads/2016/04/default-placeholder.png"/>
            </Link>
            <Link to="/home">
            <span>Produkts 6</span>
            <img alt="placeholder" src="http://larics.rasip.fer.hr/wp-content/uploads/2016/04/default-placeholder.png"/>
            </Link>
            <Link to="/home">
            <span>Produkts 7</span>
            <img alt="placeholder" src="http://larics.rasip.fer.hr/wp-content/uploads/2016/04/default-placeholder.png"/>
            </Link>
            <Link to="/home">
            <span>Produkts 8</span>
            <img alt="placeholder" src="http://larics.rasip.fer.hr/wp-content/uploads/2016/04/default-placeholder.png"/>
            </Link>
          </div>
      </div>
    );
  }
}

export default HomePage;
