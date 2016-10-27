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
            let index = state.findIndex((product) => product.id === action.product.id); 
            return [
                ...state.slice(0, index),
                ...state.slice(index + 1)  
            ]

        default: return state;
    }
}


   