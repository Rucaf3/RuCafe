import React from 'react'

const MilanesasItems = ({name, price}) => {
    return (
        <li>
            {name}
            <span>{price}</span>
        </li>
    );
}

export default MilanesasItems;