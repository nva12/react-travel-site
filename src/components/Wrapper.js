import React from 'react';
import styled, { css } from 'styled-components';
import { respondTo } from '../styles/mixins';

const StyledWrapper = styled.div`
  overflow: hidden;
  padding-left: 18px;
  padding-right: 18px;
  max-width: ${(props) => (props.isMedium ? `976px` : `1236px`)};
  margin-left: auto;
  margin-right: auto;

  ${(props) =>
    props.isNested &&
    css`
      padding-left: 0;
      padding-right: 0;
    `}

  ${(props) =>
    props.hasNoPaddingUntilLg &&
    css`
      padding-left: 0;
      padding-right: 0;
      ${respondTo.lg`
      padding-left: 18px;
      padding-right: 18px;
    `}
    `}

  ${(props) =>
    props.hasMarginBottom &&
    css`
      margin-bottom: 1rem;
      ${respondTo.sm`
      margin-bottom: 3.875rem;
    `}
    `}
`;

const Wrapper = ({ ...props }) => {
  const { isMedium, hasNoPaddingUntilLg, isNested, hasMarginBottom } = props;
  return (
    <StyledWrapper
      isMedium={isMedium}
      hasNoPaddingUntilLg={hasNoPaddingUntilLg}
      isNested={isNested}
      hasMarginBottom={hasMarginBottom}
    >
      {props.children}
    </StyledWrapper>
  );
};

export default Wrapper;
