import React from 'react'
import style from'./Bebidas.module.scss'
import BebidasItems from './BebidasItems/BebidasItems';
import Header from '../AlmuerzosCenas/Header/Header';
import { useNavigate } from 'react-router-dom';

export default function Bebidas() {

  const ConAlcohol_items = [

    { name: 'Gaseosa línea Coca Cola 350ml', price: '$1400' },
    { name: 'Gaseosa línea Coca Cola 1 litro', price: '$2500' },
    { name: 'Agua Saborizada 500ml', price: '$1500' },
    { name: 'Agua mineral con gas / sin gas', price: '$1300' },
    { name: 'Jugo de naranja jarrita', price: '$2000' },
    { name: 'Jugo de naranja 1 litro', price: '$3100' },
    { name: 'Limonada jarrita', price: '$1900' },
    { name: 'Limonada 1 litro', price: '$3000' }

  ];

  const SinAlcohol_items = [

    { name: 'Cerveza en latas (Consultar variedad)', price: '$2000' },
    { name: 'Quilmes 1 litro', price: '$3100' },
    { name: 'Salta Negra 1 litro', price: '$3300' },
    { name: 'Heineken 1 litro', price: '$4500' },
    { name: 'Stella Artois 1 litro', price: '$4500' }

  ];

  const navigate = useNavigate('/');

  return (
    <div className={style.Bebidas}>
      <Header />
      <div className={style.Boton_retroceso}>
        <button className={style.Boton} onClick={() => navigate(-1)}>Atras</button>
      </div>
      <div className={style.menu}>
        <h2 className={style.titulo}>Con Alcohol</h2>
        <ul className={style.items}>
          {ConAlcohol_items.map((items, index) => (
            <BebidasItems
              key={index}
              name={items.name}
              price={items.price}
            />
          ))}
        </ul>
        <h2 className={style.titulo}>Sin Alcohol</h2>
        <ul className={style.items}>
          {SinAlcohol_items.map((items, index) => (
            <BebidasItems
              key={index}
              name={items.name}
              price={items.price}
            />
          ))}
        </ul>
      </div>
    </div>

  )
}
