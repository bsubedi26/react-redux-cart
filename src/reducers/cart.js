// ************************** ACTIONS ************************** //
export const actions = {
    addToCart(product, quantity) {
        return {
            type: 'CART_ADD',
            payload: {
                product,
                quantity
            }
        } 
    },

    removeFromCart(product) {
        return {
            type: 'CART_REMOVE',
            payload: {
                product
            }
        }
    },

    increaseQuantity(product) {
        return {
            type: 'CART_INCREASE_QUANTITY',
            payload: {
                product
            }
        }
    },

    decreaseQuantity(product) {
        return {
            type: 'CART_DECREASE_QUANTITY',
            payload: {
                product
            }
        }
    }
}

// ************************** REDUCER ************************** //
export default function cartReducer(state = [], action) {
    const { payload, type } = action;

    switch (type) {
        case 'CART_ADD': {
            let price = payload.product.variants[0].price;
            let addProduct = Object.assign({}, payload.product);

            addProduct.quantity = payload.quantity;
            addProduct.singlePrice = price;
            addProduct.price = (parseInt(price, 10) * parseInt(addProduct.quantity, 10)).toFixed(2);
            return [
                ...state,
                addProduct
            ];
        }
        case 'CART_INCREASE_QUANTITY': {
            let found = false;
            let newState = state.map(item => {
                if (item.id === payload.product.id && !found) {
                    let newObj = { ...item };
                    newObj.quantity = item.quantity + 1;
                    newObj.price = (parseInt(newObj.singlePrice, 10) * parseInt(newObj.quantity, 10)).toFixed(2);
                    found = true;
                    return newObj;
                }

                return item;
            })
            return [
                ...newState
            ]
        }

        case 'CART_DECREASE_QUANTITY': {
            let found = false;
            let newState = state.map(item => {
                if (item.id === payload.product.id && !found) {
                    let newObj = { ...item };
                    newObj.quantity = item.quantity - 1;
                    newObj.price = (parseInt(newObj.singlePrice, 10) * parseInt(newObj.quantity, 10)).toFixed(2);
                    found = true;
                    return newObj;
                }

                return item;
            })
            return [
                ...newState
            ]
        }

        case 'CART_REMOVE': {
            //  return a new array excluding the product that needs to be removed
            let newState = state.filter(item => item.id !== payload.product.id);
            return [
                ...newState
            ]
        }

        default: return state;
    }
}

// ************************** SELECTORS ************************** //
export const totalItemsInCart = (state) => {
    return state.cart.reduce((total, item) => {
        total += parseInt(item.quantity, 10);
        return total
    }, 0)
}

export const totalCost = (state) => {
    return state.cart.reduce((total, item) => {
        total += parseInt(item.price, 10);
        return total;
    }, 0)
}

export const getTotalPerItem = (state) => {
    let result = {}
    state.cart.forEach(item => {
        if (result[item.id]) {
            let newItem = { ...item }
            let updatedExistingId = Object.assign(newItem, {
                quantity: parseInt(result[item.id].quantity, 10) + parseInt(item.quantity, 10),
                price: parseFloat(result[item.id].price) + parseFloat(item.price)
            })
            result[item.id] = updatedExistingId
        }
        else {
            result[item.id] = item
        }
    })

    return result
}
