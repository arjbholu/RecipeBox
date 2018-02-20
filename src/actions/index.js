export const add = () => {
    return {
        type: 'ADD',
        addEdit: 1,
        add: 1
    }
}

export const view = (id) => {
    return {
        type: 'VIEW',
        addEdit: 0,
        id: id,
        addEdit: 0
    }
}

export const edit = () => {
    return {
        type: 'EDIT',
        addEdit: 1,
        edit: 1
    }
}

export const save = (Data) => {
    return {
        type: 'SAVE',
        addEdit: 0,
        Data
    }
}