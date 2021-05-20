import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Header,
  TitleContainer,
  Image
} from './style';
import Logo from '../../../assets/icons/logo512.jpg';

const SidebarHeader = () => {
  const history = useHistory();
  const tabletDesktop = (
    <Header>
      <TitleContainer>
        <Image
          src={Logo}
          className="pointer"
          onClick={() => history.push('/list')}
          alt="Logo"
        />
      </TitleContainer>
    </Header>
  );
  return tabletDesktop;
};

export default SidebarHeader;
