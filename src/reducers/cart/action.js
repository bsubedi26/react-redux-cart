// ********************** CONSTANT TYPES *********************** //
export const types = {
    ADD: 'CART/ADD',
    REMOVE: 'CART/REMOVE',
    INCREASE_QUANTITY: 'CART/INCREASE_QUANTITY',
    DECREASE_QUANTITY: 'CART/DECREASE_QUANTITY',
    RESET: 'CART/RESET',
}
// ************************** ACTIONS ************************** //
export const actions = {

    addToCart(product, quantity) {
        return {
            type: types.ADD,
            payload: {
                product,
                quantity
            }
        }
    },

    removeFromCart(item) {
        return {
            type: types.REMOVE,
            payload: {
                item
            }
        }
    },

    increaseQuantity(item) {
        return {
            type: types.INCREASE_QUANTITY,
            payload: {
                item
            }
        }
    },

    decreaseQuantity(item) {
        return {
            type: types.DECREASE_QUANTITY,
            payload: {
                item
            }
        }
    },
  
    reset() {
        return {
            type: types.RESET
        }
    }
}