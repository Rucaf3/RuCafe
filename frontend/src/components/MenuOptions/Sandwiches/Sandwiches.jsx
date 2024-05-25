import React from 'react'
import SandwichesItems from './SandwichesItems/SandwichesItems';

export default function Sandwiches() {

  const S_items = [

    { name: "1/2 Jamón y Queso", price: "$1900" },
    { name: "Triple Jamón y Queso", price: "$3000" },
    { name: "Triple Jamón, Queso y Tomate", price: "$3200" },
    { name: "Triple de Ternera y Queso", price: "$3600" },
    { name: "Triple de Ternera, queso y tomate", price: "$3600" },
    { name: "Triple de Ternera + Lechuga y Tomate", price: "$3800" },
    { name: "Triple de Pollo, Lechuga y Tomate", price: "$4600" },
    { name: "Triple de Pollo, Queso y Tomate", price: "$3800" }

  ];


  return (
    <div className='menu'>
      <h2 className='titulo'>Sandwiches</h2>
      <ul className='items'>
        {S_items.map((item, index) => (
          <SandwichesItems
            key={index}
            name={item.name}
            price={item.price}
          />
        ))}
      </ul>
    </div>
  )
}
