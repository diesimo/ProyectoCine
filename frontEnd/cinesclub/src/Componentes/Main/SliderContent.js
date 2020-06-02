import React from 'react';
import styled from '@emotion/styled';

const SliderContent = styled.div`
  transform: translateX(-${props => props.translate}px);
  transition: transform ease-out ${props => props.transition}s;
  height: 379px;

  width: ${props => props.width}px;
  display: flex;
  background: white;
 
`
export default SliderContent