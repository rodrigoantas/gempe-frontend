import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';


import Route from './Route'

import { AuthProvider } from '../contexts/AuthContext'
import { CellProvider } from '../contexts/CellContext'

import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import About from '../pages/About';



const Routes: React.FC = () => (
  <AuthProvider>
    <CellProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/dashboard" component={Dashboard} isPrivate />
          <Route exact path="/About" component={About} isPrivate />
        </Switch>
      </Router>
    </CellProvider>
  </AuthProvider>
  
  
);

export default Routes;
