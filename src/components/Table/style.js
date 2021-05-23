import styled, { css } from 'styled-components';
import Scrollable from 'react-indiana-drag-scroll';
import { PureCheckbox } from '../CheckBox';

const upArrowIcon = css`
  width: 0;
  height: 0;
  border-top: 0;
  border-left: var(--table-sort-icon-size) solid transparent;
  border-right: var(--table-sort-icon-size) solid transparent;
  border-bottom: var(--table-sort-icon-size) solid #181c32;
`;

const downArrowIcon = css`
  width: 0;
  height: 0;
  border-bottom: 0;
  border-left: var(--table-sort-icon-size) solid transparent;
  border-right: var(--table-sort-icon-size) solid transparent;
  border-top: var(--table-sort-icon-size) solid
    ${({ df }) => (df ? '#9D9D9D' : '#181C32')};
`;

const paddings = css`
  padding-left: ${({ left }) => left && 'var(--table-left-right-row-paddings)'};
  padding-right: ${({ right }) => right && 'var(--table-left-right-row-paddings)'};
`;

const stickyTH = css`
  &:nth-child(1) {
    left: 0;
    z-index: 2;
  }
  ${({ notCheckable }) => !notCheckable
    && `
      &:nth-child(2) {
      left: var(--table-margin-first-element-sticky);
      z-index: 2;
    }
  `}
`;

const stickyTD = css`
  & td:nth-child(1) {
    position: sticky;
    left: 0;
    z-index: 1;
    background-color: white;
  }
  ${({ notCheckable }) => !notCheckable
    && `
      & td:nth-child(2) {
      position: sticky;
      left: var(--table-margin-first-element-sticky);
      z-index: 1;
      background-color: white;
    }
  `}
`;

export const CheckBox = styled(PureCheckbox)``;

export const Container = styled.div`
  position: relative;
  --table-table-width: auto;
  --table-left-right-row-paddings: 25px;
  --table-cell-right-padding: 36px;
  --table-cell-left-padding: 16px;
  --table-sort-icon-size: 5px;
  --table-row-background-color: transparent;
  --table-row-between: 14px;
  --table-margin-first-element-sticky: 125px;
`;

export const Wrapper = styled(Scrollable)`
  height: ${({ height }) => (height || '500px')};
  overflow-x: auto;
  overflow-y: auto;
`;

export const Cell = styled.div`
  padding-left: var(--table-cell-left-padding);
  padding-right: 16px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: ${({ align }) => align && `flex-${align}`};
`;

export const THead = styled.thead``;
export const TH = styled.th`
  text-align: left;
  ${paddings};
  white-space: nowrap;
  position: sticky;
  top: 0;
  background: #F5F5F8;
  z-index: 2;
  ${stickyTH}
  & ${Cell} {
    height: 56px;
    display: flex;
    align-items: center;
    padding-right: calc(var(--table-cell-right-padding) + 16px);
  }
  & ${CheckBox}:not(:checked) {
    background: white;
  }
`;

export const TD = styled.td`
  ${paddings};
  white-space: nowrap;
`;

export const TR = styled.tr`
  ${stickyTD};
  & ${TD}:nth-child(${({ notCheckable }) => (notCheckable ? 1 : 2)}) ${Cell},
  & ${TH}:nth-child(${({ notCheckable }) => (notCheckable ? 1 : 2)}) ${Cell}
  {
    border-right: 2px solid #F5F5F8;
  };
`;
export const TREmpty = styled.tr`
  height: 12px !important;
  background: transparent !important;
`;
export const TBody = styled.tbody`
  & ${TR} {
    background: white;
  }
  & ${TR}:hover {
    background: #e2ebf9;
  }
  & ${TR}:hover ${TD} {
    background: #e2ebf9;
  }
  & ${TR}:hover ${CheckBox}:not(:checked) {
    background: white;
  }
  & ${TR}:hover .teble-status-cell {
    background-color: white;
  }
  & ${Cell} {
    height: 72px;
  }
`;

export const Table = styled.table`
  border-collapse: collapse;
  min-width: 100%;
  width: var(--table-table-width);
`;

export const Icon = styled.span`
  position: absolute;
  right: -18px;
  &:before {
    content: "";
    position: absolute;
    right: var(--table-cell-right-padding);
    bottom: -2px;
    ${({ down }) => (!down ? downArrowIcon : upArrowIcon)};
  }
`;

export const MenuButton = styled.button`
  background: transparent;
  border: none;
  padding: 5px;
  cursor: pointer;
  position: absolute;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 16px;
  left: 40px;
  &:focus {
    outline: none;
  }
`;
