import React from 'react';
import style from './ParaPicar.module.scss';
import ParaPicarItems from './ParaPicarItems/ParaPicarItems';
import Header from '../../Header/Header';
import { useNavigate } from 'react-router-dom';

export default function ParaPicar() {

  const Picar_Items = [
    { name: "Empanadas de Carne o Pollo", descripcion: "", price: "$1500" },
    { name: "Porción de papas fritas", descripcion: "", price: "$4800" },
    { name: "Porción de papas fritas con queso gratinado", descripcion: "", price: "$5400" },
    { name: "Porción de papas fritas con queso gratinado + jamón", descripcion: "", price: "$5700" },
    { name: "Picada Grande", descripcion: "Queso, Jamón cocido, Roquefort, Ternera, Aceitunas, Milanesa, Papas y Salame", price: "S/P" },
    { name: "Porción de papas fritas con 2 huevos fritos ", descripcion: "", price: "$5300" },
    { name: "Salchipapas ", descripcion: "Porcion de papas fritas + salchicha", price: "$5900" },

  ];

  const navigate = useNavigate();

  return (
    <div className={style.ParaPicar}>
      <Header />
      <div className={style.Boton_retroceso}>
        <button className={style.Boton} onClick={() => navigate(-1)}>Atrás</button>
      </div>
      <div className={style.menu}>
        <h2 className={style.titulo}>Para Picar</h2>
        <ul className={style.items}>
          {Picar_Items.map((item, index) => (
            <ParaPicarItems
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
