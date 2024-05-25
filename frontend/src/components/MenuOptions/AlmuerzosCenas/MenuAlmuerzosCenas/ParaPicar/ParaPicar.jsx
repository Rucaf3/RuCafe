import React from 'react'
import ParaPicarItems from './ParaPicarItems/ParaPicarItems';

export default function ParaPicar() {

  const Picar_Items = [

    { name: "Empanadas de Carne o Pollo", price: "$800" },
    { name: "Porción de papas fritas", price: "$3500" },
    { name: "Porción de papas fritas c/ queso gratinado", price: "$4500" },
    { name: "Porción de papas fritas c/ queso gratinado + jamón", price: "$5000" },
    { name: "Picada Grande", price: "$17000" }

  ];

  return (
    <div className='menu'>
      <h2 className='titulo'>Para Picar</h2>
      <ul className='items'>
        {Picar_Items.map((item, index) => (
          <ParaPicarItems
            key={index}
            name={item.name}
            price={item.price}
          />
        ))}
      </ul>
    </div>
  )
}
