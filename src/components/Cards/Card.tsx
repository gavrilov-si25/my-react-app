import React from 'react';
import styles from './Card.module.css';
import { CardData } from '../../types/post.ts';

interface CardProps {
  data: CardData;
}

const Card: React.FC<CardProps> = React.memo(({ data }) => (
  <div className={styles.card}>
    <h3 className={styles.cardTitle}>{data.title}</h3>
    <p className={styles.cardDescription}>{data.body}</p>
    <img src={data.image} alt={data.title} className={styles.cardImage} />
  </div>
));

export default Card;
