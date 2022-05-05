import { ADD_COFFEE, UPDATE_COFFEE, FIND_COFFEE, DELETE_COFFEE } from "./action";

export function addCoffee(coffee) {
    return {
        type: ADD_COFFEE,
        payload: coffee
    }
}

export function updateCoffee(coffee) {
    return {
        type: UPDATE_COFFEE,
        payload: coffee
    }
}


export function findCoffee(id) {
    return {
        type: FIND_COFFEE,
        payload: id
    }
}

export function deleteCoffee(id) {
    return {
        type: DELETE_COFFEE,
        payload: id
    }
}