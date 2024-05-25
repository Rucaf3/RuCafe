import React from 'react'
import style from './CafeteriaPanaderia.module.scss'
import CafeteriaItems from './CafeteriaItems/CafeteriaItems';
import PanaderiaItems from './PanaderiaItems/PanaderiaItems';
import Header from '../AlmuerzosCenas/Header/Header';
import { useNavigate } from 'react-router-dom';

export default function CafeteriaPanaderia() {

  const Ca_items = [

    { name: "Café/Cortado", price: "$1300" },
    { name: "Café en jarrita", price: "$1400" },
    { name: "Café con leche", price: "$1400" },
    { name: "Cortado doble", price: "$1600" },
    { name: "Macchiato", price: "$1800" },
    { name: "Lagrima", price: "$1600" },
    { name: "Cappuchino", price: "$2100" },
    { name: "Té con Leche", price: "$1600" },
    { name: "Té", price: "$1300" },
    { name: "Mate cocido", price: "$1300" },
    { name: "Submarino", price: "$2100" }

  ];

  const P_items = [

    { name: "Tortilla", price: "$600" },
    { name: "Tostadas", price: "$600" },
    { name: "Medialunas", price: "$2100" },
    { name: "Medialunas con jamón y queso", price: "$1400" },
    { name: "Croissant", price: "$2100" },
    { name: "Croissant con jamón y queso", price: "$2100" },
    { name: "Alfajores (Consultar variedad)", price: "$2100" }

  ];

  const navigate = useNavigate('/');

  return (
    <div className={style.CafeteriaPanaderia}>
      <Header />
      <div className={style.Boton_retroceso}>
        <button className={style.Boton} onClick={() => navigate(-1)}>Atras</button>
      </div>
      <div className={style.menu}>
        <h2 className={style.titulo}>Cafeteria</h2>
        <ul className={style.items}>
          {Ca_items.map((item, index) => (
            <CafeteriaItems
              key={index}
              name={item.name}
              price={item.price}
            />
          ))}
        </ul>
        <h2 className={style.titulo}>Panaderia</h2>
        <ul className={style.items}>
          {P_items.map((items, index) => (
            <PanaderiaItems
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
