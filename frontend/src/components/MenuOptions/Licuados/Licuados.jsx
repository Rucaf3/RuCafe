import React from 'react'
import LicuadosItems from './LicuadosItems/LicuadosItems';

export default function Licuados() {

  const L_items = [

    { name: "Licuado Chocolate", price: "$2000" },
    { name: "Licuado Simple", price: "$2000" },
    { name: "Licuado Especial con jugo de naranja", price: "$2300" },
    { name: "Frozzen Frutal", price: "$2500" }

  ];

  return (
    <div className='menu'>
      <h2 className='titulo'>Licuados</h2>
      <ul className='items'>
        {L_items.map((item, index) =>
          <LicuadosItems
            key={index}
            name={item.name}
            price={item.price}
          />)}
      </ul>
    </div>
  )
}
