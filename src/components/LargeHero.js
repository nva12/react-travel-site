import React from 'react';
import styled from 'styled-components';
import { palette } from '../styles/variables';
import { respondTo } from '../styles/mixins';
import Wrapper from './Wrapper';
import Button from './Button';
import LargeHeroPicture from './LargeHeroPicture';

const LargeHeroContainer = styled.div`
  position: relative;
  border-bottom: 10px solid ${palette.primary.main};
`;

const TextContent = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  width: 100%;
  padding-top: 60px;
  text-align: center;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 2.4rem;
  font-weight: 300;
  color: ${palette.primary.main};

  ${respondTo.sm`
    font-size: 4.8rem;
  `}
`;

const Subtitle = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 300;
  color: ${palette.primary.main};

  ${respondTo.sm`
    font-size: 2.9rem;
  `}
`;

const Description = styled.p`
  max-width: 30rem;
  margin-left: auto;
  margin-right: auto;
  font-size: 1.1rem;
  font-weight: 100;
  color: #fff;
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);

  ${respondTo.sm`
    font-size: 1.875rem;
  `}
`;

const LargeHero = () => (
  <LargeHeroContainer>
    <LargeHeroPicture />
    <TextContent>
      <Wrapper>
        <Title>Your clarity</Title>
        <Subtitle>One trip away</Subtitle>
        <Description>
          We create soul restoring journeys that inspire you to be you.
        </Description>
        <p>
          <Button href="/" className="open-modal" secondary isLarge>
            Get Started Today
          </Button>
        </p>
      </Wrapper>
    </TextContent>
  </LargeHeroContainer>
);

export default LargeHero;
