import React from 'react';
import styles from './Connect.module.css';
import connectImage from '/images/connect-image.png';

const Connect: React.FC = () => (
  <section className={styles.connect}>
    <div className={styles.content}>
      <img src={connectImage} alt="Connect" className={styles.image} />
      <div className={styles.text}>
        <h3 className={styles.title}>Connect With Recruiter</h3>
        <p className={styles.description}>
          Get instant access to a curated pool of top creative & tech talent actively seeking their next role. Find
          highly qualified job!
        </p>
      </div>
    </div>
  </section>
);

export default Connect;
