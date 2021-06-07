import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Container } from './style';
import Home from '../Home';

export default () => {
  const publicRoutes = (
    <Container>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Container>
  );
  return publicRoutes;
};
