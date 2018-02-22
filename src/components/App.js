import React from 'react'
import RecipeList from './RecipeList';
import AddEditComponent from './AddEditComponent';
import Description from './Description';
// import LeftWrapper from '../containers/LeftWrapper'

const App = ({TotalData, onClick, Data, AddEdit, addRecipe, saveRecipe, editRecipe}) => (
    <div class="wrapper">
        <RecipeList TotalData={TotalData} onClick={onClick} addRecipe={addRecipe}/>
        {
            !AddEdit 
            ? <Description Data={Data} editRecipe={editRecipe} />
            : <AddEditComponent Data={Data} saveRecipe={saveRecipe} />
        }
    </div>
)

export default App