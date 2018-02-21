import React from 'react'
import Description from './Description'
import AddEditComponent from './AddEditComponent'

const RecipeList = ({TotalData, onClick, addRecipe}) => {
    // console.log(AddEdit)
    return (
        <div id="toggle">
            {
                TotalData.map((data) => (
                    <div key={data.id} onClick={() => onClick(data.id)} className="recipe-item" > {data.Title} </div>
                ))
                // console.log(TotalData)
            }
            <button onClick={() => addRecipe()}>Add</button>
        </div>
    )
}

export default RecipeList