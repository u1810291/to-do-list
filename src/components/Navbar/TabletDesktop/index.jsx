import React, { useRef, useState } from 'react';

import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
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

export default () => {
  const clickRef = useRef(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const handleOnClick = (type) => {
    switch (type) {
    case 'profile':
      setIsOpen(false);
      history.push('/tasks');
      break;
    case 'logout':
      setIsOpen(false);
      dispatch(logout());
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
                <Item onClick={() => handleOnClick('profile')}>
                  <Text className={classNames('caption', 'weight-semibold', 'text-black-800')}>Tasks</Text>
                </Item>
                <Item onClick={() => handleOnClick('logout')}>
                  <Text className={classNames('caption', 'weight-semibold', 'text-black-800')}>Log out</Text>
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
