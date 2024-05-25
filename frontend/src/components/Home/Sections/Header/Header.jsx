import React from 'react';
import styles from './header.module.scss';
import logo from '../../../../assets/Logo.png'

export default function Header() {
  return (
    <header className={styles.Header}>
      <div className={styles['Logo-container']}>
        <img src={logo} alt='Logo' />
      </div>
    </header>
  );
}
