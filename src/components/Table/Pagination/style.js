import styled from 'styled-components';

import { ReactComponent as Right } from '../../../assets/icons/next.svg';
import { ReactComponent as Left } from '../../../assets/icons/prev.svg';

export const IconLeft = styled(Right)`
  svg{
    path{
      fill: ${({ color }) => color && color}
    }
  }
  `;
export const IconRight = styled(Left)`
  svg{
    path{
      fill: ${({ color }) => color && color}
    }
  }
`;

export const Container = styled.div`
  display: flex;
  margin-top: 16px;
  justify-content: flex-end;
  gap: 13px;
  max-width: 100%;
`;

export const PageButtons = styled.div`
  background-color: white;
  border-radius: 8px;
  max-width: 300px;
  height: 43px;
  display: flex;
  overflow: hidden;
`;

export const Button = styled.button`
  border: none;
  border-radius: 0;
  background: white;
  color: black;
  min-width: 50px;
  cursor: pointer;
  &:hover {
    background: ${({ active }) => !active && '#f5f5f5'};
  }
  &:focus {
    outline: none;
  }
  ${({ active }) => active
    && `
    background: #e2ebf9 ;
    color: #0062FF;
  `}
`;

export const ChangeButtons = styled.div`
  width: 50px;
  height: 43px;
  
  border-radius: 8px;
  background-color: white;
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;
`;

export const ChangeButton = styled.button`
  border: none;
  cursor: pointer;
  background: #e2ebf9 !important;
  &:hover{
    background: #bdd3f5 !important;
  }
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
