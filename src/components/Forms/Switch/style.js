import styled from 'styled-components';

export const SwitchStyles = styled.div`
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  .react-switch-checkbox {
    height: 0;
    width: 0;
    visibility: hidden;
  }
  .react-switch-label {
    display: ${({ open }) => (open ? 'none' : 'flex')};
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    width: 48px;
    height: 24px;
    background: ${({ white }) => (white ? '#E3EDF7' : '#50B5FF')};
    border-radius: 12px;
    position: relative;
    transition: background-color 0.4s;
    transition-timing-function: linear;
    &:hover {
      background: ${({ white }) => (white ? '#c9e0f7' : '#D9D9D9 ')};
    }
  }
  .react-switch-label .react-switch-button {
    content: '';
    position: absolute;
    top: 1px;
    left: 1.2px;
    width: 23px;
    height: 23px;
    border-radius: 55px;
    transition: all 0.2s;
    background: #50B5FF;
    transition-timing-function: linear;
  }
  .react-switch-checkbox:checked + .react-switch-label .react-switch-button {
    left: calc(100% - 2px);
    transform: translateX(-100%);
    background: white;
    position: absolute;
    right: 0;
  }
  .react-switch-checkbox:checked + .react-switch-label {
    background: #50B5FF;
    &:hover {
      background-color: #71c3ff;
    }
  }
`;
