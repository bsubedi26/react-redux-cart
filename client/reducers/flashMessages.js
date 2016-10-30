export default function flashMessagesReducer(state = [], action = {}) {
    switch (action.type) {
        case 'SHOW':
            // console.log('flash message state', state)
            return [
                ...state,
                action.message
            ];

        default: return state;
    }
}


   