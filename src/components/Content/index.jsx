/* eslint-disable no-nested-ternary */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { Container, Content } from './style';
import childRoutes from '../../routes/main-routes';
import Navbar from '../Navbar';

export default () => {
  const path = window.location.pathname.split('/');
  return (
    <Container>
      <Navbar />
      <Content>
        {childRoutes
          ? childRoutes.map(({
            path, component
          }, index) => <Route key={`${index + 1}`} path={path} component={component} />) : ''}
        {childRoutes && !childRoutes.find((el) => el.path === `/${path[path.length - 1]}`)
          ? <Redirect from="*" to="/tasks" /> : ''}
      </Content>
    </Container>
  );
};
