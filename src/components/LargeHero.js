import React from 'react';
import styled, { css } from 'styled-components';
import { palette } from '../styles/variables';
import { respondTo } from '../styles/mixins';
import Wrapper from './Wrapper';
import Button from './Button';

const LargeHeroContainer = styled.div`
  position: relative;
  border-bottom: 10px solid ${palette.primary.main};
`;

const Image = styled.img`
  display: block;
  height: 600px; /* remove later */
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
    <picture>
      <source
        srcset="
            src/images/hero--large.jpg        1920w,
            src/images/hero--large-hi-dpi.jpg 3840w
          "
        media="(min-width: 1380px)"
      />
      <source
        srcset="
            src/images/hero--medium.jpg        1380w,
            src/images/hero--medium-hi-dpi.jpg 2760w
          "
        media="(min-width: 990px)"
      />
      <source
        srcset="
            src/images/hero--small.jpg         990w,
            src/images/hero--small-hi-dpi.jpg 1980w
          "
        media="(min-width: 640px)"
      />
      <Image
        srcset="
            src/images/hero--smaller.jpg         640w,
            src/images/hero--smaller-hi-dpi.jpg 1280w
          "
        alt="Coastal view of ocean and mountains"
        className="large-hero__image"
      />
    </picture>
    <TextContent>
      <Wrapper>
        <Title>Your clarity</Title>
        <Subtitle>One trip away</Subtitle>
        <Description>
          We create soul restoring journeys that inspire you to be you.
        </Description>
        <p>
          <Button href="/" className="open-modal" secondary large>
            Get Started Today
          </Button>
        </p>
      </Wrapper>
    </TextContent>
  </LargeHeroContainer>
);

export default LargeHero;
