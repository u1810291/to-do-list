import styled, { css } from 'styled-components';

const common = css`
  width: 100%;
  height: 100vh;
  display: grid;
  word-break: break-all;
`;

const tabletDesktop = css`
  ${common};
  grid-template-areas: "sidebar content";
  grid-template-columns: auto 1fr;
`;

export const Container = styled.div`
  ${tabletDesktop};
`;
