import React from 'react';
import style from './Bebidas.module.scss';
import BebidasItems from './BebidasItems/BebidasItems';
import Header from '../AlmuerzosCenas/Header/Header';
import { useNavigate } from 'react-router-dom';

export default function Bebidas() {

  const SinAlcohol_items = [
    { name: 'Gaseosa línea Coca Cola 350ml', descripcion: "", price: '$1600' },
    { name: 'Gaseosa línea Coca Cola 1 litro', descripcion: "", price: '$2700' },
    { name: 'Agua Saborizada 500ml', descripcion: "", price: '$1700' },
    { name: 'Agua mineral con gas / sin gas', descripcion: "", price: '$1500' },
    { name: 'Jugo de naranja jarrita', descripcion: "", price: '$2200' },
    { name: 'Jugo de naranja 1 litro', descripcion: "", price: '$3300' },
    { name: 'Limonada jarrita', descripcion: "", price: '$2100' },
    { name: 'Limonada 1 litro', descripcion: "", price: '$3200' }
];

const ConAlcohol_items = [
    { name: 'Cerveza en latas', descripcion: "(Consultar variedad)", price: '$2200' },
    { name: 'Quilmes 1 litro', descripcion: "", price: '$3300' },
    { name: 'Salta Negra 1 litro', descripcion: "", price: '$3500' },
    { name: 'Heineken 1 litro', descripcion: "", price: '$4700' },
    { name: 'Stella Artois 1 litro', descripcion: "", price: '$4700' }
];


  const navigate = useNavigate();

  return (
    <div className={style.Bebidas}>
      <Header />
      <div className={style.Boton_retroceso}>
        <button className={style.Boton} onClick={() => navigate(-1)}>Atrás</button>
      </div>
      <div className={style.menu}>
        <h2 className={style.titulo}>Sin Alcohol</h2>
        <ul className={style.items}>
          {SinAlcohol_items.map((item, index) => (
            <BebidasItems
              key={index}
              name={item.name}
              price={item.price}
              descripcion={item.descripcion}
            />
          ))}
        </ul>
        <h2 className={style.titulo}>Con Alcohol</h2>
        <ul className={style.items}>
          {ConAlcohol_items.map((item, index) => (
            <BebidasItems
              key={index}
              name={item.name}
              price={item.price}
              descripcion={item.descripcion}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
