import styled from 'styled-components';

export const Container = styled.div`
  background: white;
  height: 100vh;
  width: 100vw;
  overflow-y: auto;
  display: grid;
  grid-gap: 20px;
  grid-template-rows: 50px 1fr;
`;

export const Content = styled.div`
  position: relative;
  word-break: break-all;  
  background: #f4f7fc;
  overflow-y: auto;
  overflow-x: auto;
`;
