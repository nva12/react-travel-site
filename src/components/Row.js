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
    `}

  ${(props) =>
    props.guttersSmall &&
    css`
      margin-right: -45px;

      & > div {
        padding-right: 45px;
      }
    `}

  ${(props) =>
    props.guttersLarge &&
    css`
      margin-right: -100px;

      & > div {
        padding-right: 100px;
      }
    `}
`;

const Row = ({ ...props }) => {
  const { paddingTop, gutters, guttersSmall, guttersLarge } = props;
  return (
    <RowContainer
      paddingTop={paddingTop}
      gutters={gutters}
      guttersSmall={guttersSmall}
      guttersLarge={guttersLarge}
    >
      {props.children}
    </RowContainer>
  );
};

export default Row;
