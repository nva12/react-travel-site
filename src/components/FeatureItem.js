import React from 'react';
import styled from 'styled-components';
import { respondTo } from '../styles/mixins';
import GenericContentContainer from './GenericContentContainer';

const FeatureContainer = styled.div`
  position: relative;
  padding-bottom: 2.5rem;

  ${respondTo.sm`padding-left: 94px;`}

  img {
    display: block;
    margin: 0 auto;

    ${respondTo.sm`
      position: absolute;
      left: 0;`}
  }

  h3 {
    font-size: 1.6rem;
    font-weight: 300;
    margin-top: 0.7em;
    margin-bottom: 0.8rem;
    text-align: center;

    ${respondTo.sm`
      margin-top: 1em;
      font-size: 1.875rem;
      text-align: left;`}
  }
`;

const FeatureItem = ({ ...props }) => (
  <FeatureContainer>
    <GenericContentContainer>{props.children}</GenericContentContainer>
  </FeatureContainer>
);

export default FeatureItem;
