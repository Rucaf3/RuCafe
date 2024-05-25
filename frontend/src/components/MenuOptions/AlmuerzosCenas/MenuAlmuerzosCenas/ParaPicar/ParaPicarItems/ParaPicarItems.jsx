import React from 'react'

const ParaPicarItems = ({ name, price}) => {
  return (
    <li>
      {name}
      <span>{price}</span>
    </li>
  )
}

export default ParaPicarItems;