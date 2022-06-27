export function FilterReducerFunction(state, action) {
    switch (action.type) {
        case action.type:
            return { ...state, categoryName: action.type }
        default:
            return { ...state }
    }
}