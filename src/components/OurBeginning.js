import React from 'react';
import GenericContentContainer from './GenericContentContainer';
import { Headline2, Headline3 } from './Headline';
import PageSection from './PageSection';
import Wrapper from './Wrapper';
import Row from './Row';
import Column from './Column';

const OurBeginning = () => (
  <PageSection id="our-beginning">
    <Wrapper>
      <Headline2 centered light smallMarginBottom>
        The first trip we planned <strong>was our own.</strong>
      </Headline2>
      <Headline3 centered secondary small narrow light largeMarginBottom>
        Ever since, we&rsquo;ve been working to make travel{' '}
        <strong>better for everyone.</strong>
      </Headline3>
      <Wrapper isNested isMedium hasMarginBottom>
        <img
          sizes={'(min-width: 970px) 976px, 100vw'}
          srcSet={`
        ${require('../images/first-trip-low-res.jpg')} 565w,
        ${require('../images/first-trip.jpg')} 976w,
        ${require('../images/first-trip-hi-dpi.jpg')} 1952w`}
          alt={'Couple walking down a street.'}
        />
      </Wrapper>
      <Row gutters>
        <Column col4Md col4MdLarger marginBottomUntilMd>
          <picture>
            <source
              sizes={'404px'}
              srcSet={`
            ${require('../images/our-start.jpg')}        404w,
            ${require('../images/our-start-hi-dpi.jpg')} 808w
            `}
              media="(min-width: 1200px)"
            />
            <source
              sizes={'320px'}
              srcSet={`
            ${require('../images/our-start-portrait.jpg')}        382w,
            ${require('../images/our-start-portrait-hi-dpi.jpg')} 764w
            `}
              media="(min-width: 800px)"
            />
            <img
              srcSet={`
            ${require('../images/our-start-landscape.jpg')}         800w,
            ${require('../images/our-start-landscape-hi-dpi.jpg')} 1600w
            `}
              alt={'Our founder, Jane Doe'}
            />
          </picture>
        </Column>
        <Column col8Md col8MdSmaller>
          <GenericContentContainer>
            <Headline2 noMarginTop>
              Here&rsquo;s how we got started&hellip;
            </Headline2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, <a href="/">quis nostrud exercitation</a>{' '}
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
            <p>
              Duis aute irure dolor in <strong>reprehenderit in</strong>{' '}
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum velit esse cillum{' '}
              <strong>dolore eu fugiat.</strong>
            </p>
          </GenericContentContainer>
        </Column>
      </Row>
    </Wrapper>
  </PageSection>
);

export default OurBeginning;
