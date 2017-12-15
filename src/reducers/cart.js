// ************************** ACTIONS ************************** //
export function addCartAction(product, quantity) {
    return {
        type: 'CART_ADD',
        product,
        quantity
    }
}

export function removeFromCart(product) {
    return {
        type: 'CART_REMOVE',
        product
    }
}

// ************************** SELECTORS ************************** //
export const totalItemsInCart = (state) => {
    return state.cartReducer.reduce((total, item) => {
        total += parseInt(item.quantity, 10);
        return total
    }, 0)
}

export const totalCost = (state) => {
    return state.cartReducer.reduce((total, item) => {
        total += parseInt(item.price, 10);
        const truncated = Math.floor(total * 100) / 100;
        return truncated
    }, 0)
}

export const getTotalPerItem = (state) => {
    const map = new Map()
    state.cartReducer.forEach(({ id, name, src, price, info, quantity }) => {
        const props = { id, name, src, price, info, quantity }
        if (map.get(id)) {
            const updatedObject = Object.assign(props, {
                quantity: parseInt(map.get(id).quantity, 10) + parseInt(quantity, 10),
                price: parseFloat(map.get(id).price) + parseFloat(price)
            })
            map.set(id, updatedObject)
        }
        else {
            map.set(id, { id, name, src, price, info, quantity })
        }

    })

    return [...map.values()]
}

// ************************** REDUCER ************************** //
export default function cartReducer(state = [], action = {}) {
    switch (action.type) {
        case 'CART_ADD':
            let addProduct = Object.assign({}, action.product)
            addProduct.quantity = action.quantity
            addProduct.price = (parseInt(addProduct.price, 10) * parseInt(addProduct.quantity, 10)).toFixed(2)
            return [
                ...state,
                addProduct
            ];

        case 'CART_REMOVE':
            //  return a new array excluding the product that needs to be removed
            let index = state.findIndex((product) => product.id === action.product.id);
            return [
                ...state.slice(0, index),
                ...state.slice(index + 1)
            ]

        default: return state;
    }
}
