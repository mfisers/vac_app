import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, Route, IndexRedirect } from 'react-router';
import App from './App';
import Contacts from './routes/contacts/ContactsPage';
import Home from './routes/home/HomePage';
import Products from './routes/products/ProductsPage';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="/home" />
      <Route path="home" component={Home} />
      <Route path="contacts" component={Contacts} />
      <Route path="products" component={Products} />
    </Route>
  </Router>,
  document.getElementById('app')
);
