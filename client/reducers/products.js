import { PRODUCTS } from '../PRODUCTS';

export default function productReducer(state = PRODUCTS, action = {}) {
    switch (action.type) {
        case 'PRODUCT_ADD':
            return [
                ...state
            ];
         
        default: return state;
    }
}


   