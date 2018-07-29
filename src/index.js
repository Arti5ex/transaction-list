import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import store from 'src/store';
import Main from 'src/components/main';
import Login from 'src/components/login';
import CreateTransaction from 'src/components/createTransaction';
import 'src/stylesheets/style.scss'

render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={Main}/>
        <Route path="/create-transaction/" component={CreateTransaction}/>
        <Route path="/login/" component={Login}/>
      </div>
    </Router>
  </Provider>, 
  document.getElementById('root')
);