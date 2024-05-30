// src/Lista.js
import React, { useState } from 'react';
import styles from './lista.module.scss';
import Logo from '../../../assets/Logo.png'
import { IcBaselineSearch } from '../../../assets/components/IcBaselineSearch';
import { FaRegularUser } from '../../../assets/components/FaRegularUser';
import { SolarPenLinear } from '../../../assets/components/SolarPenLinear';
import { MdiEye } from '../../../assets/components/MdiEye';
import { IconoirTrash } from '../../../assets/components/IconoirTrash';
import { useNavigate } from 'react-router-dom';
import { MdiEyeOff } from '../../../assets/components/MdiEyeOff';
import HeaderMenu from '../HeaderMenu/HeaderMenu';

function Lista({ onSearch }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [showVisibility, setShowVisibility] = useState(false);


  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const confirmDelete = (index) => {
    setDeleteIndex(index);
  };

  const toggleVisibility = () => {
    setShowVisibility(!showVisibility);
  };

  const handleDelete = (index) => {
    // Aquí agregar la lógica para eliminar el producto
    console.log(`Eliminar producto en el índice ${index}`);
    setDeleteIndex(null);
  };

  return (
    <div className={styles['lista-container']}>
      <HeaderMenu />
      <div className={styles['Boton_retroceso']}>
        <button className={styles['Boton']} onClick={() => navigate(-1)}>ATRAS</button>
      </div>
      <div className={styles['lista-content']}>
        {Array.from({ length: 12 }, (_, index) => (
          <div key={index} className={styles['lista-item']}>
            <div className={styles['group-actions']}>
              <input type="text" value="texto" className={styles['lista-text']} readOnly />
              <div className={styles['lista-actions']}>
                <button onClick={() => toggleExpand(index)}>
                  <SolarPenLinear />
                </button>
                {/* Revisar Esto */}
                <button
                  type="button"
                  className={styles.toggleButton}
                  onClick={toggleVisibility}
                >
                  {showVisibility ? <MdiEyeOff /> : <MdiEye />}
                </button>
                <button onClick={() => confirmDelete(index)}>
                  <IconoirTrash />
                </button>
              </div>
            </div>
            {expandedIndex === index && (
              <div className={styles['edit-dropdown']}>
                <input type="text" placeholder="Nombre Producto" />
                <input type="text" placeholder="Descripción del Producto" />
                <input type="text" placeholder="Precio" />
                <button className={styles['save-button']}>Guardar</button>
              </div>
            )}
            {deleteIndex === index && (
              <div className={styles['delete-confirmation']}>
                <p>¿Desea ELIMINAR este producto?</p>
                <button onClick={() => handleDelete(index)}>SI</button>
                <button onClick={() => setDeleteIndex(null)}>NO</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lista;
