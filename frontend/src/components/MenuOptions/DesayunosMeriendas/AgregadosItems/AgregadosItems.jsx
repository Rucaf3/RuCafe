import React from 'react'

const AgregadosItems = ({name, price}) => {
  return (
    <li>
      {name}
      <span>{price}</span>
    </li>
  )
}
export default AgregadosItems;
 