export default function userReducer(state = [], action = {}) {
    switch (action.type) {
        case 'CREATE':
            console.log(action)
            return [
                ...state,
                action.response.data.hi
            ];
         
        default: return state;
    }
}


   