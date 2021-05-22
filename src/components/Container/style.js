import styled, { css } from 'styled-components';

const common = css`
  width: 100%;
  height: 100vh;
  display: grid;
  word-break: break-all;
`;

const tabletDesktop = css`
  ${common};
  grid-template-areas: "content";
  grid-template-columns: 1fr;
`;

export const Container = styled.div`
  ${tabletDesktop};
`;
