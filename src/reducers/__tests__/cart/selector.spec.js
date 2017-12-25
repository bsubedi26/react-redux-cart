import { totalItemsInCart, totalCheckoutCost, getTotalPerItem } from '../../cart/selector';
import data from '../../bremont/data';

describe('selectors', () => {
  let state = {
    cart: {
      quantityById: {
        '2204557509': {
          id: 2204557509,
          quantity: 2,
          singlePrice: 155
        },
        '2204815621': {
          id: 2204815621,
          quantity: 4,
          singlePrice: 125
        }
      }
    },
    bremont: data
  }

  describe('getTotalPerItem', () => {
    it('should return individual product with total cost based on quantity', () => {
      expect(getTotalPerItem(state)).toEqual([
        {
          quantity: 2,
          singlePrice: 155,
          totalPrice: 155 * 2,
          product: data.find(item => item.id === 2204557509)
        },
        {
          quantity: 4,
          singlePrice: 125,
          totalPrice: 125 * 4,
          product: data.find(item => item.id === 2204815621)
        },
      ]);
    })
  })

  describe('totalCheckoutCost', () => {
    it('should return the total checkout cost in the cart', () => {
      expect(totalCheckoutCost(state)).toEqual(810);
    })
  })
  
  describe('totalItemsInCart', () => {
    it('should return the total items in the cart', () => {
      expect(totalItemsInCart(state)).toEqual(6);
    })
  })


})