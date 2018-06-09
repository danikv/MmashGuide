export const justiceReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_JUSTICE':
            return [
                ...state,
                action.justice
            ]
        case 'EDIT_JUSTICE':
            return state.map(justice => {
                if(justice.name === action.justice.name) {
                    return action.justice
                }
                return justice
            })
        case 'DELETE_JUSTICE':
            return state.filter(justice => {
                return !(justice.name === action.name)
            })
        default:
            return state
    }
}