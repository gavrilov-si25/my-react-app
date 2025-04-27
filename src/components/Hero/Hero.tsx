import React, { useEffect, useRef } from 'react';
import styles from './Hero.module.css';
import heroImage1 from '../../assets/img/hero-image.png';
import heroImage2 from '../../assets/img/info-image.png';

const Hero: React.FC = () => {
  const swiperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (swiperRef.current && (window as any).Swiper) {
      new (window as any).Swiper(swiperRef.current, {
        slidesPerView: 1,
        loop: true,
        autoplay: {
          delay: 7000,
        },
      });
    }
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Candidates with Creative & <br /> Engineering Backgrounds
        </h1>
        <p className={styles.text}>
          This is the place to show yourself and land entry level jobs at cutting-edge companies.
          Launch your career here.
        </p>
        <a href="#" className={styles.cta}>
          Join Now
        </a>
        <p className={styles.text}>
          Looking for candidates?{' '}
          <a href="#" className={styles.link}>
            Hire now
          </a>
        </p>
        <div className={styles.gradient}>
          <div ref={swiperRef} className="swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img src={heroImage1} alt="Hero 1" className={styles.image} />
              </div>
              <div className="swiper-slide">
                <img src={heroImage2} alt="Hero 2" className={styles.image} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
