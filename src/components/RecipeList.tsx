import * as React from 'react';
import { Recipe } from '../store/recipe/types';
import RecipeItem from './RecipeItem';

interface RecipeListProps {
  recipes: Recipe[];
}

const RecipeList: React.SFC<RecipeListProps> = ({ recipes }) => {
  return (
    <div>
      {
        recipes.map(recipe => (
          <RecipeItem key={recipe.title} recipe={recipe} />
        ))
      }
    </div>
  );
};

export default RecipeList;
