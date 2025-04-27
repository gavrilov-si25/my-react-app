import React from 'react';
import styles from './CTA.module.css';
import jobImage from '../../assets/img/job-image.png';

const CTA: React.FC = () => (
  <section className={styles.cta}>
    <div className={styles.content}>
      <div className={styles.text}>
        <h2 className={styles.title}>Set up your profile. <br /> Let jobs find you.</h2>
        <a href="#" className={styles.button}>
          Join Now
        </a>
      </div>
      <img src={jobImage} alt="CTA" className={styles.image}/>
    </div>
  </section>
);

export default CTA;
