import React from 'react';
import styled from 'styled-components';

const sizes = {
  small: 40,
  medium: 60,
  large: 80,
};

const setSize = ({ size }) => {
  const isDekstop = matchMedia(`(min-width: 768px)`).matches;
  const sizeSelected = sizes[size] || 50;
  return isDekstop ? sizeSelected * 1.4 : sizeSelected;
};

const ImgComponent = ({ src, size }) => <Img src={src} alt="profile img" size={size} />;

const Img = styled.img`
  width: ${setSize}px;
  height: ${setSize}px;
  border-radius: 50%;
  object-fit: cover;
  @media screen and (min-width: 768px) {
    width: ${setSize}px;
    height: ${setSize}px;
  }
`;

export default ImgComponent;
