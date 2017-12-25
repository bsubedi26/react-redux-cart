import reducer from '../cart'
import { types } from '../cart/action'
import { omit } from 'lodash'

describe('reducers', () => {
  describe('cart', () => {
    const initialState = {
      quantityById: {}
    };
    
    it('should provide the initial state', () => {
      expect(reducer(undefined, {})).toEqual(initialState);      
    })
    
    it(`should handle action ${types.RESET}`, () => {
      let state = {
        quantityById: {
          1: {
            product: {}
          }
        }
      };
      let action = { type: types.RESET };
      let actual = reducer(state, action);

      expect(actual).toEqual(initialState);
    });
    
    it(`should handle action ${types.ADD}`, () => {
      let mock = {
        product: {
          id: 1,
          variants: [
            { price: 200 }
          ]
        },
        quantity: 3
      }
      let action = {
        type: types.ADD,
        payload: mock
      }

      let actual = reducer(initialState, action)
      expect(actual).toEqual({
        quantityById: {
          1: {
            id: 1,
            quantity: 3,
            singlePrice: 200
          }
        }
      });
    })

        
    it(`should handle action ${types.REMOVE}`, () => {
      
      let mock = {
        item: {
          product: {
            id: 1,
            variants: [
              { price: 200 }
            ]
          }
        },
        quantity: 3
      }
      
      let action = {
        type: types.REMOVE,
        payload: mock
      }

      let state = {
        quantityById: {
          1: { ...mock }
        }
      }
      
      let actual = reducer(state, action)
      expect(actual).toEqual({
        quantityById: {}
      });
    });

        
    it(`should handle action ${types.INCREASE_QUANTITY}`, () => {
      
      let mock = {
        item: {
          product: {
            id: 1,
            variants: [
              { price: 200 }
            ]
          },
          quantity: 3,
          singlePrice: 200
        }
      }
      
      let action = {
        type: types.INCREASE_QUANTITY,
        payload: mock
      }

      let state = {
        quantityById: {
          1: { ...mock }
        }
      }

      let actual = reducer(state, action)
      expect(actual).toEqual({
        quantityById: {
          1: {
            id: mock.item.product.id,
            quantity: mock.item.quantity + 1,
            singlePrice: mock.item.singlePrice
          }
        }
      });
    });
    
        
    it(`should handle action ${types.DECREASE_QUANTITY}`, () => {
      
      let mock = {
        item: {
          product: {
            id: 1,
            variants: [
              { price: 200 }
            ]
          },
          quantity: 3,
          singlePrice: 200
        }
      }
      
      let action = {
        type: types.DECREASE_QUANTITY,
        payload: mock
      }

      let state = {
        quantityById: {
          1: { ...mock }
        }
      }

      let actual = reducer(state, action)
      expect(actual).toEqual({
        quantityById: {
          1: {
            id: mock.item.product.id,
            quantity: mock.item.quantity - 1,
            singlePrice: mock.item.singlePrice
          }
        }
      });
    });


  })
})