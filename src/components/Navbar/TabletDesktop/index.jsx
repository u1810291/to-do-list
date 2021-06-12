import React, { useRef, useState } from 'react';

import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import {
  Container,
  UserInfoContainer,
  PopupContainer,
  DropdownContainer,
  Item,
  Text,
  TextContainer,
  ImageWrapper
} from './style';
import { Content } from '../style';
import { logout } from '../../../redux/modules/auth/actions';
import { ClickOutside } from '../../../hooks/click-outside';
import { DynamicImage } from '../../DynamicImage';
import { useShowModal } from '../../../hooks/modal';
import SignIn from '../../../views/Auth/SignIn';

export default () => {
  const { showFullScreen } = useShowModal();
  const clickRef = useRef(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const token = localStorage.getItem('token');
  const handleOnClick = (type) => {
    switch (type) {
    case 'tasks':
      setIsOpen(false);
      history.go('/tasks');
      break;
    case 'logout':
      setIsOpen(false);
      dispatch(logout());
      history.go('/signin');
      break;
    case 'login':
      setIsOpen(false);
      showFullScreen({
        title: 'Sign In',
        body: SignIn
      });
      break;
    default:
      break;
    }
  };
  return (
    <Container>
      <div />
      <Content>
        <PopupContainer>
          <UserInfoContainer>
            <ImageWrapper
              style={{ cursor: 'pointer' }}
              ref={clickRef}
              onClick={() => setIsOpen((prevState) => !prevState)}
            >
              <DynamicImage
                imgSrc=""
                name="Some name"
              />
            </ImageWrapper>
            <ClickOutside
              outClickRef={clickRef}
              outsideClicked={() => {
                setIsOpen(false);
              }}
            >
              <DropdownContainer isOpen={isOpen}>
                <Item onClick={() => handleOnClick('tasks')}>
                  <Text className={classNames('caption', 'weight-semibold', 'text-black-800')}>Tasks</Text>
                </Item>
                <Item onClick={() => (token ? handleOnClick('logout') : handleOnClick('login'))}>
                  <Text className={classNames('caption', 'weight-semibold', 'text-black-800')}>{token ? 'Log out' : 'Log in'}</Text>
                </Item>
              </DropdownContainer>
            </ClickOutside>
            <TextContainer>
              <TextContainer.Name>Some</TextContainer.Name>
              <TextContainer.Email>Name</TextContainer.Email>
            </TextContainer>
          </UserInfoContainer>

        </PopupContainer>
      </Content>
    </Container>
  );
};
