import React from 'react'

const SandwichesItems = ({ name, price }) => {
  return (
    <li>
      {name}
      <span>{price}</span>
    </li>
  )
}

export default SandwichesItems;