import React, { useState } from 'react';
import styles from './LoginForm.module.scss';
import logo from '../../assets/Logo.png';

const LoginForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.logo}>
        <img src={logo} alt='Logo' />
      </div>
      <div className={styles.loginForm}>
        <h2>INICIAR SESIÓN</h2>
        <form>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Ingrese su Email..." />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Contraseña</label>
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              placeholder="Ingrese su Contraseña..."
            />
            <span className={styles.togglePassword} onClick={togglePasswordVisibility}>
              {passwordVisible ?
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M11.83 9L15 12.16V12a3 3 0 0 0-3-3zm-4.3.8l1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 0 0 3 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 0 1-5-5c0-.79.2-1.53.53-2.2M2 4.27l2.28 2.28l.45.45C3.08 8.3 1.78 10 1 12c1.73 4.39 6 7.5 11 7.5c1.55 0 3.03-.3 4.38-.84l.43.42L19.73 22L21 20.73L3.27 3M12 7a5 5 0 0 1 5 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75c-1.73-4.39-6-7.5-11-7.5c-1.4 0-2.74.25-4 .7l2.17 2.15C10.74 7.13 11.35 7 12 7"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><circle cx="256" cy="256" r="64" fill="currentColor"/><path fill="currentColor" d="M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11c-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72c38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 0 0-.1-34.76M256 352a96 96 0 1 1 96-96a96.11 96.11 0 0 1-96 96"/></svg>}
            </span>
          </div>
          <button type="submit">INGRESAR</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
