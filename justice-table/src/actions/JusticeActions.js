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