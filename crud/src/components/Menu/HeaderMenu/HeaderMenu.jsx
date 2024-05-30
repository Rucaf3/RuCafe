import React, { useState } from 'react';
import styles from './HeaderMenu.module.scss';
import Logo from '../../../assets/Logo.png';
import { IcBaselineSearch } from '../../../assets/components/IcBaselineSearch';
import User from './User/User';

export default function HeaderMenu({ onSearch }) {
    const [query, setQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <header className={styles.Menu_header}>
            <img src={Logo} alt="Logo" className={styles.Menu_logo} />
            <div className={styles.Search_bar}>
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
            <User />
        </header>
    );
}
