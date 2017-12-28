import _ from 'lodash'
import { types } from './action'

const State = {
    quantityById: {}
}

// ************************** REDUCER ************************** //
export default function cartReducer(state = State, action) {
    const { payload, type } = action;

    switch (type) {
        case types.ADD: {
            // console.log(payload)
            let { id } = payload.product
            let { quantity } = payload
            let singlePrice = parseInt(payload.product.variants[0].price, 10)

            if (state.quantityById[id]) {
                // console.log('ITEM ALREADY IN CART.')
                return {
                    ...state,
                    quantityById: {
                        ...state.quantityById,
                        [id]: {
                            id,
                            quantity: state.quantityById[id].quantity + quantity,
                            singlePrice
                        }
                    }
                }
            }

            return {
                ...state,
                quantityById: {
                    ...state.quantityById,
                    [id]: {
                        id,
                        quantity,
                        singlePrice
                    }
                }
            }
        }
        
        case types.REMOVE: {
            let { id } = payload.item.product
            const updateRemoved = _.omit(state.quantityById, id)
            // if (state.quantityById[id]) console.log('REMOVE THIS!')

            return {
                ...state,
                quantityById: updateRemoved
            }
        }

        case types.INCREASE_QUANTITY: {
            let { quantity, singlePrice, product } = payload.item
            let { id } = product

            return {
                ...state,
                quantityById: {
                    ...state.quantityById,
                    [id]: {
                        id,
                        quantity: quantity + 1,
                        singlePrice
                    }
                }
            }
        }
        
        case types.DECREASE_QUANTITY: {
            let { quantity, singlePrice, product } = payload.item
            let { id } = product

            return {
                ...state,
                quantityById: {
                    ...state.quantityById,
                    [id]: {
                        id,
                        quantity: quantity - 1,
                        singlePrice
                    }
                }
            }
        }

        case types.RESET: {
            return {
                ...State
            }
        }
        
        default: return state;
    }
}
