import React from 'react';
import style from './DesayunosMeriendas.module.scss';
import DesayunosMeriendasItems from './DesayunosMeriendasItems/DesayunosMeriendasItems';
import AgregadosItems from './AgregadosItems/AgregadosItems';
import Header from '../AlmuerzosCenas/Header/Header';
import { useNavigate } from 'react-router-dom';

export default function DesayunosMeriendas() {

  const DM_items = [
    { name: 'CHURROS', price: 'S/P', description: 'Infusión + 3 Churros' },
    { name: 'CLÁSICO', price: '$4800', description: 'Infusión + 2 Tortillas o Medialunas' },
    { name: 'LIGHT', price: '$7200', description: 'Infusión + Tostadas de Pan Lactal + Mermelada + Queso Crema + Jugo de Naranja + Yogurt con Granola' },
    { name: 'EJECUTIVO', price: '$6500', description: 'Infusión + Tostadas en Pan Lactal + Queso Blanco + Mermelada + Jugo de Naranja' },
    { name: 'PROTEICO', price: '$9100', description: 'Infusión + Tostadas en Pan Lactal Negro + Huevo Revuelto + Jamón Cocido + Queso Crema + Jugo de Naranja' },
    { name: 'MAFALDA', price: '$8300', description: 'Infusión + 2 Medialunas de Jamón y Queso + Jugo de Naranja' },
    { name: 'CONTINENTAL', price: '$8100', description: 'Infusión + Pan de Campo + Manteca, Dulce de Leche o Mermelada + Jugo de Naranja + Ensalada de Fruta' },
    { name: 'SALUDABLE', price: '$6000', description: 'Infusión + 2 Fetas de Queso + 2 Fetas de Jamón + Jugo de Naranja' },
    { name: 'SUPER RUCA', price: '$11500', description: 'Infusión + 1 Omelette + Jugo de Naranja' },
    { name: 'SIN TACC', price: '$5600', description: 'Infusión + Galletas de Arroz + Mermelada + Queso Untable' },
    { name: 'DELICIA DE JAMÓN Y QUESO', price: '$6900', description: 'Infusión + 2 Fetas de Queso + 2 Fetas de Jamón + Tostadas de Pan Lactal Negro' },
    { name: 'AVOCADO', price: '$9700', description: ' Infusion + 2 Tostadas con Palta y Huevo + Jugo de Naranja' },
    { name: 'BRUNCH PARA DOS', price: '$25500', description: '2 Infusiones + 2 Medialunas con Jamon y Queso + 2 Tostadas Negras con Palta y Huevo + 2 Jugos de Naranja + Copon de Granola con Miel y Frutas de Estacion ' }
];

const A_items = [
    { name: 'Vasito de Yogurt o Jugo Chiquito', price: '$2500' },
    { name: 'Vasito de Yogurt con Granola Chiquito', price: '$3500' },
    { name: 'Porcion de churros', price: '$2500' },
    { name: 'Compotera de Yogurt con Granola', price: '$5200' },
    { name: 'Porción de Queso / Mermelada / Dulce de Leche / Manteca', price: '$3000' },
    { name: 'Compotera de Ensalada de Frutas', price: '$6200' },
    { name: 'Fiambres cada feta', price: '$1000' },
    { name: 'Huevos cada uno', price: '$1500' },
    { name: 'Palta', price: '$3500' },


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
