import React, { useRef, useState } from 'react';

import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  Container,
  UserInfoContainer,
  PopupContainer,
  DropdownContainer,
  Item,
  Text,
  Header,
  ButtonContainer,
  BellContainer,
  TextContainer,
  ImageWrapper
} from './style';
import { Content } from '../style';
import Bell from '../../Bell';
import { logout } from '../../../redux/modules/auth/actions';
import { ClickOutside } from '../../../hooks/click-outside';
import Dropdown from '../../Forms/Dropdowns';
import { language } from './options';
import PrimaryButton from '../../Buttons/Primary';
import { DynamicImage } from '../../DynamicImage';

export default () => {
  const clickRef = useRef(null);

  const [commonDropdown, setCommonDropdown] = useState(undefined);
  const dispatch = useDispatch();
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const { userInfo } = useSelector((state) => state.userReducer);
  const handleOnClick = (type) => {
    switch (type) {
    case 'profile':
      setIsOpen(false);
      history.push('/profile');
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
      <Header>
        <SearchableInput placeholder="Search here..." size="small" />
      </Header>
      <Content>
        <ButtonContainer>
          <PrimaryButton
            block="block"
            title="Technical support"
            size="small"
            color="#E8523F"
            icon="support"
          />
        </ButtonContainer>
        <ButtonContainer>
          <PrimaryButton block="block" title="Chat" size="small" color="#333366" icon="chat" />
        </ButtonContainer>
        <BellContainer>
          <Bell Component={<Icon icon="notification_on" />} margin="0 18px" value="1" />
        </BellContainer>
        <PopupContainer>
          <UserInfoContainer>
            <ImageWrapper
              style={{ cursor: 'pointer' }}
              ref={clickRef}
              onClick={() => setIsOpen((prevState) => !prevState)}
            >
              <DynamicImage
                imgSrc=""
                name={`${userInfo.username}`}
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
                  <Text className={classNames('caption', 'weight-semibold', 'text-black-800')}>Profile</Text>
                </Item>
                <Item onClick={() => handleOnClick('logout')}>
                  <Text className={classNames('caption', 'weight-semibold', 'text-black-800')}>Log out</Text>
                </Item>
              </DropdownContainer>
            </ClickOutside>
            <TextContainer>
              <TextContainer.Name>{userInfo.username}</TextContainer.Name>
              <TextContainer.Email>{userInfo.email}</TextContainer.Email>
            </TextContainer>
            <Dropdown
              placeholder="RU"
              options={language}
              value={commonDropdown}
              onChange={setCommonDropdown}
              size="medium"
            />
          </UserInfoContainer>

        </PopupContainer>
      </Content>
    </Container>
  );
};
