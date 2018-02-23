import React from 'react'

const Description = ({Data, editRecipe}) => {
    // console.log(Data)
    return (
        <div className="right"> 
            <div className="title">{Data.Title}</div>
            <div className="description">{Data.Description}</div>
        </div>
    )
}

export default Description