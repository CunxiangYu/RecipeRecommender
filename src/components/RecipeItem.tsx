import * as React from 'react';
import { Recipe } from '../store/recipe/types';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

interface RecipeItemProps {
  recipe: Recipe;
}

const RecipeItem: React.SFC<RecipeItemProps> = ({ recipe }) => {
  return (
    <div>
      <Card style={{ width: '18rem', margin: '2rem auto' }}>
        <Card.Header as='h5'>{recipe.title}</Card.Header>
        <ListGroup variant='flush'>
          {
            recipe.ingredients.map(ingredient => (
              <ListGroup.Item key={ingredient}>{ingredient}</ListGroup.Item>
            ))
          }
        </ListGroup>
      </Card>
    </div>
  );
};

export default RecipeItem;
