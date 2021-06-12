import styled from 'styled-components';
import { ReactComponent as BackIcon } from '../../../assets/icons/back-arrow.svg';

export const Container = styled.div`
  background: white;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 12;
  display: grid;
  grid-template-areas: 'header' 'content';
  grid-template-rows: var(--fullpage-modal-header-height) auto;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  justify-content: flex-start;
  padding: 0 50px;
  background: white;
  grid-area: header;
`;

Header.Title = styled.span`
  font-size: 16px;
  font-weight: var(--font-regular);
  margin-left: 35px;
`;

export const Backbutton = styled(BackIcon)`
  cursor: pointer;
`;

export const Content = styled.div`
  background: white;
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  grid-area: content;
  display: flex;
  justify-content: center;
  padding: 48px;
`;
