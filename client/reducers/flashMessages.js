export default function flashMessagesReducer(state = [], action = {}) {
    switch (action.type) {
        case 'FLASH_MESSAGE_SHOW':
            // console.log('flash message state', state)
            return [
                ...state,
                action.message
            ];

        case 'FLASH_MESSAGE_REMOVE':
            // remove all the flash messages 
            return state.filter(message => !message)  

        default: return state;
    }
}

