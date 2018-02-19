let id = 0
const initialState = {
    AddEdit: 0,
    Edit: 0,
    Add: 1,
    CurrentData: {
        Title: "ABC",
        Description: "blah blah"
    },
    TotalData: [
        {
            id: 0,
            Title: "Pizza",
            Description: "Blah Blah"
        },
        {
            id: 1,
            Title: "Litti Chokha",
            Description: "Same Blah blah"
        }
    ]
}

const add = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD':
            return state
        default:
            return state
    }
}

export default add