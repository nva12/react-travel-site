import React, { Fragment } from 'react';
import GlobalStyle from './styles/globalStyles';

import LargeHero from './components/LargeHero';
import OurBeginning from './components/OurBeginning';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <SiteHeader />
      <LargeHero />
      <OurBeginning />
      <SiteFooter />
    </Fragment>
  );
}

export default App;
