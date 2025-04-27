import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Quote from './components/Quote/Quote';
import Info from './components/Info/Info';
import Connect from './components/Connect/Connect';
import Slider from './components/Slider/Slider';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';
import Preloader from './components/Preloader/Preloader';

const Layout: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleContentLoaded = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    };

    if (document.readyState === 'interactive' || document.readyState === 'complete') {
      handleContentLoaded();
    } else {
      document.addEventListener('DOMContentLoaded', handleContentLoaded);
    }

    return () => {
      document.removeEventListener('DOMContentLoaded', handleContentLoaded);
    };
  }, []);

  return (
    <>
      <Preloader isLoading={isLoading} />
      {!isLoading && (
        <>
          <Header onLoginClick={() => setModalOpen(true)} onSignUpClick={() => setModalOpen(true)} />
          <main className="main">
            <Hero />
            <Quote />
            <Info />
            <Connect />
            <Slider />
            <CTA />
          </main>
          <Footer />
          {isModalOpen && <Modal onClose={() => setModalOpen(false)} />}
        </>
      )}
    </>
  );
};

export default Layout;
