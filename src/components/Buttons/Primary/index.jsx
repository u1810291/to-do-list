/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title } from './style';

const PrimaryButton = ({
  title, size, color, ...others
}) => (
  <Container size={size} color={color} {...others}>
    <Title>{title}</Title>
  </Container>
);

PrimaryButton.propTypes = {
  title: PropTypes.string,
  size: PropTypes.string
};
PrimaryButton.defaultProps = {
  title: '',
  size: 'medium'
};

export default PrimaryButton;
