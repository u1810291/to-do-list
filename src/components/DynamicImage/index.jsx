/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { ImageWrap, NameText } from './style';
import { getRandColor } from '../../utils/random-color';
import { getInitials } from '../../utils/generate-intials';

const color = getRandColor();

export const DynamicImage = ({
  imgSrc, name, shape, size, ...props
}) => (
  <ImageWrap {...props} imgSrc={imgSrc} shape={shape} color={color}>
    {imgSrc
      ? (
        <img
          src={imgSrc}
          alt={name}
        />
      )
      : (
        <NameText
          size={size}
        >
          {getInitials(name)}
        </NameText>
      )}
  </ImageWrap>
);
DynamicImage.propTypes = {
  name: PropTypes.string.isRequired,
  shape: PropTypes.string
};

DynamicImage.defaultProps = {
  shape: 'round'
};
