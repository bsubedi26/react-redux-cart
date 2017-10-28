import { combineReducers } from 'redux';
import productReducer from './products';
import cartReducer from './cart';
// import freezeState from 'redux-freeze-state';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

export default combineReducers({
    productReducer,
    cartReducer
});
