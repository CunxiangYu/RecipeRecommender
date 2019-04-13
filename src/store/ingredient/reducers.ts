import { IngredientActionTypes, IngredientState, UPDATE_INGREDIENTS } from './types';

const initialState: IngredientState = {
  ingredients: []
};

export const ingredientReducer = (
  state = initialState,
  action: IngredientActionTypes
): IngredientState => {
  switch (action.type) {
    case UPDATE_INGREDIENTS:
      return {
        ingredients: action.payload
      };
    default:
      return state;
  }
};
