import React from 'react';
import { Link } from 'react-router';
import styles from './Error.module.css';

const Error: React.FC = () => (
  <div className={styles.header}>
    <h1 className={styles.title}>404</h1>
    <p className={styles.subtitle}>Not Found</p>
    <Link to="/" className={styles.button}>
      Click to Main!
    </Link>
  </div>
);

export default Error;
