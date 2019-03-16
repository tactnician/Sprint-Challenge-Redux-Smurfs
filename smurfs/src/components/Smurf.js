import React from 'react'

export default const Smurf = ({ name, age, height}) => {
    return(
        <div>
            <p>{name}</p>
            <p>{age}</p>
            <p>{height}</p>
        </div>
    )
}
