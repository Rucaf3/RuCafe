import React from 'react'
import PizzaItem from './PizzasItems/PizzasItems';

export default function Pizzas() {

  const P_Items = [

    { name: "Común / Muzarella", price1: "$6000", price2: "$3400" },
    { name: "Especial", price1: "$6300", price2: "$3600" },
    { name: "Fugazzeta", price1: "$6300", price2: "$3700" },
    { name: "Napolitana", price1: "$5500", price2: "$3700" },
    { name: "Ternera", price1: "$7500", price2: "$4200" },
    { name: "Calabresa", price1: "$7500", price2: "$4200" },
    { name: "Rúcula", price1: "$1400", price2: "???" }

  ];

  return (
    <div className='menu'>
      <h2 className='titulo'>Pizzas</h2>
      <ul className='items'>
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
  )
}
