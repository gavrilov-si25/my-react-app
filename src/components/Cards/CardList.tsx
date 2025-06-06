import React, { useState, useEffect, useMemo } from 'react';
import { useFetch } from '../../hooks/useFetch';
import Card from './Card';
import Feature from './Feature';
import heroImage from '/images/hero-image.png';
import styles from './CardList.module.css';
import { CardData, RawCard } from '../../types/post.ts';

interface CardListProps {
  limit?: number;
}

const DEFAULT_CARD_LIMIT = 3;

const CardList: React.FC<CardListProps> = React.memo(({ limit = DEFAULT_CARD_LIMIT }) => {
  const {
    data: rawCards,
    loading,
    error,
  } = useFetch<RawCard[]>(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
  const [activeIdx, setActiveIdx] = useState(0);

  const cards: CardData[] = useMemo(
    () =>
      rawCards
        ? rawCards.map(item => ({
            id: item.id,
            title: item.title,
            body: item.body,
            image: heroImage,
          }))
        : [],
    [rawCards],
  );

  const handlers: Array<() => void> = useMemo(() => cards.map((_, idx) => () => setActiveIdx(idx)), [cards]);

  useEffect(() => {
    if (!loading && rawCards) {
      const maxIdx = rawCards.length - 1;
      if (activeIdx > maxIdx) {
        setActiveIdx(maxIdx >= 0 ? maxIdx : 0);
      }
    }
  }, [rawCards, loading, activeIdx]);

  if (loading) return <p className={styles.status}>Loading..</p>;
  if (error) return <p className={styles.status}>Error: {error}</p>;
  if (!rawCards || rawCards.length === 0) return <p className={styles.status}>No cards</p>;

  const safeIdx = Math.min(activeIdx, cards.length - 1);

  return (
    <div className={styles.cardList}>
      <div className={styles.cardDisplay}>
        <Card data={cards[safeIdx]} />
      </div>
      <div className={styles.featuresSlider}>
        {cards.map((c, i) => (
          <Feature key={c.id} data={c} active={i === safeIdx} onClick={handlers[i]} />
        ))}
      </div>
    </div>
  );
});

export default CardList;
