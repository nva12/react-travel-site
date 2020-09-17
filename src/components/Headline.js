import React from 'react';
import styled, { css } from 'styled-components';
import { palette } from '../styles/variables';
import { respondTo } from '../styles/mixins';

const StyledHeadline = styled.h2`
  font-size: 1.9rem;
  font-weight: 300;
  color: ${palette.primary.main};

  ${respondTo.sm`font-size: 2.875rem;`}

  ${(props) =>
    props.centered &&
    css`
      text-align: center;
    `}

  ${(props) =>
    props.secondary &&
    css`
      color: ${palette.secondary.main};
    `}

  ${(props) =>
    props.small &&
    css`
      font-size: 1.25rem;
      ${respondTo.sm`font-size: 1.875rem;`}
    `}

  ${(props) =>
    props.narrow &&
    css`
      max-width: 500px;
      margin-left: auto;
      margin-right: auto;
    `}

  ${(props) =>
    props.light &&
    css`
      font-weight: 100;
    `}

  ${(props) =>
    props.smallMarginBottom &&
    css`
      margin-bottom: 0.5em;
    `}

  ${(props) =>
    props.largeMarginBottom &&
    css`
      margin-bottom: 1.6em;
    `}

  ${(props) =>
    props.noMarginTop &&
    css`
      margin-top: 0;
    `}
`;

const Headline = ({ ...props }) => {
  const {
    centered,
    secondary,
    small,
    narrow,
    light,
    smallMarginBottom,
    largeMarginBottom,
    noMarginTop,
  } = props;
  return (
    <StyledHeadline
      centered={centered}
      secondary={secondary}
      small={small}
      narrow={narrow}
      light={light}
      smallMarginBottom={smallMarginBottom}
      largeMarginBottom={largeMarginBottom}
      noMarginTop={noMarginTop}
    >
      {props.children}
    </StyledHeadline>
  );
};

export default Headline;
