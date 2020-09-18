import React from 'react';
import styled, { css } from 'styled-components';
import { respondTo } from '../styles/mixins';

const ColumContainer = styled.div`
  ${(props) =>
    props.col4Md &&
    css`
      ${respondTo.md`
    float: left;
    width: 33.33%;
  `}
    `}

  ${(props) =>
    props.col4MdLarger &&
    css`
      ${respondTo.md`
    width: 37%;
  `}
    `}

${(props) =>
    props.col6Md &&
    css`
      ${respondTo.md`
    float: left;
    width: 50%;
  `}
    `}

${(props) =>
    props.col8Md &&
    css`
      ${respondTo.md`
    float: left;
    width: 66.66%;
  `}
    `}

${(props) =>
    props.col8MdSmaller &&
    css`
      ${respondTo.md`
    width: 63%;
  `}
    `}


    ${(props) =>
    props.marginBottomUntilMd &&
    css`
      margin-bottom: 1rem;
      ${respondTo.md`margin-bottom: 0;`}
    `}

${(props) =>
    props.col4Lg &&
    css`
      ${respondTo.lg`
    float: left;
    width: 33.33%;
  `}
    `}

${(props) =>
    props.equalHeightAtLg &&
    css`
      & > div {
        float: none;
        display: flex;
      }
      ${respondTo.lg`
    display: flex;
  `}
    `}
`;

const Column = ({ ...props }) => {
  const {
    col4Md,
    col4MdLarger,
    col6Md,
    col8Md,
    col8MdSmaller,
    marginBottomUntilMd,
    col4Lg,
    equalHeightAtLg,
  } = props;
  return (
    <ColumContainer
      col4Md={col4Md}
      col4MdLarger={col4MdLarger}
      col6Md={col6Md}
      col8Md={col8Md}
      col8MdSmaller={col8MdSmaller}
      marginBottomUntilMd={marginBottomUntilMd}
      col4Lg={col4Lg}
      equalHeightAtLg={equalHeightAtLg}
    >
      {props.children}
    </ColumContainer>
  );
};

export default Column;
