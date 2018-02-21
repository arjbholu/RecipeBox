import React, {Component} from 'react'

class AddEditComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Title: props.Data.Title,
            Description: props.Data.Description,
            onSubmit: props.saveRecipe
        }
        this.changeTitle = this.changeTitle.bind(this)
        this.changeDescription = this.changeDescription.bind(this)
        this.submitHandle = this.submitHandle.bind(this)
    }

    changeTitle(event) {
        this.setState({Title: event.target.value})
    }

    changeDescription(event) {
        this.setState({Description: event.target.value})
    }

    submitHandle(event) {
        event.preventDefault()
        let Data = {
            Title: this.state.Title,
            Description: this.state.Description
        }
        if (this.state.Title != "" && this.state.Description != "")
            this.state.onSubmit(Data)
    }

    render() {
        return (
            <div >
                <form className="addEdit"onSubmit={this.submitHandle}>
                    <input className="title-addEdit" type="text" onChange={this.changeTitle} value={this.state.Title}></input>
                    <textarea className="description-addEdit" type="text" onChange={this.changeDescription} value={this.state.Description}></textarea>
                    <button className="save" type="submit">Save</button>
                </form>
                {/* Hello */}
            </div>
        )
    }
}


// const AddEditComponent = ({Data}) => {
//     let Title = Data.Title,
//         Description = Data.Description
    
// }

export default AddEditComponent