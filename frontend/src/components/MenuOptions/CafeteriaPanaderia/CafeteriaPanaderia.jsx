import React from 'react';
import style from './CafeteriaPanaderia.module.scss';
import CafeteriaItems from './CafeteriaItems/CafeteriaItems';
import PanaderiaItems from './PanaderiaItems/PanaderiaItems';
import Header from '../AlmuerzosCenas/Header/Header';
import { useNavigate } from 'react-router-dom';

export default function CafeteriaPanaderia() {
  
  const Ca_items = [
    { name: "Pocillo / Cortado", descripcion: "Café o Café con leche Chico", price: "$3000" },
    { name: "Café en jarrita", descripcion: "Café o Café con leche en Jarrita", price: "$3500" },
    { name: "Café con leche", descripcion: "Grande", price: "$3700" },
    { name: "Cortado doble", descripcion: "Doble ración de café", price: "$3800" },
    { name: "Macchiato", descripcion: "Café con espuma", price: "$3900" },
    { name: "Lágrima", descripcion: "Poco café y mucha leche", price: "$3700" },
    { name: "Cappuccino", descripcion: "Café con leche y mucha espuma con canela o chocolate", price: "$4800" },
    { name: "Té con leche", descripcion: "", price: "$3700" },
    { name: "Té", descripcion: "", price: "$3000" },
    { name: "Mate cocido", descripcion: "", price: "$3000" },
    { name: "Submarino", descripcion: "", price: "$5000" },
    { name: "Capuchino con Crema", descripcion: "", price: "$6500" }
];

const P_items = [
    { name: "Tortilla", descripcion: "", price: "$1500" },
    { name: "Tostadas", descripcion: "Negra, negra con semilla, de campo, pan francés", price: "$1500" },
    { name: "Medialunas", descripcion: "", price: "$1500" },
    { name: "Medialunas con jamón y queso", descripcion: "", price: "$4000" },
    { name: "Croissant", descripcion: "", price: "S/P" },
    { name: "Croissant con jamón y queso", descripcion: "", price: "S/P" },
    { name: "Alfajores", descripcion: "(Consultar variedad)", price: "S/P" },
    { name: "Medialuna con Dulce de Lehe", descripcion: "", price: "$4000" }
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
