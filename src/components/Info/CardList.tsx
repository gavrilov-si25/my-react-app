import React, { useState, useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch';
import Card, { CardData } from './Card';
import Feature from './Feature';
import heroImage from '/images/hero-image.png';
import styles from './CardList.module.css';

interface RawCard {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface CardListProps {
  limit?: number;
}

const CardList: React.FC<CardListProps> = ({ limit = 3 }) => {
  const { data: rawCards, loading, error } = useFetch<RawCard[]>(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
  );
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    if (!loading && rawCards) {
      const maxIdx = rawCards.length - 1;
      if (activeIdx > maxIdx) {
        setActiveIdx(maxIdx >= 0 ? maxIdx : 0);
      }
    }
  }, [rawCards, loading, activeIdx]);

  if (loading) return <p className={styles.status}>Loading..</p>;
  if (error)   return <p className={styles.status}>Error: {error}</p>;
  if (!rawCards || rawCards.length === 0) return <p className={styles.status}>No cards</p>;

  const cards: CardData[] = rawCards.map(item => ({
    id: item.id,
    title: item.title,
    body: item.body,
    image: heroImage,
  }));

  const safeIdx = Math.min(activeIdx, cards.length - 1);

  return (
    <div className={styles.cardList}>
      <div className={styles.cardDisplay}>
        <Card data={cards[safeIdx]} />
      </div>
      <div className={styles.featuresSlider}>
        {cards.map((c, i) => (
          <Feature
            key={c.id}
            data={c}
            active={i === safeIdx}
            onClick={() => setActiveIdx(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default React.memo(CardList);
