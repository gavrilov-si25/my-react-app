import React from 'react';
import styles from './Feature.module.css';
import { CardData } from '../../types/post.ts';

interface FeatureProps {
  data: CardData;
  active: boolean;
  onClick: () => void;
}

const Feature: React.FC<FeatureProps> = React.memo(({ data, active, onClick }) => (
  <div className={`${styles.feature} ${active ? styles.featureActive : ''}`} onClick={onClick}>
    <h4 className={styles.featureTitle}>{data.title}</h4>
    <p className={styles.featureText}>{data.body}</p>
  </div>
));

export default Feature;
