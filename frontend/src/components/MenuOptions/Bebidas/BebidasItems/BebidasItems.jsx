import React from 'react'

const BebidasItems = ({name, price}) => {
  return (
    <li>
      {name}
      <span>{price}</span>
    </li>
  )
}

export default BebidasItems;