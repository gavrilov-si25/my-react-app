import React, { useEffect, useState } from 'react';
import styles from './Preloader.module.css';

interface PreloaderProps {
  isLoading: boolean;
}

const Preloader: React.FC<PreloaderProps> = ({ isLoading }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={`${styles.preloader} ${!isLoading ? styles.hidden : ''}`}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default Preloader;
