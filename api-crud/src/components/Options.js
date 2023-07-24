// * React Components
import React from 'react'

const Options = ({ value, isSelected }) => {

    const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);

    return (
        <option value={value} selected={isSelected}>
            {capitalizeFirstLetter(value)}
        </option>
    )
}

export default React.memo(Options)
