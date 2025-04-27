import React, { useEffect, useState } from 'react';
import styles from './Info.module.css';
import Card, { CardData } from './Card';
import Feature from './Feature';
import heroImage from '../../assets/img/hero-image.png';

const Info: React.FC = () => {
  const [cards, setCards] = useState<CardData[]>([]);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
      .then(res => res.json())
      .then((json: any[]) => {
        const mapped: CardData[] = json.map(item => ({
          title: item.title,
          description: item.body,
          image: heroImage
        }));
        setCards(mapped);
      });
  }, []);  

  return (
    <section className={styles.info}>
      <h2 className={styles.title}>Everything you want to know in one place.</h2>

      <div className={styles.cardDisplay}>
        {cards[activeIdx] && <Card data={cards[activeIdx]} />}
      </div>

      <div className={styles.featuresSlider}>
        {cards.map((c, i) => (
          <Feature
            key={i}
            data={c}
            active={i === activeIdx}
            onClick={() => setActiveIdx(i)}
          />
        ))}
      </div>
    </section>
  );
};

export default Info;
