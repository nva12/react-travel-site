import React from 'react';
import styled, { css } from 'styled-components';
import { palette } from '../styles/variables';
import { respondTo } from '../styles/mixins';

const StyledSection = styled.section`
  padding: 1.2rem 0;

  ${respondTo.md`
    padding: 4.5rem 0;
  `}

  ${(props) =>
    props.hasBlueBg &&
    css`
      background-color: ${palette.primary.main};
      color: #fff;
    `}

  ${(props) =>
    props.isTestimonials &&
    css`
      background-color: #e0e6ef;
      ${respondTo.lg`
      background: url(${require('../images/testimonials-bg.jpg')}) top center no-repeat;
      background-size: cover;
    `}
    `}
  
  ${(props) =>
    props.hasNoPaddingBottomUntilLg &&
    css`
      padding-bottom: 0;
      ${respondTo.lg`
      padding-bottom: 4.5rem;
    `}
    `}
`;

const PageSection = ({ ...props }) => {
  const { hasBlueBg, isTestimonials, hasNoPaddingBottomUntilLg, id } = props;
  return (
    <StyledSection
      hasBlueBg={hasBlueBg}
      isTestimonials={isTestimonials}
      hasNoPaddingBottomUntilLg={hasNoPaddingBottomUntilLg}
      id={id}
    >
      {props.children}
    </StyledSection>
  );
};

export default PageSection;
