export default function cartReducer(state = [], action = {}) {
    switch (action.type) {
        case 'ADD':
            console.log('cart state', state)
            return [
                ...state,
                action.product
            ];
         
        default: return state;
    }
}


   