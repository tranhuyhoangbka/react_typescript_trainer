import React from 'react';
import { useSelector } from 'react-redux';
import {Route, RouteProps, Redirect} from 'react-router-dom';
import { Login } from '../pages/Account';
import { AppState } from '../store';
import { AccountState } from '../store/account/types';

export const AccountRoute = ({children, ...rest}: RouteProps): JSX.Element => {
  const account: AccountState = useSelector((state: AppState) => state.account);
  return (    
    <Route {...rest} render={()=>(account.token ? <Redirect to={{pathname: '/admin/home'}} /> : <Login />)}></Route>
  )
}
