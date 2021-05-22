import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { Container } from './style';
import SignIn from '../../views/Auth/SignIn';
import Home from '../Home';

export default () => {
  const { token } = useSelector((state) => state.authReducer);
  console.log(token);
  const publicRoutes = (
    <Container>
      <Switch>
        <Route exact path="/signin" component={SignIn} />
        <Redirect from="*" to="/signin" />
      </Switch>
    </Container>
  );

  const protectedRoutes = (
    <Container>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Container>
  );

  return !token ? publicRoutes : protectedRoutes;
};
