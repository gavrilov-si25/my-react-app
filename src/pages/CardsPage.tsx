import React, { useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '../components/Layout';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import CardHeader from '../components/Cards/CardHeader';
import CardList from '../components/Cards/CardList';
import Join from '../components/Join/Join';

interface CardsPageProps {
  onLoginClick: () => void;
  onSignUpClick: () => void;
}

const MIN_CARDS = 1;
const MAX_CARDS = 50;

const CardsPage: React.FC<CardsPageProps> = ({ onLoginClick, onSignUpClick }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const raw = parseInt(searchParams.get('limit') || '', 10);
  const initial = Number.isNaN(raw) ? 10 : raw;
  const limit = Math.min(MAX_CARDS, Math.max(MIN_CARDS, initial));

  useEffect(() => {
    if (initial !== limit) {
      setSearchParams({ limit: limit.toString() });
    }
  }, [initial, limit, setSearchParams]);

  const changeLimit = useCallback((delta: number) => {
    const newLimit = Math.min(MAX_CARDS, Math.max(MIN_CARDS, limit + delta));
    setSearchParams({ limit: newLimit.toString() });
  }, [limit, setSearchParams]);

  return (
    <>
      <Header onLoginClick={onLoginClick} onSignUpClick={onSignUpClick} />
      <Layout>
        <CardHeader limit={limit} onAdd={() => changeLimit(1)} onRemove={() => changeLimit(-1)}/>
        <CardList limit={limit} />
        <Join />
      </Layout>
      <Footer />
    </>
  );
};

export default CardsPage;
