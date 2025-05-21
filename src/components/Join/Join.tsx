import React from 'react';
import styles from './Join.module.css';
import jobImage from '/images/job-image.png';

const Join: React.FC = () => (
  <section className={styles.join}>
    <div className={styles.content}>
      <div className={styles.text}>
        <h2 className={styles.title}>Set up your profile. <br /> Let jobs find you.</h2>
        <a href="#" className={styles.button}>
          Join Now
        </a>
      </div>
      <img src={jobImage} alt="Join" className={styles.image}/>
    </div>
  </section>
);

export default Join;
