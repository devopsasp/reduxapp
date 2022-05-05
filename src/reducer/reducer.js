import { ADD_COFFEE, UPDATE_COFFEE, FIND_COFFEE, DELETE_COFFEE } from "../actions/action"
const initialState = [{
    id: 1,
    "coffeeName": "Black Coffee",
    "price": 20
}]
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COFFEE:
            console.log(action.payload)
            state = [...state, action.payload]
            return state
        case UPDATE_COFFEE:
            var newstate = state.filter((e) => {
                return e.id !== action.payload.id
            })
            console.log(newstate)
            newstate.push(action.payload)
            state = newstate
            return state
        case FIND_COFFEE:
            newstate = state.filter((e) => {
                return e.id === action.payload
            })
            return newstate
        case DELETE_COFFEE:
            newstate = state.filter((e) => {
                return e.id !== action.payload
            })
            state = newstate
            return state
        default:
            return state
    }
}

export default reducer