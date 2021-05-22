import styled, { css } from 'styled-components';
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg';

const sharedContainer = css`
  height: var(--navbar-height);
  width: 100%;
  background: white;
  border-bottom: 1px solid #ebebf3;
  display: flex;
  align-items: center;
  z-index: 5;
`;

export const Container = styled.div`
  ${sharedContainer};
  justify-content: flex-end;
`;

export const MContainer = styled.div`
  ${sharedContainer};
  justify-content: space-between;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  padding-top:10px;
`;

export const Image = styled.div`
  width: 35px;
  height: 35px;
  margin-left: 10px;
  margin-right: 10px;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  border-radius: 50%;
  &:hover {
    cursor: pointer;
  }
`;

export const Title = styled.span`
  font-weight: 500;
  font-size: 13px;
  color: ${({ primary }) => (primary ? '#7E8299' : '#B5B5C3')};
`;

export const MenuButton = styled(MenuIcon)`
  margin-right: 10px;
  cursor: pointer;
`;
