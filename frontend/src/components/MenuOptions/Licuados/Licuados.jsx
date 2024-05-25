import React from 'react'
import style from './Licuados.module.scss'
import LicuadosItems from './LicuadosItems/LicuadosItems';
import Header from '../AlmuerzosCenas/Header/Header';
import { useNavigate } from 'react-router-dom';

export default function Licuados() {

  const L_items = [

    { name: "Licuado Chocolate", price: "$2000" },
    { name: "Licuado Simple", price: "$2000" },
    { name: "Licuado Especial con jugo de naranja", price: "$2300" },
    { name: "Frozzen Frutal", price: "$2500" }

  ];

  const navigate = useNavigate('/');

  return (
    <div className={style.Licuados}>
      <Header />
      <div className={style.Boton_retroceso}>
        <button className={style.Boton} onClick={() => navigate(-1)}>Atras</button>
      </div>
      <div className={style.menu}>
      <h2 className={style.titulo}>Licuados</h2>
      <ul className={style.items}>
        {L_items.map((item, index) =>
          <LicuadosItems
            key={index}
            name={item.name}
            price={item.price}
          />)}
      </ul>
    </div>
    </div>
  )
}
