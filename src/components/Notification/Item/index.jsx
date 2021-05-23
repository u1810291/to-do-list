import React from 'react';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import {
  Container, Wrapper, CloseButton, Time, Caption
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
      <div>
        {icon}
      </div>
      <Wrapper>
        <div>
          <CloseButton onClick={() => dispatch(closeNotify(id))}>
            {icon}
          </CloseButton>
        </div>
        <Caption className={caption}>{message}</Caption>
        <Time className={caption}>{moment(new Date()).format('LT')}</Time>
      </Wrapper>
    </Container>
  );
};

export default Item;
