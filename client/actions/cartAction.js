export function addCartAction(product) {
    console.log('cart action triggered')
    return {
        type: 'ADD',
        product
    }
}

export function removeFromCart(product) {
    console.log('remove cart triggered')
    return {
        type: 'REMOVE',
        product
    }
}
