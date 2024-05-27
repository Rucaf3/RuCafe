import React, { useState } from 'react';
import styles from './LoginForm.module.scss';
import { MdiEye } from '../../assets/components/MdiEye';
import { MdiEyeOff } from '../../assets/components/MdiEyeOff';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    navigate('/menu'); // Navegar a la ruta del menú después del login
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.loginContainer}>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <h2>Login</h2>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
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
        <div className={styles.formGroup}>
          <label htmlFor="password">Contraseña</label>
          <div className={styles.passwordContainer}>
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
        <button type="submit" className={styles.loginButton}>INGRESAR</button>
      </form>
    </div>
  );
};

export default LoginForm;
