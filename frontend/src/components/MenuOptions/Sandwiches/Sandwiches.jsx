import React from 'react'
import style from './Sandwiches.module.scss'
import SandwichesItems from './SandwichesItems/SandwichesItems';
import Header from '../AlmuerzosCenas/Header/Header';
import { useNavigate } from 'react-router-dom';

export default function Sandwiches() {
  
  const S_items = [
    { name: "1/2 Jamón y Queso", descripcion: "", price: "$5600" },
    { name: "Triple Jamón y Queso", descripcion: "", price: "$7500" },
    { name: "Triple Jamón, Queso y Tomate", descripcion: "", price: "$7700" },
    { name: "Triple de Ternera y Queso", descripcion: "", price: "$9300" },
    { name: "Triple de Ternera, Queso y Tomate", descripcion: "", price: "$9900" },
    { name: "Triple de Ternera + Lechuga y Tomate", descripcion: "", price: "$9800" },
    { name: "Triple de Pollo, Lechuga y Tomate", descripcion: "", price: "$8900" },
    { name: "Triple de Pollo, Queso y Tomate", descripcion: "", price: "$9500" },
    { name: "Vegetariano (lechuga, tomate, palta y huevo)", descripcion: "", price: "$7500" }

];


  const navigate = useNavigate();

  return (
    <div className={style.Sandwiches}>
      <Header />
      <div className={style.Boton_retroceso}>
        <button className={style.Boton} onClick={() => navigate(-1)}>Atrás</button>
      </div>
      <div className={style.menu}>
        <h2 className={style.titulo}>Sándwiches</h2>
        <ul className={style.items}>
          {S_items.map((item, index) => (
            <SandwichesItems
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
