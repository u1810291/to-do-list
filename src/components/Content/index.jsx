/* eslint-disable no-nested-ternary */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { Container, Content } from './style';
import childRoutes from '../../routes/main-routes';
import Navbar from '../Navbar';

// eslint-disable-next-line max-len
// const matchedPath = window.location.pathname.split('/')[window.location.pathname.split('/').length - 1];
export default () => (
  <Container>
    <Navbar />
    <Content>
      {childRoutes
        ? childRoutes.map(({
          path, component, children, props
        }, index) => (children.length ? (
          <div key={`${index + 1}`}>
            {children.map((child, childIndex) => (
              <Route
                key={`${childIndex + 1}`}
                exact={child.exact}
                path={`${path}${child.path}${child.params || ''}`}
                component={child.component}
                props={props}
              />
            ))}
            {children.filter(({ hidden }) => !hidden).length ? (
              <Route exact path={path}>
                <Redirect to={`${path}${children[0].path}`} />
              </Route>
            ) : (
              <Route exact key={`${index + 1}`} path={path} component={component} />
            )}
          </div>
        ) : (
          <Route key={`${index + 1}`} path={path} component={component} />
        ))) : ''}
      {childRoutes && !childRoutes.find((el) => el.path === `/${window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]}`)
        ? <Redirect from="*" to="/tasks" /> : ''}
    </Content>
  </Container>
);
