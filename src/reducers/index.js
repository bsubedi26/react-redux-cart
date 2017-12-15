import { combineReducers } from 'redux';
import products from './products';
import cart from './cart';
import bremont from './bremont';

export default combineReducers({
    products,
    cart,

    bremont
});