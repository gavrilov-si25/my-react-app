import React from 'react';
import styles from './Modal.module.css';

export interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => (
  <div className={styles.overlay}>
    <div className={styles.modal}>
      <form className={styles.form}>
        <h2 className={styles.title}>Login/Register</h2>
        <label htmlFor="name" className={styles.label}>
          Name:
        </label>
        <input type="text" id="name" name="name" required className={styles.input} />
        <label htmlFor="email" className={styles.label}>
          Email:
        </label>
        <input type="email" id="email" name="email" required className={styles.input} />
        <label htmlFor="password" className={styles.label}>
          Password:
        </label>
        <input type="password" id="password" name="password" required className={styles.input} />
        <div className={styles.buttons}>
          <button type="submit" className={styles.primary}>
            OK
          </button>
          <button type="button" onClick={onClose} className={styles.secondary}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
);

export default Modal;
