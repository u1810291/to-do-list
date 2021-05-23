import styled from 'styled-components';

export const ErrorContainer = styled.div`
  height: 600px;
  width: 100%;
  display: grid;
  place-items: center;
  & div {
    text-align: center;
  }
  & span {
    display: block;
    font-size: 2rem;
  }
`;
