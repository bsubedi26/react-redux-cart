export default function userReducer(state = [], action = {}) {
    switch (action.type) {
        case 'CREATE':
            console.log('state from reducer', state)
            return [
                ...state
            ];
         
        default: return state;
    }
}


   