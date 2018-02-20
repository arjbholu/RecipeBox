import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import recipeReducer  from './reducers'
// import add from './reducers/add'
import App from './components/App'
import Container from './containers/Container'


let store = createStore(recipeReducer)

const RecipeBox = () => (
    <Provider store={store}>
        <Container />
    </Provider>
)

render(<RecipeBox />, document.getElementById('root'))