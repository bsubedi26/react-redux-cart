export function addCartAction(product) {
    console.log('cart action triggered')
    return {
        type: 'ADD',
        product
    }
}

export function removeFromCart(product) {
    return {
        type: 'REMOVE',
        product
    }
}
