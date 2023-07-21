const initialState = []

const unicornReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_UNICORNS':
            return state
        case 'GET_UNICORN':
            return [state.filter(unicorn => unicorn.id !== action.unicorn.id)]
        case 'ADD_UNICORN':
            return [...state, action.payload]
        case 'REMOVE_UNICORN':
            return state.filter(unicorn => unicorn.id !== action.payload)
        default:
            return state
    }
}

export default unicornReducer