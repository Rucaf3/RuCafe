import React from 'react';
import frase from '../../../../assets/Frase.png';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Footer() {
  return (
    <div style={{ textAlign: 'center' }}>
      
      {/* Botón para calificar la experiencia */}
<a
  href="https://forms.gle/X2bHPwQTaG3nztxN8"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    display: 'inline-block',
    backgroundColor: '#daa97f',
    color: '#333',
    padding: '10px 18px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 'bold',
    marginBottom: '20px',
    fontSize: '15px',
    border: '2px solid #c98b5a',
    boxShadow: '0 2px 5px rgba(0,0,0,0.12)',
    transition: 'all 0.3s ease'
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.backgroundColor = '#c98b5a';
    e.currentTarget.style.transform = 'translateY(-2px)';
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.backgroundColor = '#daa97f';
    e.currentTarget.style.transform = 'translateY(0)';
  }}
>
  <span style={{ marginRight: '7px' }}>⭐</span>
  CALIFICÁ TU EXPERIENCIA
</a>
      {/* Botón de Instagram */}
      <a
        href="https://www.instagram.com/rucafe.tuc/profilecard/?igsh=M3FiaDF3d2p5bWxh"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'block', // Asegura que esté en su propia línea
          backgroundColor: '#daa97f',
          color: '#333',
          padding: '10px 20px',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 'bold',
          marginBottom: '20px', // Espacio debajo del botón para la imagen
          fontSize: '16px',
          transition: 'background-color 0.3s ease' // Animación para el hover
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = '#c98b5a'; // Color al hacer hover
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = '#daa97f'; // Color original
        }}
      >
        <i className="bi bi-instagram" style={{ marginRight: '8px', color: '#333' }}></i>
        ¡NUESTRO INSTAGRAM!
      </a>

      {/* Imagen debajo del botón */}
      <div style={{ display: 'block' }}>
        <img src={frase} alt='Frase' style={{ marginTop: '20px' }} />
      </div>
    </div>
  );
}
