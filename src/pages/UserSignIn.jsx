import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginContainer from '../components/login/Login-container';
import ResetPassword from '../components/login/Reset-password';

const UserSignIn = ({match}) => {
  return (
    <div>
      <Switch>
        <Route exact path={`${match.path}`} component={LoginContainer} />
        <Route path={`${match.path}/reset-password`} component={ResetPassword} />
      </Switch>
    </div>
  );
}


export default UserSignIn;
