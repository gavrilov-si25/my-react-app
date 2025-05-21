import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import Quote from './Quote/Quote';
import Info from './Info/Info';
import Connect from './Connect/Connect';
import Slider from './Slider/Slider';
import Join from './Join/Join';
import Footer from './Footer/Footer';
import Modal from './Modal/Modal';
import Preloader from './Preloader/Preloader';

const App: React.FC = () => {
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

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <Preloader isLoading={isLoading} />
      {!isLoading && (
        <>
          <Header onLoginClick={openModal} onSignUpClick={openModal} />
          <Layout>
            <Hero />
            <Quote />
            <Info />
            <Connect />
            <Slider />
            <Join />
          </Layout>
          <Footer />
          {isModalOpen && <Modal onClose={closeModal} />}
        </>
      )}
    </>
  );
};

export default App;
