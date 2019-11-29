import { ADD_TO_CART, GET_CART } from '../actions/cartActionTypes';
import LocalStorageHelper from '../../helpers/LocalStorageHelper';

const initState = {
    addedProducts: [],
}

const cartReducer = (state = initState, action) => {
    if (action.type === ADD_TO_CART) {
        let { product, quantity } = action;
        product = {
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            description: product.description,
            category: product.category,
        }

        let existed_item = state.addedProducts.find(product => action.product.id === product.id);

        if (existed_item) {
            existed_item.quantity = quantity;
        } else {
            product.quantity = quantity;
            state.addedProducts.push(product);
        }

        LocalStorageHelper.setItem('addedProducts', state.addedProducts);
        return state;
    }

    if (action.type === GET_CART) {
        let addedProducts = LocalStorageHelper.getItem('addedProducts', []);
        return { ...state, addedProducts }
    }

    return state;

    
}

export default cartReducer;