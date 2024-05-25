import React from 'react'

const LicuadosItems = ({ name, price }) => {
  return (
    <li>
      {name}
      <span>{price}</span>
    </li>
  )
} 

export default LicuadosItems;