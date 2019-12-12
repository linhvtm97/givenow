import {ADD_TO_CART,GET_CART} from './cartActionTypes'

//add cart action
export const addToCart=(product,quantity) => {
    return {
        product,
        quantity,
        type: ADD_TO_CART,
    }
}

export const getCart=() => {
    return {
        type: GET_CART,
    }
}

