export default function cartReducer(state = [], action = {}) {
    switch (action.type) {
        case 'ADD':
            console.log('cart state', state)
            return [
                ...state,
                action.product
            ];

        case 'REMOVE':
            //  return a new array excluding the product that needs to be removed
            return state.filter(product => product.id != action.product.id)

        default: return state;
    }
}


   