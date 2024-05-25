import React from 'react'

const LomitosItems = ({name, price}) => {
    return (
        <li>
            {name}
            <span>{price}</span>
        </li>
    );
}

export default LomitosItems;