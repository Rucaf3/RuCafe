import React from 'react';
import style from './Licuados.module.scss';
import LicuadosItems from './LicuadosItems/LicuadosItems';
import Header from '../AlmuerzosCenas/Header/Header';
import { useNavigate } from 'react-router-dom';

export default function Licuados() {

  const L_items = [
    { name: "Licuado de Chocolate", descripcion: "Leche + Chocolate + Hielo", price: "$2200" },
    { name: "Licuado Simple (con leche o con agua)", descripcion: "Banana, frutilla, durazno, ananá, maracuyá", price: "$2200" },
    { name: "Licuado Especial con jugo de naranja", descripcion: "Frutilla, durazno, maracuyá", price: "$2500" },
    { name: "Frozen Frutal (con leche o con agua)", descripcion: "Incluye mix de banana, frutilla, durazno, ananá, maracuyá", price: "$2700" }
];


  const navigate = useNavigate();

  return (
    <div className={style.Licuados}>
      <Header />
      <div className={style.Boton_retroceso}>
        <button className={style.Boton} onClick={() => navigate(-1)}>Atrás</button>
      </div>
      <div className={style.menu}>
        <h2 className={style.titulo}>Licuados</h2>
        <ul className={style.items}>
          {L_items.map((item, index) => (
            <LicuadosItems
              key={index}
              name={item.name}
              price={item.price}
              descripcion={item.descripcion}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}
