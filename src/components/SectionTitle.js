import React from 'react';
import styled, { css } from 'styled-components';
import { palette } from '../styles/variables';
import { respondTo } from '../styles/mixins';

const TitleContainer = styled.h2`
  font-size: 2.55rem;
  font-weight: 300;
  text-align: center;

  ${respondTo.sm`font-size: 3.75rem;`}

  strong {
    font-weight: 500;
  }

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 0.6rem;

    ${respondTo.sm`
    position: relative;
    top: 8px;
    margin-right: 0.5rem;
    margin-left: 0;
    margin-bottom: 0;
    display: inline-block;
  `}
  }

  ${(props) =>
    props.primary &&
    css`
      color: ${palette.primary.main};
    `}

  ${(props) =>
    props.lessMargin &&
    css`
      margin-bottom: 1.3rem;
      margin-top: 0;
    `}
`;

const SectionTitle = ({ ...props }) => {
  const { primary, lessMargin } = props;
  return (
    <TitleContainer primary={primary} lessMargin={lessMargin}>
      {props.children}
    </TitleContainer>
  );
};

export default SectionTitle;
