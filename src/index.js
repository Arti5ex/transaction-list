import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store';
import Main from './components/main';
import Login from './components/login';
import CreateTransaction from './components/createTransaction';
import './stylesheets/style.scss'

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