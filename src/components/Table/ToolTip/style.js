import styled, { css } from 'styled-components';

const isVisible = css`
  display: ${({ index, indexT, open }) => ((index === indexT && open) ? '' : 'none')};
`;

export const ToolTip = styled.div`
  width: 162px;
  /* min-height: 148.6px; */
  background: white;
  position: absolute;
  top: 0;
  left: -125px;
  z-index: 3;
  transition: 0.2s display;
  border-radius: 8px;
  box-shadow: 2px 2px 31px -14px rgba(0,0,0,0.38);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 11px 0;
  ${isVisible};
  &:before {
    content: '';
    background: white;
    width: 18px;
    height: 18px;
    position: absolute;
    top: 22px;
    right: -4px;
    transform: rotate(45deg);
  }
`;

export const Button = styled.button`
  background: transparent;
  border: none;
  padding: 5px;
  cursor: pointer;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 16px;
  left: 40px;
  &:focus {
    outline: none;
  }
`;

export const OptionButton = styled.button`
  width: 100%;
  height: 25px;
  border: none;
  background: white;
  box-sizing: border-box;
  z-index: 2;
  padding: 0 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: #F8F8F8;
  }
  &:focus {
    outline: none;
  }
`;
