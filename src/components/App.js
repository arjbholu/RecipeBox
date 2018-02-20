import React from 'react'
import RecipeList from './RecipeList';
import AddEditComponent from './AddEditComponent';
import Description from './Description';
// import LeftWrapper from '../containers/LeftWrapper'

const App = ({TotalData, onClick, Data, AddEdit, addRecipe, saveRecipe, editRecipe}) => (
    <div>
        <RecipeList TotalData={TotalData} onClick={onClick} />
        <button onClick={() => addRecipe()}>Add</button>
        <button onClick={() => editRecipe()}>Edit</button>
        {
            !AddEdit 
            ? <Description Data={Data} />
            : <AddEditComponent Data={Data} saveRecipe={saveRecipe} />
        }
    </div>
)

export default App