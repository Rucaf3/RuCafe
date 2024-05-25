import React from 'react'

const CafeteriaItems = ({name, price}) => {
  return (
    <li>
      {name}
      <span>{price}</span>
    </li>
  )
}
export default CafeteriaItems;