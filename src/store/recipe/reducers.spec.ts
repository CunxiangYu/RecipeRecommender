import { recipeReducer } from './reducers';
import { Recipe, UPDATE_RECIPES, UpdateRecipeAction } from './types';

const mockPayload: Recipe[] = [
  {
    title: 'Mock recipe title 1',
    ingredients: [
      'Mock ingredient 1',
      'Mock ingredient 2'
    ]
  },
  {
    title: 'Mock recipe title 2',
    ingredients: [
      'Mock ingredient 3',
      'Mock ingredient 4',
      'Mock ingredient 5'
    ]
  }
];

describe('recipe reducer', () => {
  it('should handle UPDATE_RECIPES', () => {
    const updateAction: UpdateRecipeAction = {
      type: UPDATE_RECIPES,
      payload: mockPayload
    };
    expect(recipeReducer(undefined, updateAction)).toEqual({ recipes: mockPayload });
  });
});
