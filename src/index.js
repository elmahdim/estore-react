import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import Catalog from './components/catalog/Catalog';
import Cart from './components/cart/Cart';
import Checkout from './components/checkout/Checkout.js';

ReactDOM.render(
  <Router history={browserHistory } queryKey={false}>
    <Route path='/' component={Catalog}></Route>
    <Route path='/cart' component={Cart}></Route>
    <Route path='/checkout' component={Checkout}></Route>
  </Router>,
  document.getElementById('root')
);
