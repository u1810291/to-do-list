import React from 'react';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import {
  Container, Wrapper, CloseButton, Time, Caption
} from './style';
import Icon from '../../Icon';
import { closeNotify } from '../../../redux/modules/notifications/actions';

const classname = classNames('border-primary', 'white-900', 'shadow-primary-3');
const caption = classNames('button-large', 'text-white-900', 'weight-regular');

export default ({
  id, message, icon
}) => {
  const dispatch = useDispatch();
  return (
    <Container className={classname} icon={icon}>
      <div>
        <Icon icon={icon} size="26px" color="#FFFFFF" />
      </div>
      <Wrapper>
        <div>
          <CloseButton onClick={() => dispatch(closeNotify(id))}>
            <Icon icon="cross" size="10px" color="#FFFFFF" />
          </CloseButton>
        </div>
        <Caption className={caption}>{message}</Caption>
        <Time className={caption}>{moment(new Date()).format('LT')}</Time>
      </Wrapper>
    </Container>
  );
};
