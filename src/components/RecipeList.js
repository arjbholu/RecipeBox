import React from 'react'
import Description from './Description'
import AddEditComponent from './AddEditComponent'

const RecipeList = ({TotalData, onClick}) => {
    // console.log(AddEdit)
    return (
        <div>
            {
                TotalData.map((data) => (
                    <div key={data.id} onClick={() => onClick(data.id)} > {data.Title} </div>
                ))
                // console.log(TotalData)
            }
            
        </div>
    )
}

export default RecipeList