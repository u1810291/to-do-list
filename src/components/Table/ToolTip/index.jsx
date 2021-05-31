import React from 'react';
import {
  ToolTipContainer,
  ToolTip
} from './style';
import {
  ToolTipOptionButton as OptionButton,
  ToolTipContent as Caption
} from '../style';
import { ReactComponent as Icons } from '../../../assets/icons/menu.svg';

export default ({
  // eslint-disable-next-line react/prop-types
  children, index, TIndex, open, onClick, id, toolTipData
}) => (
  <ToolTipContainer onClick={onClick}>
    <ToolTip index={index} TIndex={TIndex} open={open}>
      {
        toolTipData.map(({ name, onClick: ItemClick }, positionIndex) => (
          <OptionButton onClick={() => ItemClick(id)} key={`${positionIndex + 1}`}>
            <Icons />

            <Caption>{name}</Caption>
          </OptionButton>
        ))
      }
    </ToolTip>
    {children}
  </ToolTipContainer>
);
