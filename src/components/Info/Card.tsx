import React from 'react';
import styles from './Info.module.css';

export interface CardData {
  title: string;
  description: string;
  image: string;
}

interface CardProps {
  data: CardData;
}

const Card: React.FC<CardProps> = ({ data }) => (
  <div className={styles.card}>
    <h3 className={styles.cardTitle}>{data.title}</h3>
    <p className={styles.cardDescription}>{data.description}</p>
    <img src={data.image} alt={data.title} className={styles.cardImage} />
  </div>
);

export default Card;
