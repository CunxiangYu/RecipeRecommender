export interface Recipe {
  title: string;
  ingredients: string[];
}

export interface RecipeState {
  recipes: Recipe[];
}

export const UPDATE_RECIPES = 'UPDATE_RECIPES';

export interface UpdateRecipeAction {
  type: typeof UPDATE_RECIPES;
  payload: Recipe[];
}

export type RecipeActionTypes = UpdateRecipeAction;
