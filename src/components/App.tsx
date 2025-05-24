import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router';
import Preloader from './Preloader/Preloader';
import Modal from './Modal/Modal';

const HomePage = lazy(() => import('../pages/HomePage'));
const CardsPage = lazy(() => import('../pages/CardsPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

const IS_LOADING_MS = 500;

const App: React.FC = () => {
  const [isModalOpen, setModalOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const handleContentLoaded = () => {
      setTimeout(() => setIsLoading(false), IS_LOADING_MS);
    };

    if (document.readyState === 'interactive' || document.readyState === 'complete') {
      handleContentLoaded();
    } else {
      document.addEventListener('DOMContentLoaded', handleContentLoaded);
      return () => document.removeEventListener('DOMContentLoaded', handleContentLoaded);
    }
  }, []);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <Preloader isLoading={isLoading} />
      {!isLoading && (
        <>
          <Suspense fallback={<Preloader isLoading />}>
            <Routes>
              <Route path="/" element={<HomePage onLoginClick={openModal} onSignUpClick={openModal} />} />
              <Route path="/cards" element={<CardsPage onLoginClick={openModal} onSignUpClick={openModal} />} />
              <Route path="*" element={<NotFoundPage onLoginClick={openModal} onSignUpClick={openModal} />} />
            </Routes>
          </Suspense>
          {isModalOpen && <Modal onClose={closeModal} />}
        </>
      )}
    </>
  );
};

export default App;
