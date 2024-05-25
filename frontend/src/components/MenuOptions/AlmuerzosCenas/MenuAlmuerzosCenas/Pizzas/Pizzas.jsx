import React from 'react'
import style from './Pizzas.module.scss'
import PizzaItem from './PizzasItems/PizzasItems';
import Header from '../../Header/Header';
import { useNavigate } from 'react-router-dom';

export default function Pizzas() {

  const P_Items = [

    { name: "Común / Muzarella", price1: "$6000", price2: "$3400" },
    { name: "Especial", price1: "$6300", price2: "$3600" },
    { name: "Fugazzeta", price1: "$6300", price2: "$3700" },
    { name: "Napolitana", price1: "$5500", price2: "$3700" },
    { name: "Ternera", price1: "$7500", price2: "$4200" },
    { name: "Calabresa", price1: "$7500", price2: "$4200" },
    { name: "Rúcula", price1: "???", price2: "???" }

  ];

  const navigate = useNavigate('/');

  return (
    <div className={style.Pizzas}>
      <Header />
      <div className={style.Boton_retroceso}>
        <button className={style.Boton} onClick={() => navigate(-1)}>Atras</button>
      </div>
      <div className={style.menu}>
        <h2 className={style.titulo}>Pizzas</h2>
        <ul className={style.items}>
          {P_Items.map((item, index) => (
            <PizzaItem
              key={index}
              name={item.name}
              price1={item.price1}
              price2={item.price2}
            />
          ))}
        </ul>
      </div>
    </div>

  )
}
