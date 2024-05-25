import React from 'react'

const MilanesasItems = ({ name, price }) => {
    return (
        <li>
            {name}
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
        </li>
    );
}

export default MilanesasItems;