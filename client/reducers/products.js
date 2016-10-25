import { PRODUCTS } from '../PRODUCTS';

export default function storeReducer(state = PRODUCTS, action = {}) {
    switch (action.type) {
        case 'ADD':
            return [
                ...state
            ];
         
        default: return state;
    }
}


   