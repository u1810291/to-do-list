import styled from 'styled-components';

export const Container = styled.div`
  min-height: 75px;
  margin-bottom: 12px;
  border-radius: 8px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  background: ${({ icon }) => (icon === 'cross' ? '#F94144' : '#55b0ff')};
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
  top: 15px;
  right: 15px;
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
