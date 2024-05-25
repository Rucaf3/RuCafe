import React from 'react'

const HamburguesasItems = ({name, price}) => {
    return (
        <li>
            {name}
            <span>{price}</span>
        </li>
    );
}

export default HamburguesasItems;