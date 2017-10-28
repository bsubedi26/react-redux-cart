import { PRODUCTS } from './data/PRODUCTS';

export default function productReducer(state = PRODUCTS, action = {}) {
    switch (action.type) {
         
        default: return state;
    }
}
