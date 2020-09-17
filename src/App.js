import React, { Fragment } from 'react';
import GlobalStyle from './styles/globalStyles';

import LargeHero from './components/LargeHero';
import OurBeginning from './components/OurBeginning';
import SiteHeader from './components/SiteHeader';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <SiteHeader />
      <LargeHero />
      <OurBeginning />
    </Fragment>
  );
}

export default App;
