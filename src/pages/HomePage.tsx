import React from 'react';
import Header, { HeaderProps } from '../components/Header/Header';
import Layout from '../components/Layout';
import Hero from '../components/Hero/Hero';
import Quote from '../components/Quote/Quote';
import Info from '../components/Info/Info';
import Connect from '../components/Connect/Connect';
import Slider from '../components/Slider/Slider';
import Join from '../components/Join/Join';
import Footer from '../components/Footer/Footer';

interface HomePageProps extends HeaderProps {}

const HomePage: React.FC<HomePageProps> = ({ onLoginClick, onSignUpClick }) => (
  <>
    <Header onLoginClick={onLoginClick} onSignUpClick={onSignUpClick} />
    <Layout>
      <Hero />
      <Quote />
      <Info />
      <Connect />
      <Slider />
      <Join />
    </Layout>
    <Footer />
  </>
);

export default HomePage;
