export default function userReducer(state = [], action = {}) {
    switch (action.type) {
        case 'LOGIN':
            return [
                ...state,
                action.token,
                action.isAuthenicated
            ];
         
        default: return state;
    }
}


   