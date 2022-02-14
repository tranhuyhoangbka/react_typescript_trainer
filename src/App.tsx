import React from 'react';
import './App.css';
import './styles/sb-admin-2.min.css';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import { Login } from './pages/Account';
import { Admin } from './pages/Admin/Admin';
import { PrivateRoute } from './components';


function App() {
  return (
    <div id="wrapper" className='App'>
      <Router>
        <Switch>
          <PrivateRoute>
            <Admin />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
