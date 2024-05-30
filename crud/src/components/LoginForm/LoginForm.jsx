import React, { useState } from 'react';
import styles from './LoginForm.module.scss';
import Logo from '../../assets/Logo.png';
import { MdiEye } from '../../assets/components/MdiEye';
import { MdiEyeOff } from '../../assets/components/MdiEyeOff';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        navigate('/menu'); // Navegar a la ruta del menú después del login
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError('Error connecting to server');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.fullContainer}>
      <div className={styles.loginContainer}>
        <div className={styles.logoContainer}>
          <img src={Logo} alt="Logo" />
        </div>
        <form onSubmit={handleSubmit} className={styles.loginForm}>
          <h2>Login</h2>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <div className={styles.inputContainer}>
              <input
                type="text"
                id="email"
                placeholder="Ingrese su Email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={styles.inputField}
              />
            </div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Contraseña</label>
            <div className={styles.inputContainer}>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Ingrese su Contraseña..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className={styles.inputPassword}
              />
              <button
                type="button"
                className={styles.toggleButton}
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <MdiEyeOff /> : <MdiEye />}
              </button>
            </div>
          </div>
          {error && <p className={styles.error}>{error}</p>}
          <button type="submit" className={styles.loginButton}>INGRESAR</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
