import { Recipe, UPDATE_RECIPES } from './types';

export function updateRecipes(recipes: Recipe[]) {
  return {
    type: UPDATE_RECIPES,
    payload: recipes
  };
}
