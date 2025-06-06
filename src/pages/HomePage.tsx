import React from 'react';
import PageTemplate from '../components/PageTemplate';
import Hero from '../components/Hero/Hero';
import Quote from '../components/Quote/Quote';
import Info from '../components/Info/Info';
import Connect from '../components/Connect/Connect';
import Slider from '../components/Slider/Slider';

type HomePageProps = React.ComponentProps<typeof PageTemplate>;

const HomePage: React.FC<HomePageProps> = ({ onLoginClick, onSignUpClick }) => (
  <PageTemplate onLoginClick={onLoginClick} onSignUpClick={onSignUpClick}>
    <Hero />
    <Quote />
    <Info />
    <Connect />
    <Slider />
  </PageTemplate>
);

export default HomePage;
