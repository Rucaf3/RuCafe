import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.scss';
import logo from '../../../../assets/Logo.png';

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className='Header'>
      <div className='Logo-container' onClick={() => navigate('/')}>
        <img src={logo} alt='Logo' />
      </div>
    </header>
  );
}
