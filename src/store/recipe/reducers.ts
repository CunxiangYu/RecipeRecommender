import { RecipeActionTypes, RecipeState, UPDATE_RECIPES } from './types';

const initialState: RecipeState = {
  recipes: []
};

export const recipeReducer = (
  state = initialState,
  action: RecipeActionTypes
): RecipeState => {
  switch (action.type) {
    case UPDATE_RECIPES:
      return {
        recipes: action.payload
      };
    default:
      return state;
  }
};
