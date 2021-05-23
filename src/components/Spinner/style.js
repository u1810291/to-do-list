import styled, { css } from 'styled-components';
import { ReactComponent as SpinnerIcon } from '../../assets/icons/spinner.svg';
import { ReactComponent as SpinnerBlackIcon } from '../../assets/icons/spinner-black.svg';

const fullScreen = css`
  position: fixed;
  width: 100vw;
  height: 100vh;
`;

const inParent = css`
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const Container = styled.div`
  top: 0;
  left: 0;
  display: grid;
  place-items: center;
  z-index: 10;
  background: unset;
  position: relative;
  box-sizing: border-box;
  ${({ contain }) => (contain ? inParent : fullScreen)}
`;

export const Spinner = styled(SpinnerIcon)`
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;

export const SpinnerBlack = styled(SpinnerBlackIcon)`
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
