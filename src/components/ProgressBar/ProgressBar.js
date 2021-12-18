/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    height: 8,
    'border-radius': 4,
  },
  medium: {
    height: 12,
    'border-radius': 4,
  },
  large: {
    height: 24,
    'border-radius': 8,
  },
}

const ProgressBar = ({ value, size = 'medium'}) => {
  value = Math.min(value, 100) || 0;

  return <Wrapper
    aria-valuemax="100"
    aria-valuemin="0"
    aria-valuenow={value}
    size={size}
  >
    <ProgressBarInner value={value} size={size} />
    <VisuallyHidden>{value}%</VisuallyHidden>
  </Wrapper>;
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: ${props => SIZES[props.size]['border-radius']}px;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  height: ${props => SIZES[props.size].height}px;
  width: 100%;
  overflow: hidden;
  padding: ${props => props.size === 'large' ? '4px' : 0};
`;

const ProgressBarInner = styled.div`
  background-color: ${COLORS.primary};
  height: 100%;
  width: ${props => props.value}%;
  border-radius: ${props => props.size === 'large'
    ? props.value < 100
      ? '4px 0 0 4px' : '4px'
    : 0
  };
`;

export default ProgressBar;
