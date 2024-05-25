import React from 'react';

const PizzaItem = ({ name, price1, price2, descripcion }) => {
  return (

    <li>
      <div>
        <p style={{
          fontWeight: 'bold'
        }}>
          {name}
        </p>
        <p>
          {descripcion}
        </p>
      </div>
      <div style={{
        display: 'flex',
        alignItems: 'center'
      }}>
        <span style={{
          marginLeft: '10px',
          fontWeight: '600',
          color: '#464646',
          backgroundColor: '#daa97f',
          padding: '0px 4px',
          borderRadius: '8px'
        }}>
          {price1}
        </span>
      </div>
      <div style={{
        display: 'flex',
        alignItems: 'center'
      }}>
        <span style={{
          marginLeft: '10px',
          fontWeight: '600',
          color: '#464646',
          backgroundColor: '#daa97f',
          padding: '0px 4px',
          borderRadius: '8px'
        }}>
          {price2}
        </span>
      </div>
    </li>

  );
};

export default PizzaItem;
