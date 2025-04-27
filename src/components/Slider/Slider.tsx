import React, { useEffect, useRef } from 'react';
import styles from './Slider.module.css';
import infoImage from '../../assets/img/info-image.png';
import heroImage from '../../assets/img/hero-image.png';

declare global {
  interface Window {
    Swiper: any;
  }
}

const Slider: React.FC = () => {
  const swiperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (swiperRef.current && window.Swiper) {
      new window.Swiper(swiperRef.current, {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        slideToClickedSlide: true,
        autoplay: {
          delay: 7000,
          disableOnInteraction: false,
        },
      });
    }
  }, []);

  return (
    <section className={styles.slider}>
      <h3 className={styles.title}>Connect With Slider</h3>
      <p className={styles.text}>
        Get instant access to a curated pool of top creative & tech talent actively seeking their next role.
        Find highly qualified job!
      </p>

      <div className={styles.sliderArea}>
        <div className={styles.wrapper}>
          <div ref={swiperRef} className={`${styles.container} swiper`}>
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img src={infoImage} alt="Slide 1" />
              </div>
              <div className="swiper-slide">
                <img src={heroImage} alt="Slide 2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
