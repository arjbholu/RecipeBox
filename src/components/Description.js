import React from 'react'

const Description = ({Data, editRecipe}) => {
    return (
        <div id="detail"> 
            <div className="title">{Data.Title}</div>
            <div className="discription">{Data.Description}</div>
            <div className="edit"><button onClick={() => editRecipe()}>Edit</button></div>
        </div>
    )
}

export default Description