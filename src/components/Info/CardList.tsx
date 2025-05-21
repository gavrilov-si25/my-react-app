import React, { useState, useEffect } from 'react';
import Card, { CardData } from './Card';
import Feature from './Feature';
import heroImage from '/images/hero-image.png';
import styles from './CardList.module.css';

const CardList: React.FC = () => {
  const [cards, setCards] = useState<CardData[]>([]);
  const [activeIdx, setActiveIdx] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
      .then(res => {
        if (!res.ok) throw new Error(`Ошибка ${res.status}`);
        return res.json();
      })
      .then((json: any[]) => {
        const mapped = json.map(item => ({
          id: item.id,
          title: item.title,
          body: item.body,
          image: heroImage
        }));
        setCards(mapped);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className={styles.status}>Загрузка...</p>;
  if (error)   return <p className={styles.status}>Ошибка: {error}</p>;

  return (
    <div className={styles.cardList}>
      <div className={styles.cardDisplay}>
        <Card data={cards[activeIdx]} />
      </div>
      <div className={styles.featuresSlider}>
        {cards.map((c, i) => (
          <Feature key={c.id} data={c} active={i === activeIdx} onClick={() => setActiveIdx(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
