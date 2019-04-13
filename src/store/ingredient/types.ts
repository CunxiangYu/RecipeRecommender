export interface Ingredient {
  title: string;
  bestBefore: string;
  useBy: string;
}

export interface IngredientState {
  ingredients: Ingredient[];
}

export const UPDATE_INGREDIENTS = 'UPDATE_INGREDIENTS';

export interface UpdateIngredientAction {
  type: typeof UPDATE_INGREDIENTS;
  payload: Ingredient[];
}

export type IngredientActionTypes = UpdateIngredientAction;
