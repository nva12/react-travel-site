import React, { Fragment, useState } from 'react';
import GlobalStyle from './styles/globalStyles';

import LargeHero from './components/LargeHero';
import OurBeginning from './components/OurBeginning';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import OurFeatures from './components/OurFeatures';
import Testimonials from './components/Testimonials';
import Modal from './components/Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  return (
    <Fragment>
      <GlobalStyle />
      <SiteHeader handleModalOpen={handleModalOpen} />
      <LargeHero handleModalOpen={handleModalOpen} />
      <OurBeginning />
      <OurFeatures />
      <Testimonials />
      <SiteFooter handleModalOpen={handleModalOpen} />
      <Modal isOpen={isModalOpen} handleModalClose={handleModalClose} />
    </Fragment>
  );
}

export default App;
