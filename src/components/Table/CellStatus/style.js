import styled from 'styled-components';

export const Container = styled.div`
  padding: 8px 12px;
  width: 110px;
  background: ${({ color }) => (color ? `${color.bg}` : '#FFF4DE')};
  color: ${({ color }) => (color ? `${color.text}` : '#FFA800')};
  border-radius: 4px;
  word-break: break-all;
  overflow: auto;
  text-align: center;
  border: none;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  width: 270px;
  left: 0px;
  top: 60px; 
  border-radius: 8px;
  position: absolute;
  background: white;
  z-index: 1;
`;

export const Body = styled.div`
  position: relative;
  padding: 25px;
`;

export const Header = styled.div`
  height: 55px;
  padding: 0 25px;
  display: flex;
  align-items: center;
  border-bottom: 2px solid #ebebf3;
`;
