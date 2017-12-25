// ************************** SELECTORS ************************** //
export const totalItemsInCart = (state) => {
    return Object.values(state.cart.quantityById).reduce((acc, item) => {
        acc += item.quantity
        return acc
    }, 0)
}

export const totalCheckoutCost = (state) => {
    return Object.values(state.cart.quantityById).reduce((acc, item) => {
        acc += item.quantity * item.singlePrice
        return acc
    }, 0)
}


export const getTotalPerItem = (state) => {
    return Object.values(state.cart.quantityById).map(item => {
            let { singlePrice, quantity, id } = item
            let totalPrice = quantity * singlePrice
            let product = state.bremont.find(item => item.id === id)

            return {
                product,
                quantity,
                singlePrice,
                totalPrice
            }
    })
}
