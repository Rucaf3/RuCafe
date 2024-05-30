import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './User.module.scss'
import { FaRegularUser } from '../../../../assets/components/FaRegularUser'

export default function User() {
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleUserMenu = () => {
        setIsUserMenuOpen(!isUserMenuOpen);
    };

    const handleLogout = () => {
        navigate('/');
    };

    return (
        <div className={styles.User_icon} onClick={toggleUserMenu}>
            <FaRegularUser />
            {isUserMenuOpen && (
                <div className={styles.User_menu}>
                    <div className={styles.User_menuItem}>
                        <FaRegularUser className={styles.User_menuIcon} />
                        <p>Evelin Seifer<br />Made</p>
                    </div>
                    <button
                        className={styles.User_menuButton}
                        onClick={handleLogout}
                    >
                        Cerrar sesión
                    </button>
                </div>
            )}
        </div>
    )
}
