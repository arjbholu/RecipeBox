import React from 'react'

const Description = ({Data}) => {
    return (
        <div> 
            <div>{Data.Title}</div>
            <div>{Data.Description}</div>
        </div>
    )
}

export default Description