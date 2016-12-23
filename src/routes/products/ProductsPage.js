import React, { Component } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';

class ProductsPage extends Component {
  render() {
    return (
      <div className="app-page-products">
      	<Sidebar />
        <h3> Produkcija </h3>
      </div>
    );
  }
}

export default ProductsPage;
