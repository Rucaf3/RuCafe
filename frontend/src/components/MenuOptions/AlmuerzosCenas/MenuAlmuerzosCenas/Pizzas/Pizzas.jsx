import React from 'react';
import style from './Pizzas.module.scss';
import PizzaItem from './PizzasItems/PizzasItems';
import Header from '../../Header/Header';
import { useNavigate } from 'react-router-dom';

export default function Pizzas() {

  const P_Items = [
    { name: "Común / Muzzarella", descripcion: "Queso muzzarella + Aceitunas", price1: "$20700", price2: "$16700" },
    { name: "Especial", descripcion: "Queso muzzarella, Jamón cocido + Aceitunas y Morrones", price1: "$21000", price2: "$16800" },
    { name: "Fugazzeta", descripcion: "Queso muzzarella + Cebolla + Aceitunas", price1: "$21000", price2: "$16800" },
    { name: "Napolitana", descripcion: "Queso muzzarella + Tomate + Aceitunas", price1: "$20900", price2: "$16900" },
    { name: "Ternera", descripcion: "Queso muzzarella + Ternera + Aceitunas y Morrones", price1: "$22200", price2: "$17400" },
    { name: "Calabresa", descripcion: "Queso muzzarella + Pepperoni + Aceitunas", price1: "$22200", price2: "$17400" },
    { name: "Rúcula", descripcion: "Queso muzzarella + Rúcula + Tomate", price1: "S/P", price2: "S/P" },
    { name: "Ruca", descripcion: "Queso muzarella + Papas fritas + Aceitunas", price1: "$22200", price2: "$17400" }

  ];

  const navigate = useNavigate();
 
  return (
    <div className={style.Pizzas}>
      <Header />
      <div className={style.Boton_retroceso}>
        <button className={style.Boton} onClick={() => navigate(-1)}>Atrás</button>
      </div>
      <div className={style.menu}>
        <h2 className={style.titulo}>Pizzas</h2>
        <div className={style.preciosBox}>
          <p>8 porciones</p>
          <p>4 porciones</p>
        </div>
        <ul className={style.items}>
          {P_Items.map((item, index) => (
            <PizzaItem
              key={index}
              name={item.name}
              price1={item.price1}
              price2={item.price2}
              descripcion={item.descripcion}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
