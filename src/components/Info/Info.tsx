import React from 'react';
import styles from './Info.module.css';
import CardList from './CardList';

const Info: React.FC = () => (
  <section className={styles.info}>
    <h2 className={styles.title}>Everything you want to know in one place.</h2>
    <CardList />
  </section>
);

export default Info;
