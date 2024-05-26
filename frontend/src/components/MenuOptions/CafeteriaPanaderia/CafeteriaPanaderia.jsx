import React from 'react';
import style from './CafeteriaPanaderia.module.scss';
import CafeteriaItems from './CafeteriaItems/CafeteriaItems';
import PanaderiaItems from './PanaderiaItems/PanaderiaItems';
import Header from '../AlmuerzosCenas/Header/Header';
import { useNavigate } from 'react-router-dom';

export default function CafeteriaPanaderia() {

  const Ca_items = [
    { name: "Café/Cortado", descripcion: "Café o Café con leche Chico", price: "$1300" },
    { name: "Café en jarrita", descripcion: "Café o Café con leche en Jarrita", price: "$1400" },
    { name: "Café con leche", descripcion: "Grande", price: "$1400" },
    { name: "Cortado doble", descripcion: "Doble ración de café", price: "$1600" },
    { name: "Macchiato", descripcion: "Café con espuma", price: "$1800" },
    { name: "Lágrima", descripcion: "Poco café y mucha leche", price: "$1600" },
    { name: "Cappuccino", descripcion: "Café con leche y mucha espuma con canela o chocolate", price: "$2100" },
    { name: "Té con leche", descripcion: "", price: "$1600" },
    { name: "Té", descripcion: "", price: "$1300" },
    { name: "Mate cocido", descripcion: "", price: "$1300" },
    { name: "Submarino", descripcion: "", price: "$2100" }
  ];

  const P_items = [
    { name: "Tortilla", descripcion: "Negra, negra con semilla, de campo, pan francés", price: "$600" },
    { name: "Tostadas", descripcion: "", price: "$600" },
    { name: "Medialunas", descripcion: "", price: "$2100" },
    { name: "Medialunas con jamón y queso", descripcion: "", price: "$1400" },
    { name: "Croissant", descripcion: "", price: "S/P" },
    { name: "Croissant con jamón y queso", descripcion: "", price: "S/P" },
    { name: "Alfajores", descripcion: "(Consultar variedad)", price: "$2100" }
  ];

  const navigate = useNavigate();

  return (
    <div className={style.CafeteriaPanaderia}>
      <Header />
      <div className={style.Boton_retroceso}>
        <button className={style.Boton} onClick={() => navigate(-1)}>Atrás</button>
      </div>
      <div className={style.menu}>
        <h2 className={style.titulo}>Cafetería</h2>
        <ul className={style.items}>
          {Ca_items.map((item, index) => (
            <CafeteriaItems
              key={index}
              name={item.name}
              price={item.price}
              descripcion={item.descripcion}
            />
          ))}
        </ul>
        <h2 className={style.titulo}>Panadería</h2>
        <ul className={style.items}>
          {P_items.map((item, index) => (
            <PanaderiaItems
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
