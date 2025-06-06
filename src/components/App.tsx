import React, { Suspense, lazy, useCallback, useState } from 'react';
import { Routes, Route } from 'react-router';
import Preloader from './Preloader/Preloader';
import Modal from './Modal/Modal';
import Layout from './Layout';

const HomePage = lazy(() => import('../pages/HomePage'));
const CardsPage = lazy(() => import('../pages/CardsPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

const IS_LOADING_MS = 500;

type ModalMode = 'login' | 'register';

const App: React.FC = () => {
  const [modalMode, setModalMode] = useState<ModalMode | null>(null);
  const [isLoading, setIsLoading] = useState(true);

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

  const openLoginModal = useCallback(() => {
    setModalMode('login');
  }, []);

  const openRegisterModal = useCallback(() => {
    setModalMode('register');
  }, []);

  const closeModal = useCallback(() => {
    setModalMode(null);
  }, []);

  return (
    <>
      <Preloader isLoading={isLoading} />
      {!isLoading && (
        <>
          <Suspense fallback={<Preloader isLoading={true} />}>
            <Routes>
              <Route element={<Layout />}>
                <Route
                  path="/"
                  element={<HomePage onLoginClick={openLoginModal} onSignUpClick={openRegisterModal} />}
                />
                <Route
                  path="/cards"
                  element={<CardsPage onLoginClick={openLoginModal} onSignUpClick={openRegisterModal} />}
                />
                <Route
                  path="*"
                  element={<NotFoundPage onLoginClick={openLoginModal} onSignUpClick={openRegisterModal} />}
                />
              </Route>
            </Routes>
          </Suspense>
          {modalMode && <Modal onClose={closeModal} mode={modalMode} />}
        </>
      )}
    </>
  );
};

export default App;
