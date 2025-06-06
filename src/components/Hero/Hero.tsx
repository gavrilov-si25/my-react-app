import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import styles from './Hero.module.css';
import heroImage1 from '/images/hero-image.png';
import heroImage2 from '/images/info-image.png';
import { Link } from 'react-router';

const Hero: React.FC = () => (
  <section className={styles.hero}>
    <div className={styles.content}>
      <h1 className={styles.title}>
        Candidates with Creative & <br /> Engineering Backgrounds
      </h1>
      <p className={styles.text}>
        This is the place to show yourself and land entry level jobs at cutting-edge companies. Launch your career here.
      </p>
      <Link to="/" className={styles.cta}>
        Join Now
      </Link>
      <p className={styles.text}>
        Looking for candidates?{' '}
        <Link to="/" className={styles.link}>
          Hire now
        </Link>
      </p>
      <div className={styles.gradient}>
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 7000, disableOnInteraction: false }}
          className={`${styles.swiper} swiper`}
        >
          <SwiperSlide>
            <img src={heroImage1} alt="Hero 1" className={styles.image} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={heroImage2} alt="Hero 2" className={styles.image} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
);

export default Hero;
