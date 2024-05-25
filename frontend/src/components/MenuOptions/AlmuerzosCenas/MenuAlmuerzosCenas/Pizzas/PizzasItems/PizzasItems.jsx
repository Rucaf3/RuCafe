import React from 'react';

const PizzaItem = ({ name, price1, price2 }) => {
  return (
    <li>
      <div>{name}</div>
      <div>
        <span>{price1}</span>
        <span>{price2}</span>
      </div>
    </li>
  );
};

export default PizzaItem;
