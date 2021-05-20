import styled from 'styled-components';

export const SubElements = styled.div`
  transition: max-height 0.3s;
  max-height: ${({ expand }) => (expand ? '20em' : 0)};
  overflow: hidden;
`;

export const SubElement = styled.div`
  color: #3a76d8;
  height: 52px;
  display: flex;
  align-items: center;
  padding-left: 48px;
  cursor: pointer;
  color: ${({ active }) => (active ? '#115bd4' : '#3a76d8')};
  background: ${({ active }) => (active ? 'var(--sidebar-item-active)' : 'white')};
`;

export const Container = styled.div`
  top: 0 var(--sidebar-padding-x);
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 52px;
  background: ${({hovered, active})=>(hovered || active) ? '#78a4ed' : 'white'} ;
`;

export const Title = styled.span`
  font-size: 13px;
  font-weight: 550;
  opacity: ${({ collapsed }) => (collapsed ? '0' : '1')};
  display: inline-block;
  min-width: 100%;
  transition: 0.1s;
  color: ${({ active, hovered }) => (active || hovered ? '#115bd4' : '#3a76d8')};
`;

export const IconContainer = styled.div`
  display: "flex";
  padding-left: 38px;
  padding-right: 14px;
  svg {
    background: ${({ active }) => (active ? '#115bd4' : '#3a76d8')};
    border-radius: 6px;
  }
`;
