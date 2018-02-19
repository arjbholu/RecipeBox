import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import recipeReducer  from './reducers'
// import add from './reducers/add'
import App from './components/App'

let store = createStore(recipeReducer)

const RecipeBox = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

render(<RecipeBox />, document.getElementById('root'))