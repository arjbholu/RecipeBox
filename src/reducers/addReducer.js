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
            console.log(action.Data)
            let SaveData = {
                id: action.Data.id,
                Title: action.Data.Title,
                Description: action.Data.Description
            }
            let CurrentData
            if (action.Data.Edit) {
                state.TotalData.forEach(element => {
                    if(element.id === SaveData.id) {
                        element.Title = SaveData.Title
                        element.Description = SaveData.Description
                        CurrentData = element
                    }
                });
                return  {
                    ...state,
                    CurrentData: CurrentData,
                    AddEdit: 0
                }
            }
            SaveData = {
                ...SaveData,
                id: ++id
            }
            console.log(SaveData)
            return {
                ...state,
                CurrentData: SaveData,
                TotalData: [
                    ...state.TotalData,
                    SaveData
                ],
                AddEdit: 0
            }
        case 'EDIT':
            // let TotalDataEdit = state.TotalData.filter((data) => data.id !== state.CurrentData.id)
            return {
                ...state,
                AddEdit: 1,
                Edit: 1
            }
        case 'DELETE':
            let TotalDataDelete = state.TotalData.filter((data) => data.id !== action.id)
            CurrentData = {
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