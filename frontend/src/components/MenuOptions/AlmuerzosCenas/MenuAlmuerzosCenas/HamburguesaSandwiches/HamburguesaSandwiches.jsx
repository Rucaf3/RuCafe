import React from 'react'
import './HamburguesaSandwiches.scss'
import HamburguesasItems from './HamburguesasItems/HamburguesasItems';
import MilanesasItems from './MilanesasItems/MilanesasItems';
import LomitosItems from './LomitosItems/LomitosItems';

export default function HamburguesaSandwiches() {

  const hamburguesaItems = [

    { name: "Común / Clásica", price: "$4000" },
    { name: "Super", price: "$4900" },
    { name: "Ruca", price: "$5100" }

  ];

  const lomitoItems = [

    { name: "Común / Clásica", price: "$5400" },
    { name: "Super", price: "$5900" },
    { name: "Ruca", price: "$6800" }

  ];

  const milanesaItems = [

    { name: "Común / Clásica", price: "$4000" },
    { name: "Super", price: "$4500" },
    { name: "Ruca", price: "$5000" }

  ];

  return (
    <div className='menu'>
      <h2 className='titulo'>Hamburguesas</h2>
      <ul className='items'>
        {hamburguesaItems.map((item, index) => (
          <HamburguesasItems 
          key={index}
          name={item.name}
          price={item.price}
          />
        ))}
      </ul>
      <h2 className='titulo'>Milanesas</h2>
      <ul className='items'>
        {milanesaItems.map((item, index) => (
          <MilanesasItems 
          key={index}
          name={item.name}
          price={item.price}
          />
        ))}
      </ul>
      <h2 className='titulo'>Lomimtos</h2>
      <ul className='items'>
        {lomitoItems.map((item, index) => (
          <LomitosItems
          key={index}
          name={item.name}
          price={item.price}
          />
        ))}
      </ul>
    </div>
  )
}
