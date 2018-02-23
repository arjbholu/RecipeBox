import React from 'react'
import RecipeList from './RecipeList';
import AddEditComponent from './AddEditComponent';
import Description from './Description';
// import LeftWrapper from '../containers/LeftWrapper'

const App = ({TotalData, onClick, Data, Edit, AddEdit, addRecipe, saveRecipe, editRecipe, deleteRecipe}) => (
    <div className="wrapper">
        <RecipeList 
            TotalData={TotalData} 
            onClick={onClick} 
            addRecipe={addRecipe}
            deleteRecipe={deleteRecipe}
            editRecipe={editRecipe}
            />
        {
            !AddEdit 
            ? <Description Data={Data} editRecipe={editRecipe} />
            : <AddEditComponent Data={Data} Edit={Edit} saveRecipe={saveRecipe} />
        }
    </div>
)

export default App