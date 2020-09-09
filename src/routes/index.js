import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Login'
import Dashboard from './Dashboard'

const Routes = () => {
  return (
    <BrowserRouter>
      <div>
          <Switch>
            <Route exact path="/" render={Login}/>
            <Route exact path="/dashboard" render={Dashboard}/>
          </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Routes;
