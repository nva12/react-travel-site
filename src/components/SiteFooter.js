import React from 'react';
import styled from 'styled-components';
import { palette } from '../styles/variables';
import { respondTo } from '../styles/mixins';
import Wrapper from './Wrapper';
import Button from './Button';

const FooterContainer = styled.footer`
  background-color: ${palette.primary.main};
  color: #fff;
  padding: 0.5rem 0;
  text-align: center;
`;

const FooterText = styled.span`
  display: block;
  margin-bottom: 1rem;
  font-weight: 200;

  ${respondTo.md`
    display: inline;
    margin-bottom: 0;
    margin-right: 1.4rem;
  `}
`;

const SiteFooter = ({ ...props }) => (
  <FooterContainer>
    <Wrapper>
      <p>
        <FooterText>
          Copyright &copy; 2019 Clear View Escapes. All rights reserved.
        </FooterText>
        <Button href={'/'} secondary handleModalOpen={props.handleModalOpen}>
          Get in Touch
        </Button>
      </p>
    </Wrapper>
  </FooterContainer>
);

export default SiteFooter;
