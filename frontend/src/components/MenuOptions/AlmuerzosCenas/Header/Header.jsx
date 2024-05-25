import React from 'react';
import './Header.scss';
import logo from '../../../../assets/Logo.png';

export default function Header() {
  return (
    <header className='Header'>
      <div className='Logo-container'>
        <img src={logo} alt='Logo' />
      </div>
    </header>
  );
}
