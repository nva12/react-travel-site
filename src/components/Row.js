import React from 'react';
import styled, { css } from 'styled-components';
import { clearfix, respondTo } from '../styles/mixins';

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

  ${(props) =>
    props.equalHeightAtLg &&
    css`
      ${respondTo.lg`display: flex;`}

      & > div {
        ${respondTo.lg`
        float: none;
        display: flex;
        `}
      }
    `}
`;

const Row = ({ ...props }) => {
  const {
    paddingTop,
    gutters,
    guttersSmall,
    guttersLarge,
    equalHeightAtLg,
  } = props;
  return (
    <RowContainer
      paddingTop={paddingTop}
      gutters={gutters}
      guttersSmall={guttersSmall}
      guttersLarge={guttersLarge}
      equalHeightAtLg={equalHeightAtLg}
    >
      {props.children}
    </RowContainer>
  );
};

export default Row;
