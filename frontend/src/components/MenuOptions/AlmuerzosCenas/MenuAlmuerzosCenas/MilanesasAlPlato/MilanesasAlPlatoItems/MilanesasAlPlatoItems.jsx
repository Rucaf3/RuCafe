import React from 'react'

const MilanesasAlPlatoItems = ({name, price}) => {
    return (
        <li>
            {name}
            <span>{price}</span>
        </li>
    );
}

export default MilanesasAlPlatoItems;