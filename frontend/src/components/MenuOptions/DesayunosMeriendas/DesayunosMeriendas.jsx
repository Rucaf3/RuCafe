import React from 'react';
import style from './DesayunosMeriendas.module.scss';
import DesayunosMeriendasItems from './DesayunosMeriendasItems/DesayunosMeriendasItems';
import AgregadosItems from './AgregadosItems/AgregadosItems';
import Header from '../AlmuerzosCenas/Header/Header';
import { useNavigate } from 'react-router-dom';

export default function DesayunosMeriendas() {

  const DM_items = [
    { name: 'CLÁSICO', price: '$2090', description: 'Infusión + 2 Tortillas o Medialunas' },
    { name: 'LIGHT', price: '$2970', description: 'Infusión + Tostadas de Pan Lactal + Mermelada + Queso Crema + Jugo de Naranja + Yogurt con Granola' },
    { name: 'EJECUTIVO', price: '$2860', description: 'Infusión + Tostadas en Pan Lactal + Queso Blanco + Mermelada + Jugo de Naranja' },
    { name: 'PROTEICO', price: '$3960', description: 'Infusión + Tostadas en Pan Lactal Negro + Huevo Revuelto + Jamón Cocido + Queso Crema + Jugo de Naranja' },
    { name: 'MAFALDA', price: '$4290', description: 'Infusión + 2 Medialunas de Jamón y Queso + Jugo de Naranja' },
    { name: 'CONTINENTAL', price: '$3630', description: 'Infusión + Pan de Campo + Manteca, Dulce de Leche o Mermelada + Jugo de Naranja + Ensalada de Fruta' },
    { name: 'SALUDABLE', price: '$2750', description: 'Infusión + 2 Fetas de Queso + 2 Fetas de Jamón + Jugo de Naranja' },
    { name: 'SUPER RUCA', price: '$5500', description: 'Infusión + 1 Omelette + Jugo de Naranja' },
    { name: 'SIN TACC', price: '$2750', description: 'Infusión + Galletas de Arroz + Mermelada + Queso Untable' },
    { name: 'DELICIA DE JAMÓN Y QUESO', price: '$3300', description: 'Infusión + 2 Fetas de Queso + 2 Fetas de Jamón + Tostadas de Pan Lactal Negro' }
];

const A_items = [
    { name: 'Vasito de Yogurt o Jugo Chiquito', price: '$1100' },
    { name: 'Vasito de Yogurt con Granola Chiquito', price: '$1210' },
    { name: 'Compotera de Yogurt con Granola', price: '$2200' },
    { name: 'Porción de Queso / Mermelada', price: '$1100' }
];

  const navigate = useNavigate();

  return (
    <div className={style.DesayunosMeriendas}>
      <Header />
      <div className={style.Boton_retroceso}>
        <button className={style.Boton} onClick={() => navigate(-1)}>Atrás</button>
      </div>
      <div className={style.menu}>
        <h2 className={style.titulo}>Desayunos y Meriendas</h2>
        <ul className={style.items}>
          {DM_items.map((item, index) => (
            <DesayunosMeriendasItems
              key={index}
              name={item.name}
              price={item.price}
              descripcion={item.description}
            />
          ))}
        </ul>
        <h2 className={style.titulo}>Agregados</h2>
        <ul className={style.items}>
          {A_items.map((item, index) => (
            <AgregadosItems
              key={index}
              name={item.name}
              price={item.price}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
