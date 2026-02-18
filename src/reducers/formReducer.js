export function formReducer(state, action) {
    switch (action.type) {
        case "update_form":
            return {
                ...state,
                [action.field]: action.value
            }

        case "set_errors":
            return {
                ...state,
                errors: action.payload
            }

        case "set_submitting":
            return {
                ...state,
                isSubmitting: action.payload
            }

        case "reset":
            return initialState

        default:
            return state
    }
}
