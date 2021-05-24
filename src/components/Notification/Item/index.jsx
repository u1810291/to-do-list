import React from 'react';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import {
  Container, Wrapper, CloseButton, Time, Caption, Ok, Cross, Icon
} from './style';
import { closeNotify } from '../../../redux/modules/notifications/actions';

const classname = classNames('border-primary', 'white-900', 'shadow-primary-3');
const caption = classNames('button-large', 'text-white-900', 'weight-regular');

const Item = ({
  id, message, icon
}) => {
  const dispatch = useDispatch();
  return (
    <Container className={classname} icon={icon}>
      <Icon>
        {icon === 'ok'
          ? <Ok />
          : <Cross />}
      </Icon>
      <Wrapper>
        <div>
          <CloseButton onClick={() => dispatch(closeNotify(id))}>
            {icon === 'ok'
              ? <Ok />
              : <Cross />}
          </CloseButton>
        </div>
        <Caption className={caption}>{message}</Caption>
        <Time className={caption}>{moment(new Date()).format('HH:mm:ss')}</Time>
      </Wrapper>
    </Container>
  );
};

export default Item;
