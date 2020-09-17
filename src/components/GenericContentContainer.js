import React from 'react';
import styled from 'styled-components';
import { respondTo } from '../styles/mixins';

const Container = styled.div`
  p {
    line-height: 1.65;
    margin: 0 0 1.8rem 0;
    font-weight: 300;

    ${respondTo.sm`font-size: 1.125rem;`}
  }

  p a {
    font-weight: 700;
  }
`;

const GenericContentContainer = ({ ...props }) => (
  <Container>{props.children}</Container>
);

export default GenericContentContainer;
