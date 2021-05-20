/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { SwitchStyles } from './style';

export default ({
  isOn, handleToggle, onColor, id, open, white, disabled
}) => (
  <SwitchStyles
    white={white}
    open={open}
    style={{ margin: '-25px 0 0 0.5px' }}
    disabled={disabled}
  >
    <input
      open={open}
      checked={isOn}
      onChange={handleToggle}
      className="react-switch-checkbox"
      id={id}
      type="checkbox"
      disabled={disabled}
    />
    <label
      open={open}
      style={{ onColor }}
      className="react-switch-label"
      htmlFor={id}
    >
      <span className="react-switch-button" />
    </label>
  </SwitchStyles>
);
