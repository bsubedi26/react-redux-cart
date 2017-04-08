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
