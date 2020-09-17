import React, { Fragment } from 'react';
import GlobalStyle from './styles/globalStyles';

import LargeHero from './components/LargeHero';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <LargeHero />
    </Fragment>
  );
}

export default App;
