import React, { Component } from 'react';
import { Link } from 'react-router';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="app-footer">
        <div className="app-footer-menu">
          <Link to="/home">
            <span>Sazinaties ar mums</span>
          </Link>
          <Link to="/home">
            <span>Ka mus atrast</span>
          </Link>
          <Link to="/home">
            <span>Par Mums</span>
          </Link>
        </div>
        <div className="app-footer-copyright">
          <p>Copyright &copy; 2016 COMPANY NAME. All Rights Reserved</p>
        </div>
        <div className="app-footer-social">
          <img src="images/email_icon.png" alt="email" />
          <img src="images/fb_icon.png" alt="fb" />
          <img src="images/instagram.png" alt="instagram" />
          <a href="https://plus.google.com/101560853443212199687?prsrc=3"
             rel="publisher" target="_top">
          <img src="//ssl.gstatic.com/images/icons/gplus-32.png" alt="Google+"/>
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
