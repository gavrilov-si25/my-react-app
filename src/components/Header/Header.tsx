import React from 'react';
import styles from './Header.module.css';
import logoImage from '../../assets/img/logo.svg';

export interface HeaderProps {
  onLoginClick: () => void;
  onSignUpClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLoginClick, onSignUpClick }) => (
  <header className={styles.header}>
    <div className={styles.content}>
      <div className={styles.logo}>
        <img src={logoImage} alt="Jobly Logo" className={styles.logoImg} />
      </div>
      <nav className={styles.nav}>
        <a href="#" className={styles.link}>
          For Recruiters
        </a>
        <button onClick={onSignUpClick} className={`${styles.linkb} ${styles.signUp}`}>
          Sign Up
        </button>
        <button onClick={onLoginClick} className={`${styles.linkb} ${styles.logIn}`}>
          Log in
        </button>
      </nav>
    </div>
  </header>
);

export default Header;
