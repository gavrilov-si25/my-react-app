import React from 'react';
import styles from './CardHeader.module.css';

interface CardHeaderProps {
  limit: number;
  onAdd: () => void;
  onRemove: () => void;
}

const MIN_CARDS_LIMIT = 1;
const MAX_CARDS_LIMIT = 50;

const CardHeader: React.FC<CardHeaderProps> = ({ limit, onAdd, onRemove }) => (
  <div className={styles.header}>
    <h1 className={styles.title}>Connect With Cards</h1>
    <p className={styles.subtitle}>Count {limit} cards</p>
    <div className={styles.buttons}>
      <button onClick={onAdd} className={styles.button} disabled={limit >= MAX_CARDS_LIMIT}>
        Add
      </button>
      <button onClick={onRemove} className={styles.button} disabled={limit <= MIN_CARDS_LIMIT}>
        Remove
      </button>
    </div>
  </div>
);

export default CardHeader;
