const initialState = []

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'GET_ALL_USERS':
            return state
        case 'GET_USER':
            return state.filter(user => user._id === action.payload.id)
        case 'ADD_USER':
            return [...state, action.payload]
        case 'REMOVE_USER':
            return state.filter(user => user._id !== action.payload)
        default:
            return state
    }
}

export default userReducer