import React from 'react';
import style from './DesayunosMeriendas.module.scss';
import DesayunosMeriendasItems from './DesayunosMeriendasItems/DesayunosMeriendasItems';
import AgregadosItems from './AgregadosItems/AgregadosItems';
import Header from '../AlmuerzosCenas/Header/Header';
import { useNavigate } from 'react-router-dom';

export default function DesayunosMeriendas() {

  const DM_items = [
    { name: 'CLÁSICO', price: '$2300', description: 'Infusión + 2 Tortillas o Medialunas' },
    { name: 'LIGHT', price: '$3700', description: 'Infusión + Tostadas de Pan Lactal + Mermelada + Queso Crema + Jugo de Naranja + Yogurt con Granola' },
    { name: 'EJECUTIVO', price: '$3500', description: 'Infusión + Tostadas en Pan Lactal + Queso Blanco + Mermelada + Jugo de Naranja' },
    { name: 'PROTEICO', price: '$4700', description: 'Infusión + Tostadas en Pan Lactal Negro + Huevo Revuelto + Jamón Cocido + Queso Crema + Jugo de Naranja' },
    { name: 'MAFALDA', price: '$4900', description: 'Infusión + 2 Medialunas de Jamón y Queso + Jugo de Naranja' },
    { name: 'CONTINENTAL', price: '$4300', description: 'Infusión + Pan de Campo + Manteca, Dulce de Leche o Mermelada + Jugo de Naranja + Ensalada de Fruta' },
    { name: 'SALUDABLE', price: '$3200', description: 'Infusión + 2 Fetas de Queso + 2 Fetas de Jamón + Jugo de Naranja' },
    { name: 'SUPER RUCA', price: '$7500', description: 'Infusión + 1 Omelette + Jugo de Naranja' },
    { name: 'SIN TACC', price: '$2300', description: 'Infusión + Galletas de Arroz + Mermelada + Queso Untable' },
    { name: 'DELICIA DE JAMÓN Y QUESO', price: '$4000', description: 'Infusión + 2 Fetas de Queso + 2 Fetas de Jamón + Tostadas de Pan Lactal Negro' }
];

const A_items = [
    { name: 'Vasito de Yogurt o Jugo Chiquito', price: '$1700' },
    { name: 'Vasito de Yogurt con Granola Chiquito', price: '$1700' },
    { name: 'Compotera de Yogurt con Granola', price: '$300' },
    { name: 'Porción de Queso / Mermelada / Dulce de Leche / Manteca', price: '$1800' },
    { name: 'Compotera de Ensalada de Frutas', price: '$3500' },
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
