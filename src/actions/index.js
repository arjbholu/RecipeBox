export const addRecipe = () => {
    return {
        type: 'ADD',
        addEdit: 1,
        add: 1
    }
}

export const edit = () => {
    return {
        type: 'EDIT',
        addEdit: 1,
        edit: 1
    }
}

export const save = (data) => {
    return {
        type: 'SAVE',
        data
    }
}