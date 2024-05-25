import React from 'react'
import style from'./ParaPicar.module.scss'
import ParaPicarItems from './ParaPicarItems/ParaPicarItems';
import Header from '../../Header/Header';
import { useNavigate } from 'react-router-dom';

export default function ParaPicar() {

  const Picar_Items = [

    { name: "Empanadas de Carne o Pollo", price: "$800" },
    { name: "Porción de papas fritas", price: "$3500" },
    { name: "Porción de papas fritas c/ queso gratinado", price: "$4500" },
    { name: "Porción de papas fritas c/ queso gratinado + jamón", price: "$5000" },
    { name: "Picada Grande", price: "$17000" }

  ];

  const navigate = useNavigate('/');

  return (
    <div className={style.ParaPicar}>
      <Header />
      <div className={style.Boton_retroceso}>
        <button className={style.Boton} onClick={() => navigate(-1)}>Atras</button>
      </div>
      <div className={style.menu}>
        <h2 className={style.titulo}>Para Picar</h2>
        <ul className={style.items}>
          {Picar_Items.map((item, index) => (
            <ParaPicarItems
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
