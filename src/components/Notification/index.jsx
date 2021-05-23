/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useSelector } from 'react-redux';
import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group';
import Item from './Item';
import { Container } from './style';

const Notifications = () => {
  const { items } = useSelector((state) => state.notificationsReducer);
  return (
    <Container>
      <TransitionGroup className="notification-list">
        {
          items.map((item) => (
            <CSSTransition
              key={item.id}
              timeout={250}
              classNames="notification-item"
            >
              <Item {...item} />
            </CSSTransition>
          ))
        }
      </TransitionGroup>
    </Container>
  );
};

export default Notifications;
