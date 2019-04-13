import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AppState } from './store';

import { fetchIngredients } from './api/ingredients';
import { updateIngredients } from './store/ingredient/actions';

import { fetchRecipes } from './api/recipes';
import { updateRecipes } from './store/recipe/actions';

export const thunkFetchIngredients = (): ThunkAction<
  void,
  AppState,
  null,
  Action<string>
> => async dispatch => {
  const result = await fetchIngredients();
  dispatch(
    updateIngredients(result)
  );
};

export const thunkFetchRecipes = (): ThunkAction<
  void,
  AppState,
  null,
  Action<string>
> => async dispatch => {
  const result = await fetchRecipes();
  dispatch(
    updateRecipes(result)
  );
};
