import React from 'react'
import Description from './Description'
import AddEditComponent from './AddEditComponent'

const RecipeList = ({TotalData, onClick, addRecipe, deleteRecipe}) => {
    // console.log(TotalData)
    return (
        <div className="left">
            <div className="recipes">Available Recipes:</div>
            <ol className="items-wrapper">
                {
                    TotalData.map((data) => (
                        <div>
                            <li key={data.id} 
                                onClick={() => onClick(data.id)} 
                                className="recipe-item" 
                            > 
                                {data.Title}
                            </li>
                            <button onClick={() => editRecipe(data.id)}>Edit</button> 
                            <button onClick={() => deleteRecipe(data.id)}>Delete</button>
                        </div>
                    ))
                    // console.log(TotalData)
                }
            </ol>
            <button onClick={() => addRecipe()} className="add-recipe">Add</button>
        </div>
    )
}

export default RecipeList