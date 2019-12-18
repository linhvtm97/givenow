import {ADD_TO_CART,GET_CART,REMOVE_ITEM_FROM_CART,RESET_CART} from './cartActionTypes'

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

export const removeItem=(product) => {
    return {
        product,
        type: REMOVE_ITEM_FROM_CART,
    }
}

export const resetCart=() => {
    return {
        type: RESET_CART,
    }
}
