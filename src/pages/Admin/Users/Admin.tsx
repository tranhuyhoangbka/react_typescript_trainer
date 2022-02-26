import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {LeftMenu} from '../LeftMenu/LeftMenu';
import { TopBar } from '../TopBar/TopBar';
import { getCurrentLoginUser } from '../../../store/account/actions';
import { Home } from '../Home/Home';
import { Users } from './Users';
import { Switch, useRouteMatch } from 'react-router';
import { Route } from 'react-router-dom';
import { AddUser } from './AddUser';
import { AppState } from '../../../store';
import { EditUser } from './EditUser';

export const Admin = () => {
   console.log('ok');
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getCurrentLoginUser());
  // }, [dispatch])

  let match = useRouteMatch();

  const alert = useSelector((state: AppState) => state.alert);

  return (
    <Fragment>
      <LeftMenu />
      {/* Content Wrapper */}
      <div id="content-wrapper" className="d-flex flex-column">
        {/* Main Content */}
        <div id="content">
          <TopBar />
          {/* Begin Page Content */}
          <div className="container-fluid">
            {alert.message && (
              <div className={`alert ${alert.type}`}>{alert.message}</div>
            )}
           <Switch>
              <Route path="/users">
                <Users />
              </Route>
              <Route path="/user-add">
                <AddUser />
              </Route>
              <Route path="/user-edit/:id">
                <EditUser />
              </Route>
              <Route path="/">
                <Home />
              </Route>
           </Switch>
          </div>
          {/* /.container-fluid */}
        </div>
        {/* End of Main Content */}
        {/* Footer */}
        <footer className="sticky-footer bg-white">
          <div className="container my-auto">
            <div className="copyright text-center my-auto">
              <span>Copyright © Your Website 2021</span>
            </div>
          </div>
        </footer>
        {/* End of Footer */}
      </div>
      {/* End of Content Wrapper */}
    </Fragment>
  )
}
