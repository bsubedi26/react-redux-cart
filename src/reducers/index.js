import { combineReducers } from 'redux';
import productReducer from './products';
import cartReducer from './cart';
import bremont from './bremont';

export default combineReducers({
    productReducer,
    cartReducer,

    bremont
});