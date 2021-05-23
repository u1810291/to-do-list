import styled from 'styled-components';
import { ReactComponent as IconClose } from '../../../assets/icons/close.svg';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: ${({ show }) => (show ? 'flex' : 'none')};
  background: rgba(0, 0, 0, 0.4);
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  overflow: hidden;
  z-index: 10;
`;

export const Content = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: black;
  margin-left: 0.8rem;
  margin-right: 0.8rem;
  box-shadow: -4px 1px 22px -6px rgba(0, 0, 0, 0.36);
  overflow: ${({ overflow }) => (overflow ? 'unset' : 'hidden')};
  max-width: ${({ maxWidth }) => maxWidth || 'unset'};
  width: ${(props) => (props.maxWidth ? '-webkit-fill-available' : 'unset')};
`;

export const Header = styled.div`
  height: 55px;
  border-radius: 8px 8px 0px 0px;
  background: white;
  display: flex;
  border-bottom: 1px solid #ebebf3;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
`;

export const Title = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

export const CloseButton = styled.button`
  padding: 0;
  margin: 0;
  width: 32px;
  height: 32px;
  display: grid;
  place-items: center;
  border: none;
  overflow: hidden;
  border-radius: 4px;
  background: transparent;
  cursor: pointer;
  transition: 0.5s;
  &:focus {
    outline: none;
    background: #f8f8f8;
  }
  &:hover {
    background: #f8f8f8;
  }
`;

export const Body = styled.div`
  position: relative;
  max-height: 600px;
  overflow: ${({ overflow }) => (overflow || 'hidden scroll')};
  &::-webkit-scrollbar-track {
    margin-bottom: 10px;
  }
`;

export const CloseIcon = styled(IconClose)``;
