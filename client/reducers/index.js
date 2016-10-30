import {combineReducers} from 'redux';
import storeReducer from './products';
import cartReducer from './cart';
import usersReducer from './users';
import flashMessagesReducer from './flashMessages';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

export default combineReducers({
    storeReducer,
    cartReducer,
    usersReducer,
    flashMessagesReducer
});
