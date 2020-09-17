import React from 'react';
import PageSection from './PageSection';
import Wrapper from './Wrapper';

const OurBeginning = () => (
  <PageSection id="our-beginning">
    <Wrapper>
      <p>Dummy content to test!</p>
      <Wrapper isNested isMedium hasMarginBottom></Wrapper>
    </Wrapper>
  </PageSection>
);

export default OurBeginning;
