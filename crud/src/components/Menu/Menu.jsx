import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './menu.module.scss';
import HeaderMenu from './HeaderMenu/HeaderMenu';

function Menu() {

  const navigate = useNavigate();

  const navegacion = (route) => {
    navigate(route);
  };

  const menuItems = [
    { name: 'Desayunos & Meriendas', route: '/lista' },
    { name: 'Cafetería & Panadería', route: '/lista' },
    { name: 'Sándwiches', route: '/lista' },
    { name: 'Licuados', route: '/lista' },
    { name: 'Bebidas', route: '/lista' },
    { name: 'Para Picar', route: '/lista' },
    { name: 'Pizzas', route: '/lista' },
    { name: 'Hamburguesas y sandwiches', route: '/lista' },
    { name: 'Milanesas al Plato', route: '/lista' }
  ];


  return (
    <div className={styles['menu-container']}>
      <HeaderMenu />
      <div className={styles['menu-grid']}>
        <div className={styles.Button_menu}>
          {menuItems.map((item, index) => (
            <button
              key={index}
              className={styles.Button}
              onClick={() => navegacion(item.route)}
            >
              <p>{item.name}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
