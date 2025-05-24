import React from 'react';
import styles from './Info.module.css';
import { Link } from 'react-router';
import CardList from './CardList';

const limit = 3

const Info: React.FC = () => (
  <section className={styles.info}>
    <h2 className={styles.title}>
      <Link to="/cards?limit=10" className={styles.titleLink}>
        Everything you want to know in one place. Click!
      </Link>
    </h2>
    <CardList limit={limit} />
  </section>
);

export default Info;
