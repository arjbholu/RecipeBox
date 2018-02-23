import React from 'react'
import RecipeList from './RecipeList';
import AddEditComponent from './AddEditComponent';
import Description from './Description';
// import LeftWrapper from '../containers/LeftWrapper'

const App = ({TotalData, onClick, Data, AddEdit, addRecipe, saveRecipe, editRecipe, deleteRecipe}) => (
    <div className="wrapper">
        <RecipeList 
            TotalData={TotalData} 
            onClick={onClick} 
            addRecipe={addRecipe}
            deleteRecipe={deleteRecipe}
            />
        {
            !AddEdit 
            ? <Description Data={Data} editRecipe={editRecipe} />
            : <AddEditComponent Data={Data} saveRecipe={saveRecipe} />
        }
    </div>
)

export default App