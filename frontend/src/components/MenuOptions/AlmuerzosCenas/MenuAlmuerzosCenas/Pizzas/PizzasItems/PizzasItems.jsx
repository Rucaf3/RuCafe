import React from 'react';

const PizzaItem = ({ name, price1, price2 }) => {
  return (
    <li>
      <div>{name}</div>
      <div>
        <p>8 Porciones =  <span style={{
        marginLeft: '10px',
        fontWeight: '600',
        color: '#464646',
        backgroundColor: '#daa97f',
        padding: '0px 4px',
        borderRadius: '8px'
      }}>
        {price1}
      </span></p>
        <p>4 Porciones = <span style={{
        marginLeft: '10px',
        fontWeight: '600',
        color: '#464646',
        backgroundColor: '#daa97f',
        padding: '0px 4px',
        borderRadius: '8px'
      }}>
        {price2}
      </span></p>
      </div>
    </li>
  );
};

export default PizzaItem;
