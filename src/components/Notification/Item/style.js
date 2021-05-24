import styled from 'styled-components';
import { ReactComponent as OkIcon } from '../../../assets/icons/ok.svg';
import { ReactComponent as CrossIcon } from '../../../assets/icons/cross.svg';

export const Ok = styled(OkIcon)`
  height: 100%;
  width: 100%;
`;
export const Cross = styled(CrossIcon)`
  height: 100%;
  width: 100%;
`;

export const Icon = styled.div`
  height: 40px;
  width: 40px;
`;

export const Container = styled.div`
  min-height: 75px;
  margin-bottom: 12px;
  border-radius: 8px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  background: ${({ icon }) => (icon === 'cross' ? '#F94144' : '#2eab26')};
`;

export const Wrapper = styled.div`
  display: flex;
  margin-left: 15px;
  width: calc(100% - 45px - 30px);
  flex-direction: column;
`;

export const CloseButton = styled.button`
  border: none;
  background: transparent;
  position: absolute;
  top: 5px;
  right: 15px;
  height: 35px;
  width: 35px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

export const Time = styled.span`
  position: absolute;
  bottom: 15px;
  right: 15px;
`;

export const Caption = styled.span`
  width: 88%;
  overflow: hidden;
  break-word:break-all;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
