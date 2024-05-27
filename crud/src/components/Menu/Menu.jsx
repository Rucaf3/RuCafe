import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './menu.module.scss';
import { IcBaselineSearch } from '../../assets/components/IcBaselineSearch';
import { FaRegularUser } from '../../assets/components/FaRegularUser';
import Logo from '../../assets/Logo.png';

function Menu({ onSearch }) {
  const [query, setQuery] = useState('');
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

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

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <div className={styles['menu-container']}>
      <header className={styles['menu-header']}>
        <img src={Logo} alt="Logo" className={styles['menu-logo']} />
        <div className={styles['search-bar']}>
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="BÚSQUEDA..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit">
              <IcBaselineSearch />
            </button>
          </form>
        </div>
        <div className={styles['user-icon']} onClick={toggleUserMenu}>
          <FaRegularUser />
          {isUserMenuOpen && (
            <div className={styles['user-menu']}>
              <div className={styles['user-menu-item']}>
                <FaRegularUser className={styles['user-menu-icon']} />
                <p>Evelin Seifer<br />Made</p>
              </div>
              <button
                className={styles['user-menu-button']}
                onClick={() => navegacion('/logout')}
              >
                cerrar sesión
              </button>
            </div>
          )}
        </div>
      </header>
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
