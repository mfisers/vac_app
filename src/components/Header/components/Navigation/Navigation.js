import React, { Component } from 'react';
import { Link } from 'react-router';

class Navigation extends Component {
  render() {
    return (
        <div className="app-navigation-menu">
          <Link to="/home">
            <span>Jaunumi</span>
          </Link>
          <span className="verticalLine"></span>
          <Link to="/contacts">
            <span>Produkcija</span>
          </Link>
          <span className="verticalLine"></span>
          <Link to="/contacts">
            <span>Pakalpojumi</span>
          </Link>
          <span className="verticalLine"></span>
          <Link to="/contacts">
            <span>Partneri</span>
          </Link>
          <span className="verticalLine"></span>
          <Link to="/contacts">
            <span>Par mums</span>
          </Link>
          <span className="verticalLine"></span>
          <Link to="/contacts">
            <span>Kontakti</span>
          </Link>
        </div>
    );
  }
}

export default Navigation;
