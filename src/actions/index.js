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

export const edit = (id) => {
    return {
        type: 'EDIT',
        addEdit: 1,
        edit: 1,
        id
    }
}

export const save = (Data) => {
    return {
        type: 'SAVE',
        addEdit: 0,
        Data
    }
}

export const deletee = (id) => {
    return {
        type: 'DELETE',
        addEdit: 0,
        id
    }
}