import React, { Fragment } from 'react';
import GlobalStyle from './styles/globalStyles';

import LargeHero from './components/LargeHero';
import OurBeginning from './components/OurBeginning';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import OurFeatures from './components/OurFeatures';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <SiteHeader />
      <LargeHero />
      <OurBeginning />
      <OurFeatures />
      <Testimonials />
      <SiteFooter />
    </Fragment>
  );
}

export default App;
