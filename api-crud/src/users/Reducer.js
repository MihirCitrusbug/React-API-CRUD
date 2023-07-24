// * Initial State for User Reducer
const initialState = []

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'DELETE_OLD_USERS':
            return []
        case 'GET_USER':
            return state.filter(user => user._id === action.payload.id)
        case 'ADD_USER':
            return [...state, action.payload]
        case 'EDIT_USER':
            return state.map(user => user._id === action.payload._id ? action.payload : user)
        case 'REMOVE_USER':
            return state.filter(user => user._id !== action.payload.id)
        default:
            return state
    }
}

export default userReducer