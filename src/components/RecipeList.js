import React from 'react'
import Description from './Description'
import AddEditComponent from './AddEditComponent'

const RecipeList = ({TotalData, onClick, addRecipe}) => {
    // console.log(AddEdit)
    return (
        <div className="left">
            <div className="recipes">Available Recipes:</div>
            <ol className="items-wrapper">
                {
                    TotalData.map((data) => (
                        <li key={data.id} onClick={() => onClick(data.id)} className="recipe-item" > {data.Title} </li>
                    ))
                    // console.log(TotalData)
                }
            </ol>
            <button onClick={() => addRecipe()} className="add-recipe">Add</button>
        </div>
    )
}

export default RecipeList