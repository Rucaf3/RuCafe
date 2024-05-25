import React from 'react'

const PanaderiaItems = ({name, price}) => {
  return (
    <li>
      {name}
      <span>{price}</span>
    </li>
  )
}
export default PanaderiaItems;