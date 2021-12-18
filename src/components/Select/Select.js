import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <WrapperContainer>
      <Wrapper value={value} onChange={onChange}>
        {children}
        <Icon id="chevron-down" size={6} />
      </Wrapper>
    </WrapperContainer>
  );
};

const WrapperContainer = styled.div`
  position: relative;
  width: 10px;
`;

const Wrapper = styled.select`
  appearance: none;
  border: none;
  background: ${COLORS.transparentGray15};
  border-radius: 8px;
  color: ${COLORS.gray700};
  padding: 12px;
  width: auto;

  :hover {
    color: ${COLORS.black};
  }
`;

export default Select;
