import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../components/login/Login';
import ResetPassword from '../components/login/Reset-password';

const UserSignIn = ({match}) => {
  return (
    <div>
      <Switch>
        <Route exact path={`${match.path}`} component={Login} />
        <Route path={`${match.path}/reset-password`} component={ResetPassword} />
      </Switch>
    </div>
  );
}


export default UserSignIn;
