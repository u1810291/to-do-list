import React from 'react';
import PropTypes from 'prop-types';
import { ErrorContainer } from './style';

const ErrorComponent = ({ message }) => (
  <ErrorContainer>
    <div className="text-black-500">
      <span>(ツ)</span>
      <>{message}</>
    </div>
  </ErrorContainer>
);

ErrorComponent.propTypes = {
  message: PropTypes.string
};

ErrorComponent.defaultProps = {
  message: ''
};

export default ErrorComponent;
