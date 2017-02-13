import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Home from './components/Home';
import Main from './components/Main';
import Browse from './components/Browse/index';
import Profile from './components/Profile';
import Login from './components/Login';

const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Home} />
        <Route path="browse" component={Browse} />
        <Route path="profile" component={Profile} />
        <Route path="login" component={Login} />
      </Route>
    </Router>
  );
};

export default Routes;
