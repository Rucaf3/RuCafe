import React from 'react'
import MilanesasAlPlatoItems from './MilanesasAlPlatoItems/MilanesasAlPlatoItems'

export default function MilanesasAlPlato() {

  const Milanesas_Items = [

    { name: "Milanesa Común con papas o ensalada (lechuga y tomate)", price: "$7000" },
    { name: "Milanesa Napolitana con papas o ensalada (lechuga y tomate)", price: "$7500" },
    { name: "Milanesa a Caballo con papas o ensalada (lechuga y tomate)", price: "$7500" },
    { name: "Milanesa a la Suiza con papas o ensalada (lechuga y tomate)", price: "$7900" },
    { name: "Milanesa de pollo Común con papas o ensalada (lechuga y tomate)", price: "???" },
    { name: "Milanesa de pollo Napolitana con papas o ensalada (lechuga y tomate)", price: "???" },
    { name: "Milanesa de pollo a Caballo con papas o ensalada (lechuga y tomate)", price: "???" }

  ]

  return (
    <div className='menu'>
      <h2 className='titulo'>Milanesas Al Plato</h2>
      <ul className='items'>
        {Milanesas_Items.map((item, index) => (
          <MilanesasAlPlatoItems
          key={index}
          name={item.name}
          price={item.price}
          />
        ))}
      </ul>
    </div>
  )
}
