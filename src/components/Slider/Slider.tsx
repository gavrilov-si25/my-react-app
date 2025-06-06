import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import styles from './Slider.module.css';
import infoImage from '/images/info-image.png';
import heroImage from '/images/hero-image.png';

const AUTOPLAY_MS = 7000;

const Slider: React.FC = () => (
  <section className={styles.slider}>
    <h3 className={styles.title}>Connect With Slider</h3>
    <p className={styles.text}>
      Get instant access to a curated pool of top creative & tech talent actively seeking their next role. Find highly
      qualified job!
    </p>

    <div className={styles.sliderArea}>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        spaceBetween={0}
        loop
        autoplay={{ delay: AUTOPLAY_MS, disableOnInteraction: false }}
        className={styles.container}
      >
        <SwiperSlide>
          <img src={infoImage} alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={heroImage} alt="Slide 2" />
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
);

export default React.memo(Slider);
