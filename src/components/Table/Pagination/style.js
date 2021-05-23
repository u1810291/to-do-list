import styled from 'styled-components';
import { device } from '../../../utils/responsive';

export const Container = styled.div`
  display: flex;
  margin-top: 16px;
  justify-content: flex-end;
  grid-gap: 13px;
  @media ${device.mobile} {
    padding: 16px;
  }
`;

export const PageButtons = styled.div`
  background-color: white;
  border-radius: 8px;
  max-width: 300px;
  height: 43px;
  display: grid;
  overflow: hidden;
  grid-template-columns: ${({ repeat }) => (repeat ? `repeat(${repeat}, 1fr)` : 'repeat(7, 1fr)')};
`;

export const Button = styled.button`
  border: none;
  border-radius: 0;
  background: white;
  color: black;
  min-width: calc(300px / 7);
  cursor: pointer;
  &:hover {
    background: ${({ active }) => !active && '#f5f5f5'};
  }
  &:focus {
    outline: none;
  }
  ${({ active }) => active
    && `
    background: #FFE9ED;
    color: #F24142;
  `}
`;

export const ChangeButtons = styled.div`
  width: 90px;
  height: 43px;
  border-radius: 8px;
  background-color: white;
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;
`;

export const ChangeButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:not(:disabled):hover {
    background: #f5f5f5;
  }
  &:disabled {
    background: #f5f5f5;
  }
`;
