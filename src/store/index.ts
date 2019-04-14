import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import { ingredientReducer } from './ingredient/reducers';
import { recipeReducer } from './recipe/reducers';

const rootReducer = combineReducers({
  ingredient: ingredientReducer,
  recipe: recipeReducer
});

// Global app state
export type AppState = ReturnType<typeof rootReducer>;

// Function to create and configure store objectswith reducers, thunk middileware and redux devtools 
export default function configureStore() {
  const middlewares = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer)
  );

  return store;
}
