import styled, { css, keyframes } from 'styled-components';
import {
  getType, label, helperText, getBorderRadius, getIconSize
} from '../style';

const transition = keyframes`    
  transition: all 0.2s;
  touch-action: manipulation;
`;

const search = css`
  background-color: white;
  &:focus {
    /* outline: none !important;
    border: none !important; */
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  padding-left: 5px;
  padding-right: 5px;
  svg {
    height: ${getIconSize};
    width: ${getIconSize};
  }
`;

export const Input = styled.input`
  ${getType};
  border-radius: ${getBorderRadius};
  outline: none !important;
  text-indent: 15px;
  width:100%;
  ${({ search: isSearch }) => isSearch && search} ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Label = styled.label`
  ${label}
  animation: ${transition} all 0.2s;
  pointer-events: none;
  left: 20px;
  top: 18px;
  transition: 0.2s ease all;
  color: #262626;
`;

export const Container = styled.div`
  min-width: 100%;
  display: flex;
  position: relative;
  align-items: center;
`;
export const Helper = styled.div`
  ${helperText}
`;
