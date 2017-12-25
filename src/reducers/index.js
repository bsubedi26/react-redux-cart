import { combineReducers } from 'redux';
import cart from './cart';
import bremont from './bremont';

export default combineReducers({
    cart,
    bremont
});