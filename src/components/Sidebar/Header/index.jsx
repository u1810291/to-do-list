/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Header,
  TitleContainer,
} from './style';
import Logo from '../../../assets/icons/logo512.png';

const SidebarHeader = () => {
  const history = useHistory();
  const tabletDesktop = (
    <Header>
      <TitleContainer>
        <img src={Logo} className="pointer" onClick={() => { history.push('/list'); }} />
      </TitleContainer>
    </Header>
  );
  return tabletDesktop
};


export default SidebarHeader;
