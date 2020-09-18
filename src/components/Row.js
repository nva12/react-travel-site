import React from 'react';
import styled, { css } from 'styled-components';
import { respondTo, clearfix } from '../styles/mixins';

const RowContainer = styled.div`
  ${clearfix}

  ${(props) =>
    props.paddingTop &&
    css`
      padding-top: 80px;
    `}

${(props) =>
    props.gutters &&
    css`
      margin-right: -65px;

      & > div {
        padding-right: 65px;
      }
    `} /* add styles for gutters small and large if it works like this */
`;

const Row = ({ ...props }) => {
  const { paddingTop, gutters } = props;
  return (
    <RowContainer paddingTop={paddingTop} gutters={gutters}>
      {props.children}
    </RowContainer>
  );
};

export default Row;
