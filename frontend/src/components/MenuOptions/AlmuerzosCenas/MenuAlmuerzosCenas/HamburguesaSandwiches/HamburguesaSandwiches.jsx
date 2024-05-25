import React from 'react'
import style from'./HamburguesaSandwiches.module.scss'
import HamburguesasItems from './HamburguesasItems/HamburguesasItems';
import MilanesasItems from './MilanesasItems/MilanesasItems';
import LomitosItems from './LomitosItems/LomitosItems';
import Header from '../../Header/Header';
import { useNavigate } from 'react-router-dom';

export default function HamburguesaSandwiches() {

  const hamburguesaItems = [

    { name: "Común / Clásica", price: "$4000" },
    { name: "Super", price: "$4900" },
    { name: "Ruca", price: "$5100" }

  ];

  const lomitoItems = [

    { name: "Común / Clásica", price: "$5400" },
    { name: "Super", price: "$5900" },
    { name: "Ruca", price: "$6800" }

  ];

  const milanesaItems = [

    { name: "Común / Clásica", price: "$4000" },
    { name: "Super", price: "$4500" },
    { name: "Ruca", price: "$5000" }

  ];

  const navigate = useNavigate('/');

  return (
    <div className={style.HamburguesasSandwiches}>
      <Header />
      <div className={style.Boton_retroceso}>
        <button className={style.Boton} onClick={() => navigate(-1)}>Atras</button>
      </div>
      <div className={style.menu}>
        <h2 className={style.titulo}>Hamburguesas</h2>
        <ul className={style.items}>
          {hamburguesaItems.map((item, index) => (
            <HamburguesasItems
              key={index}
              name={item.name}
              price={item.price}
            />
          ))}
        </ul>
        <h2 className={style.titulo}>Milanesas</h2>
        <ul className={style.items}>
          {milanesaItems.map((item, index) => (
            <MilanesasItems
              key={index}
              name={item.name}
              price={item.price}
            />
          ))}
        </ul>
        <h2 className={style.titulo}>Lomitos</h2>
        <ul className={style.items}>
          {lomitoItems.map((item, index) => (
            <LomitosItems
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
