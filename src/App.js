import React, { Fragment } from 'react';
import GlobalStyle from './styles/globalStyles';

import LargeHero from './components/LargeHero';
import OurBeginning from './components/OurBeginning';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <LargeHero />
      <OurBeginning />
    </Fragment>
  );
}

export default App;
