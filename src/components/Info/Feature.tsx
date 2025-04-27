import React from 'react';
import styles from './Info.module.css';
import { CardData } from './Card';

interface FeatureProps {
  data: CardData;
  active: boolean;
  onClick: () => void;
}

const Feature: React.FC<FeatureProps> = ({ data, active, onClick }) => (
  <div
    className={`${styles.feature} ${active ? styles.featureActive : ''}`}
    onClick={onClick}
  >
    <h3 className={styles.featureTitle}>{data.title}</h3>
    <p className={styles.featureText}>{data.description}</p>
  </div>
);

export default Feature;
