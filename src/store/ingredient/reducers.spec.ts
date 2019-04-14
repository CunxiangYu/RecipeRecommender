import { ingredientReducer } from './reducers';
import { Ingredient, UPDATE_INGREDIENTS, UpdateIngredientAction } from './types';

const mockPayload: Ingredient[] = [
  {
    title: 'Mock ingredient title 1',
    bestBefore: '04/04/2019',
    useBy: '09/04/2019'
  },
  {
    title: 'Mock ingredient title 2',
    bestBefore: '24/04/2019',
    useBy: '01/05/2019'
  }
];

describe('ingredient reducer', () => {
  it('should handle UPDATE_INGREDIENTS', () => {
    const updateAction: UpdateIngredientAction = {
      type: UPDATE_INGREDIENTS,
      payload: mockPayload
    };
    expect(ingredientReducer(undefined, updateAction)).toEqual({ ingredients: mockPayload });
  });
});
