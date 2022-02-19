import React from 'react';
import './App.css';
import './styles/sb-admin-2.min.css';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import { Login } from './pages/Account';
import { Admin } from './pages/Admin/Users/Admin';
import { PrivateRoute } from './components';
import { AccountRoute } from './components/AccountRoute';


function App() {
  return (
    <div id="wrapper" className='App'>
      <Router>
        <Switch>
          <AccountRoute path='/login'>
            <Login />
          </AccountRoute>
          <PrivateRoute path='/'>
            <Admin />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
