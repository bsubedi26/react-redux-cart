export default function userReducer(state = [], action = {}) {
    switch (action.type) {
        case 'LOGIN':
            return [
                ...state,
                action.response.data,
                action.isAuthenicated
            ];
         
        default: return state;
    }
}


   