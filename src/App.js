import React, { Component } from 'react';
import Header from './components/Header/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app-container-wrapper container">
        <div className="app-container">
          <Header />
          <div className="app-content">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
