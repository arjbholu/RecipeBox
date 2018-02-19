import { combineReducers } from 'redux'
import addReducer from './addReducer'

const recipeReducer = combineReducers({addReducer})

export default recipeReducer