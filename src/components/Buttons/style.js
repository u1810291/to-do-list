import { css } from 'styled-components';

export const getFontSize = ({ size }) => {
  switch (size) {
  case ('large' || 'Large'): return '14px';
  case ('medium' || 'Medium'): return '13px';
  case ('small' || 'Small'): return '12px';
  default: return '13px';
  }
};

export const getHovered = ({ hover }) => {
  switch (hover) {
  case 'linked' || 'Linked':
    return 'white';
  default:
    return 'white';
  }
};

export const getHeight = ({ size }) => {
  switch (size) {
  case 'large' || 'Large':
    return '50px';
  case 'medium' || 'Medium':
    return '46px';
  case 'small' || 'Small':
    return '39px';
  default:
    return '39px';
  }
};

export const getPadding = ({ size }) => {
  switch (size) {
  case 'large' || 'Large':
    return '0 22px';
  case 'medium' || 'Medium':
    return '0 12px';
  case 'small' || 'Small':
    return '0 18px';
  default:
    return '0 18px';
  }
};

export const getBorderRadius = ({ size }) => {
  switch (size) {
  case 'small' || 'Small':
    return '11111px';
  case 'medium' || 'Medium':
    return '8px';
  case 'large' || 'Large':
    return '15px';
  default:
    return '15px';
  }
};

export const buttons = css`
  border: none;
  border-radius: ${getBorderRadius};
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ block }) => block && '100%'};
  padding: ${getPadding};
  height: ${getHeight};
`;

export const fonts = css`
  font-size: ${getFontSize};
`;

export const dropdown = css`
  padding: ${getPadding};
`;
