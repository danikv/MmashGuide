export const addJustice = ({name, hours}) => {
    return {
        type: 'ADD_JUSTICE',
        justice : {
            name : name,
            hours : hours
        }
    }
}

export const editJustice = ({name, hours}) => {
    return {
        type: 'EDIT_JUSTICE',
        justice : {
            name : name,
            hours : hours
        }
    }
}

export const deleteJustice = ({name}) => {
    return {
        type: 'DELETE_JUSTICE',
            name : name
    }
}