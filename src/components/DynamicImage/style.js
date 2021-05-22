import styled from 'styled-components';

export const ImageWrap = styled.div.attrs(({
  width, height, shape, color, imgSrc
}) => ({
  style: {
    width: width ? `${width}px` : '32px',
    height: height ? `${height}px` : '32px',
    borderRadius: shape === 'round' ? '50%' : '0',
    background: !imgSrc && (color || 'none')
  }
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const NameText = styled.div`
  line-height: 1;
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: ${({ size }) => (size === 'large' ? '62px' : '12px')};
`;
