import React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './containers/Login';
import ChatHome from './containers/ChatHome';

import 'antd/dist/antd.css';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ChatHome} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>  );
}

export default hot(App);
