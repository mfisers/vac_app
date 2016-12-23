import React, { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app-container-wrapper">
        <div className="app-container">
          <Header />
          <div className="app-content">
            {this.props.children}
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
