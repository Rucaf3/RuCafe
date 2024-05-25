import React from 'react'
import style from './DesayunosMeriendas.module.scss'
import DesayunosMeriendasItems from './DesayunosMeriendasItems/DesayunosMeriendasItems';
import AgregadosItems from './AgregadosItems/AgregadosItems';
import Header from '../AlmuerzosCenas/Header/Header';
import { useNavigate } from 'react-router-dom';

export default function DesayunosMeriendas() {

  const DM_items = [

    { name: 'CLASICO', price: '$1900', description: 'Infusión + 2 Tortillas o Medialunas' },
    { name: 'LIGHT', price: '$2700', description: 'Infusión + Tostadas de Pan Lactal + Mermelada + Queso crema + Jugo de Naranja + Yogurt con granola' },
    { name: 'EJECUTIVO', price: '$2600', description: 'Infusión + Tostadas en Pan Lactal + Queso blanco + Mermelada + Jugo de Naranja' },
    { name: 'PROTEICO', price: '$3600', description: 'Infusión + Tostadas en Pan Lactal Negro + Huevo revuelto + Jamón cocido + Queso crema + Jugo de Naranja' },
    { name: 'MAFALDA', price: '$3900', description: 'Infusión + 2 Medialunas de Jamón y Queso + Jugo de Naranja' },
    { name: 'CONTINENTAL', price: '$3300', description: 'Infusión + Pan de campo + manteca, dulce de leche o mermelada + Jugo de Naranja + Ensalada de Fruta' },
    { name: 'SALUDABLE', price: '$2500', description: 'Infusión + 2 Fetas de Queso + 2 Fetas de Jamón + Jugo de Naranja' },
    { name: 'SUPER RUCA', price: '$5000', description: 'Infusión + 1 Omelette + Jugo de Naranja' },
    { name: 'SIN TACC', price: '$2500', description: 'Infusión + Galletas de Arroz + Mermelada + Queso Untable' },
    { name: 'DELICIA DE JAMON Y QUESO', price: '$3000', description: 'Infusión + 2 Fetas de Queso + 2 Fetas de Jamón + Tostadas de pan lactal negro' },


  ];

  const A_items = [

    { name: 'Vasito de yogurt o jugo chiquito', price: '$1000' },
    { name: 'Vasito de yogurt con granola chiquito', price: '$1100' },
    { name: 'Compotera de yogurt con granola', price: '$2000' },
    { name: 'Proporcionado Queso / Mermelada', price: '$1000' }

  ];
  
  const navigate = useNavigate('/');

  return (
    <div className={style.DesayunosMeriendas}>
      <Header />
      <div className={style.Boton_retroceso}>
        <button className={style.Boton} onClick={() => navigate(-1)}>Atras</button>
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

  )
}
