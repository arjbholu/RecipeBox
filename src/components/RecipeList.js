import React from 'react'

const RecipeList = ({TotalData}) => {
    return (
        <div>
            {
                TotalData.map((data) => (
                    <div key={data.id}> {data.Title} </div>
                ))
                // console.log(TotalData)
            }
        </div>
    )
}

export default RecipeList