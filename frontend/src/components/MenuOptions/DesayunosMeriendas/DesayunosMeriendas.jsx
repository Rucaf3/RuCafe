import React from 'react'
import DesayunosMeriendasItems from './DesayunosMeriendasItems/DesayunosMeriendasItems';
import AgregadosItems from './AgregadosItems/AgregadosItems';

export default function DesayunosMeriendas() {

  const DM_items = [

    { name: 'CLASICO', price: '$1900', description: 'Infusión + 2 Tortillas o Medialunas' },
    { name: 'LIGHT', price: '$2700', description: 'Infusión + Tostadas de Pan Lactal + Mermelada + Queso crema + Jugo de Naranja + Yogurt con granola' },
    { name: 'EJECUTIVO', price: '$2600', description: 'Infusión + Tostadas en Pan Lactal + Queso blanco + Mermelada + Jugo de Naranja' },
    { name: 'PROTEICO', price: '$3600', description: 'Infusión + Tostadas en Pan Lactal Negro + Huevo revuelto + Jamón cocido + Queso crema + Jugo de Naranja' },
    { name: 'MAFALDA', price: '$3900', description: 'Infusión + 2 Medialunas de Jamón y Queso + Jugo de Naranja' },
    { name: 'CONTINENTAL', price: '$3300', description: 'Infusión + Pan de campo + manteca, dulce de leche o mermelada + Jugo de Naranja + Ensalada de Fruta' },
    { name: 'SALUDABLE', price: '$2500', description: 'Infusión + 2 Fetas de Queso + 2 Fetas de Jamón + Jugo de Naranja' },
    { name: 'SUPER RUCA', price: '$5000', description: 'Infusión + 1 Omelette + Jugo de Naranja' },
    { name: 'SIN TACC', price: '$2500', description: 'Infusión + Galletas de Arroz + Mermelada + Queso Untable' },
    { name: 'DELICIA DE JAMON Y QUESO', price: '$3000', description: 'Infusión + 2 Fetas de Queso + 2 Fetas de Jamón + Tostadas de pan lactal negro' },


  ];

  const A_items = [

    { name: 'Vasito de yogurt o jugo chiquito', price: '$1000' },
    { name: 'Vasito de yogurt con granola chiquito', price: '$1100' },
    { name: 'Compotera de yogurt con granola', price: '$2000' },
    { name: 'Proporcionado Queso / Mermelada', price: '$1000' }

  ];

  return (
    <div className='menu'>
      <h2 className='titulo'>Desayunos y Meriendas</h2>
      <ul className='items'>
        {DM_items.map((items, index) => (
          <DesayunosMeriendasItems
            key={index}
            name={items.name}
            price={items.price}
          />
        ))}
      </ul>
      <h2 className='titulo'>Agregados</h2>
      <ul className='items'>
        {A_items.map((items, index) => (
          <AgregadosItems
            key={index}
            name={items.name}
            price={items.price}
          />
        ))}
      </ul>

    </div>
  )
}
