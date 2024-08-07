import React from 'react';
import style from './MilanesasAlPlato.module.scss';
import MilanesasAlPlatoItems from './MilanesasAlPlatoItems/MilanesasAlPlatoItems';
import Header from '../../Header/Header';
import { useNavigate } from 'react-router-dom';

export default function MilanesasAlPlato() {
  
  const Milanesas_Items = [
    { name: "Milanesa Común con papas o ensalada", descripcion: "", price: "$7800" },
    { name: "Milanesa Napolitana con papas o ensalada", descripcion: "", price: "$8300" },
    { name: "Milanesa a Caballo con papas o ensalada", descripcion: "", price: "$8300" },
    { name: "Milanesa a la Suiza con papas o ensalada", descripcion: "", price: "$8700" },
    { name: "Milanesa de pollo Común con papas o ensalada", descripcion: "", price: "$7500" },
    { name: "Milanesa de pollo Napolitana con papas o ensalada", descripcion: "", price: "$8000" },
    { name: "Milanesa de pollo a Caballo con papas o ensalada", descripcion: "", price: "$8000" },
    { name: "Milanesa de pollo a la Suiza con papas o ensalada", descripcion: "", price: "$8400" }
];


  const navigate = useNavigate();

  return (
    <div className={style.MilanesasAlPlato}>
      <Header />
      <div className={style.Boton_retroceso}>
        <button className={style.Boton} onClick={() => navigate(-1)}>Atrás</button>
      </div>
      <div className={style.menu}>
        <h2 className={style.titulo}>Milanesas al Plato</h2>
        <ul className={style.items}>
          {Milanesas_Items.map((item, index) => (
            <MilanesasAlPlatoItems
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
