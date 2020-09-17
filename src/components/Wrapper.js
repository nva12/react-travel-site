import React from 'react';
import styled, { css } from 'styled-components';
import { respondTo } from '../styles/mixins';

const StyledWrapper = styled.div`
  overflow: hidden;
  padding-left: 18px;
  padding-right: 18px;
  max-width: ${(props) => (props.medium ? `976px` : `1236px`)};
  margin-left: auto;
  margin-right: auto;

  ${(props) =>
    props.nested &&
    css`
      padding-left: 0;
      padding-right: 0;
    `}

  ${(props) =>
    props.noPaddingUntilLg &&
    css`
      padding-left: 0;
      padding-right: 0;
      ${respondTo.lg`
      padding-left: 18px;
      padding-right: 18px;
    `}
    `}

  ${(props) =>
    props.marginBottom &&
    css`
      margin-bottom: 1rem;
      ${respondTo.sm`
      margin-bottom: 3.875rem;
    `}
    `}
`;

const Wrapper = ({ ...props }) => {
  const { medium, noPaddingUntilLg, nested, marginBottom } = props;
  return (
    <StyledWrapper
      medium={medium}
      noPaddingUntilLg={noPaddingUntilLg}
      nested={nested}
      marginBottom={marginBottom}
    >
      {props.children}
    </StyledWrapper>
  );
};

export default Wrapper;
