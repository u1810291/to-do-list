import styled from 'styled-components';
import { buttons } from '../style';

export const Title = styled.span`
  color: white;
`;

export const Container = styled.button`
  ${buttons};
  background: ${({ color }) => (color || '#0062FF')};
  cursor: pointer;
  svg {
    path {
      fill: #ffffff !important;
    }
  }
  &:focus {
    outline: none;
  }
  &:not(:disabled):focus {
  }
  &:not(:disabled):hover svg {
    path {
      fill: white !important;
    }
  }
  &:not(:disabled):hover {
    opacity: 0.9;
  }
  &:not(:disabled):active {
    opacity: 0.9;
  }
  &:disabled {
    background: #f5f5f5;
  }
  &:disabled ${Title} {
    color: #c4c4c4;
  }
  &:disabled svg {
    path {
      fill: #c4c4c4 !important;
    }
  }
`;
