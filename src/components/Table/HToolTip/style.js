import styled, { css } from 'styled-components';

const isVisible = css`
  opacity: ${({ open }) => (open ? 1 : 0)};
  transform: scale(${({ open }) => (open ? 1 : 0)});
`;

export const Container = styled.div`
  position: absolute;
  width: 153px;
  background: white;
  top: 46px;
  left: 18px;
  border-radius: 8px;
  box-sizing: border-box;
  box-shadow: 2px 2px 31px -14px rgba(0, 0, 0, 0.38);
  padding: 12px 0;
  z-index: 4;
  transition: 0.2s display;
  ${isVisible};
  &:before {
    content: '';
    width: 18px;
    height: 18px;
    position: absolute;
    background: white;
    top: -8px;
    left: 50px;
    transform: rotate(45deg);
  }
`;
