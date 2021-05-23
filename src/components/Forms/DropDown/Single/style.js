import styled from 'styled-components';
import { dropdown } from '../style';

export const Container = styled.div`
  display: flex;
  flex-direction:${({ end }) => (end ? 'column-reverse' : 'column')};
  width: 200px;

`;

export const Selection = styled.div`
  ${dropdown}
  display: flex;
  border-radius: 8px;
  background: #e2ebf9 !important;
  &:hover{
    background: #bdd3f5 !important;
  }
  cursor: pointer;
  overflow: hidden;
  box-sizing: border-box;
  width: 100%;
`;

Selection.Text = styled.div`
  letter-spacing: 0.01em;
  line-height: 24px;
  text-align: left;
  color: ${({ color }) => (color || '#0062FF')};
  `;
Selection.Icon = styled.div`
  margin-left: auto;
  svg{
    path{

      fill: #0062FF !important;
    }
  }

`;

export const Menu = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: ${({ width }) => `${width}px`};
  height: fit-content;
  border-radius: 8px;
  background: #fff;
  overflow: hidden;
  box-shadow: 0px 25px 50px rgba(0, 0, 0, 0.1);
  margin-bottom: ${({ end }) => (end ? '45px' : '0')};
  margin-top: ${({ end }) => (end ? '0' : '45px')};
  z-index: 10;
`;

Menu.Item = styled.input`
  box-sizing: border-box;
  width: ${({ width }) => `${width}px`};
  padding: 13px 24px;
  cursor: pointer;
  outline: none;
  border: none;
  color: ${({ active }) => (active ? '#262626' : '#9D9D9D')};
  background:${({ active }) => (active ? '#F5F5F5' : 'inherit')};
  :hover{
    background:#F5F5F5;
  }

`;

Menu.SubItem = styled.input`
  box-sizing: border-box;
  width: ${({ width }) => `${width}px`};
  padding: 13px 24px;
  cursor: pointer;
  outline: none;
  border: none;
  padding-left: 45px;

  font-family: Poppins;
  font-weight: normal;
  font-size: 14px;
  letter-spacing: 0.01em;
  line-height: 24px;
  color: ${({ active }) => (active ? '#262626' : '#9D9D9D')};

  overflow: hidden;
  background:${({ active }) => (active ? '#F5F5F5' : 'inherit')};
  :hover{
    background:#F5F5F5;
  }

`;
