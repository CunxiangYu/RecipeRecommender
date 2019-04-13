import { Ingredient, UPDATE_INGREDIENTS } from './types';

export function updateIngredients(ingredients: Ingredient[]) {
  return {
    type: UPDATE_INGREDIENTS,
    payload: ingredients
  };
}
