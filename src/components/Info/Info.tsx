import React from 'react';
import styles from './Info.module.css';
import { Link } from 'react-router';
import CardList from '../Cards/CardList';

const CARD_LIST_LIMIT = 3;
const INFO_LINK_LIMIT = 10;

const Info: React.FC = () => (
  <section className={styles.info}>
    <h2 className={styles.title}>
      <Link to={`/cards?limit=${INFO_LINK_LIMIT}`} className={styles.titleLink}>
        Everything you want to know in one place. Click!
      </Link>
    </h2>
    <CardList limit={CARD_LIST_LIMIT} />
  </section>
);

export default Info;
