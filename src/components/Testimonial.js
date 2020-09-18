import React from 'react';
import styled, { css } from 'styled-components';
import { palette } from '../styles/variables';
import { respondTo } from '../styles/mixins';
import GenericContentContainer from './GenericContentContainer';

const TestimonialContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 0 18px 1px 18px;
  margin-bottom: 98px;

  ${respondTo.lg`
    padding: 0 1.8125rem 1px 1.8125rem;
    margin-bottom: 0;`}

  ${(props) =>
    props.last &&
    css`
      margin-bottom: 0;
    `}
  
  .testimonialPhoto {
    border-radius: 50%;
    overflow: hidden;
    width: 160px;
    height: 160px;
    margin: 0 auto -80px auto;
    position: relative;
    top: -80px;
    border: 6px solid rgba(255, 255, 255, 0.8);
  }

  h3 {
    color: ${palette.primary.main};
    text-align: center;
    font-size: 1.5rem;
    font-weight: 500;
    margin: 0;
  }

  h4 {
    color: ${palette.secondary.main};
    text-align: center;
    font-size: 0.9375rem;
    font-weight: 400;
    margin: 0.25rem 0 1rem;
  }
`;

const Testimonial = ({ ...props }) => (
  <TestimonialContainer last={props.last}>
    <GenericContentContainer>{props.children}</GenericContentContainer>
  </TestimonialContainer>
);

export default Testimonial;
