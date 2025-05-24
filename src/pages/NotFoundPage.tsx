import React from 'react';
import Header, { HeaderProps } from '../components/Header/Header';
import Layout from '../components/Layout';
import Join from '../components/Join/Join';
import Footer from '../components/Footer/Footer';
import Error from '../components/Error/Error';

interface NotFoundPageProps extends HeaderProps {}

const NotFoundPage: React.FC<NotFoundPageProps> = ({ onLoginClick, onSignUpClick }) => {

  return (
    <>
      <Header onLoginClick={onLoginClick} onSignUpClick={onSignUpClick} />
      <Layout>
        <Error />
        <Join />
      </Layout>
      <Footer />
    </>
  );
};

export default NotFoundPage;
