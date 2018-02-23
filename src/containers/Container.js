import App from '../components/App'
import { connect } from 'react-redux'
import { view, add, save, edit, deletee } from '../actions'

const mapStateToProps = (state) => {
    console.log(state)
    return {
        TotalData: state.addReducer.TotalData,
        Data: state.addReducer.CurrentData,
        AddEdit: state.addReducer.AddEdit
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (id) => dispatch(view(id)),
        addRecipe: () => dispatch(add()),
        saveRecipe: (Data) => dispatch(save(Data)),
        editRecipe: (id) => dispatch(edit(id)),
        deleteRecipe: (id) => dispatch(deletee(id))
    }
}

const Container = connect (
    mapStateToProps,
    mapDispatchToProps
)(App)

export default Container