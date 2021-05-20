/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import {
  Container, Space, Text
} from './style';
import Item from '../Item';
import childRoutes from '../../../routes/main-routes';

export default () => (
  <Container>
    <Space>
      <Text>Menu</Text>
    </Space>
    {childRoutes
      ? childRoutes.map(
        ({
          title, icon, path, children, except
        }, index) => ((!except) ? (
          <Item
            key={`${index + 1}`}
            title={title}
            icon={icon}
            path={path}
            elements={children}
          />
        ) : null)
      ) : ''}
  </Container>
);
