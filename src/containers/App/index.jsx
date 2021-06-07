import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Container } from './style';
import SignIn from '../../views/Auth/SignIn';
import Home from '../Home';

export default () => {
  const publicRoutes = (
    <Container>
      <Switch>
        <Route path="/" component={Home} />
        <Route exact path="/signin" component={SignIn} />
      </Switch>
    </Container>
  );
  return publicRoutes;
};
