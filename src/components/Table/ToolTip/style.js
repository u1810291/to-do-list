import styled, { css } from 'styled-components';

const isVisible = css`
  opacity: ${({ index, TIndex, open }) => ((index === TIndex && open) ? 1 : 0)};
  transform: scale(${({ index, TIndex, open }) => ((index === TIndex && open) ? 1 : 0)});
`;

export const ToolTip = styled.div`
  width: 162px;
  background: white;
  position: absolute;
  left: -70px;
  z-index: 3;
  transition: 0.2s;
  border-radius: 8px;
  box-shadow: 2px 2px 31px -14px rgba(0,0,0,0.38);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 11px 0;
  ${isVisible};
  cursor: pointer;
  &:before {
    content: '';
    background: white;
    width: 18px;
    height: 18px;
    position: absolute;
    top: 14px;
    right: -4px;
    transform: rotate(45deg);
  }
`;

export const ToolTipContainer = styled.div`
  position:relative;
  display: flex;
  height: 70px;
  align-items: center;
  justify-content: flex-end;
`;
