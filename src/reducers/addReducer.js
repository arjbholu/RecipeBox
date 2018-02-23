let id = 1
const initialState = {
    AddEdit: 0,
    Edit: 0,
    Add: 1,
    CurrentData: {
        id: 0,
        Title: "Pizza",
        Description: "Blah Blah"
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

const addReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'VIEW':
            let Data = state.TotalData.find( Data => (Data.id == action.id))
            return {
                ...state,
                AddEdit: 0,
                CurrentData: Data
            };
        case 'ADD':
            console.log('in Ddd')
            return {
                ...state,
                CurrentData: {
                    Title: '',
                    Description: ''
                },
                AddEdit: 1
            }
        case 'SAVE':
            Data = {
                ...action.Data,
                id: ++id
            }
            return {
                ...state,
                CurrentData: Data,
                TotalData: [
                    ...state.TotalData,
                    Data
                ],
                AddEdit: 0
            }
        case 'EDIT':
            let TotalDataEdit = state.TotalData.filter((data) => data.id !== state.CurrentData.id)
            return {
                ...state,
                TotalData: TotalDataEdit,
                AddEdit: 1
            }
        case 'DELETE':
            let TotalDataDelete = state.TotalData.filter((data) => data.id !== action.id)
            let CurrentData = {
                Title: "Select from list to view",
                Description: "",
                id: ""
            }
            // console.log(Tot)
            return {
                ...state,
                TotalData: TotalDataDelete,
                CurrentData: CurrentData,
                AddEdit: 0
            } 
        default:
            return state
    }
}

export default addReducer