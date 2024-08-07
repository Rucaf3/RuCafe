import React from 'react';
import style from './HamburguesaSandwiches.module.scss';
import HamburguesasItems from './HamburguesasItems/HamburguesasItems';
import MilanesasItems from './MilanesasItems/MilanesasItems';
import LomitosItems from './LomitosItems/LomitosItems';
import Header from '../../Header/Header';
import { useNavigate } from 'react-router-dom';

export default function HamburguesaSandwiches() {

  const hamburguesaItems = [
    { name: "Común / Clásica", descripcion: "Con lechuga, tomate y aderezos", price: "$5200" },
    { name: "Super", descripcion: "Con Jamón, queso, lechuga, tomate y aderezos", price: "$6200" },
    { name: "Ruca", descripcion: "Con Huevo, jamón, queso, lechuga, tomate y aderezos + Papas Fritas", price: "$7200" }
];

const lomitoItems = [
    { name: "Común / Clásico", descripcion: "Con lechuga, tomate y aderezos", price: "$6600" },
    { name: "Super", descripcion: "Con Jamón, queso, lechuga, tomate y aderezos", price: "$7600" },
    { name: "Ruca", descripcion: "Con Huevo, jamón, queso, lechuga, tomate y aderezos + Papas Fritas", price: "$8600" }
];

const milanesaItems = [
    { name: "Común / Clásica", descripcion: "Con lechuga, tomate y aderezos", price: "$6000" },
    { name: "Super", descripcion: "Con Jamón, queso, lechuga, tomate y aderezos", price: "$7000" },
    { name: "Ruca", descripcion: "Con Huevo, jamón, queso, lechuga, tomate y aderezos + Papas Fritas", price: "$8000" }
];


  const navigate = useNavigate();

  return (
    <div className={style.HamburguesasSandwiches}>
      <Header />
      <div className={style.Boton_retroceso}>
        <button className={style.Boton} onClick={() => navigate(-1)}>Atrás</button>
      </div>
      <div className={style.menu}>
        <h2 className={style.titulo}>Hamburguesas</h2>
        <ul className={style.items}>
          {hamburguesaItems.map((item, index) => (
            <HamburguesasItems
              key={index}
              name={item.name}
              price={item.price}
              descripcion={item.descripcion}
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
              descripcion={item.descripcion}
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
              descripcion={item.descripcion}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
