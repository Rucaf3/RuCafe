import React from 'react';

const CafeteriaItems = ({ name, price, descripcion }) => {
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
          {price}
        </span>
      </div>
    </li>
  );
};

export default CafeteriaItems;
