import reducer from '../../bremont'
import data from '../../bremont/data'

describe('reducers', () => {
  describe('bremont', () => {
    const initialState = data;

    it('should provide the initial state', () => {
      expect(reducer(undefined, {})).toEqual(initialState);

    })
  })
})