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
        default:
            return state
    }
}