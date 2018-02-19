import RecipeList from '../components/RecipeList'
import { connect } from 'react-redux'
import { addRecipe } from '../actions'

const mapStateToProps = (state) => {
    console.log(state)
    return {
        TotalData: state.addReducer.TotalData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: addRecipe()
    }
}

const LeftWrapper = connect (
    mapStateToProps,
    mapDispatchToProps
)(RecipeList)

export default LeftWrapper