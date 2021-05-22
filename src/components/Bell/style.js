import styled from 'styled-components';

export const Container = styled.div`
  height: 28px;
  position: relative;
  margin: ${({ margin }) => margin};
`;

export const Bell = styled.div`
  width: 14px;
  height: 14px;
  position: absolute;
  border: 1px solid white;
  top: -3px;
  left: 11px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
