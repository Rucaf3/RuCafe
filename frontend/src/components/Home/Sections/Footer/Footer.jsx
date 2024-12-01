import React from 'react';
import frase from '../../../../assets/Frase.png';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Footer() {
  return (
    <div style={{ textAlign: 'center' }}>
      
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
