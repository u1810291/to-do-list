/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Input, IconWrapper
} from './style';
import { ReactComponent as Icon } from '../../../../assets/icons/search.svg';

const SearchableInput = ({
  placeholder, disabled, size, type, icon, ...others
}) => (
  <Container>
    <IconWrapper size={size}>
      <Icon color="#9d9d9d" />
    </IconWrapper>
    <Input type={type} disabled={disabled} size={size} placeholder={placeholder} {...others} />

  </Container>
);
SearchableInput.propTypes = {
  size: PropTypes.string
};

SearchableInput.defaultProps = {
  size: 'medium'
};

export default SearchableInput;
