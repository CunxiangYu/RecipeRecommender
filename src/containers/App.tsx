import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../store';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import RecipeList from '../components/RecipeList';

import { IngredientState } from '../store/ingredient/types';
import { RecipeState } from '../store/recipe/types';

import { thunkFetchIngredients, thunkFetchRecipes } from '../thunks';

interface AppProps {
  ingredient: IngredientState;
  recipe: RecipeState;
  thunkFetchIngredients: any;
  thunkFetchRecipes: any;
}

class App extends React.Component<AppProps> {
  public componentDidMount() {
    this.props.thunkFetchIngredients();
    this.props.thunkFetchRecipes();
  }

  public render() {
    return (
      <Container>
        <Button variant='outline-primary'>
          What's For Lunch?
        </Button>
        <RecipeList />
      </Container>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  ingredient: state.ingredient,
  recipe: state.recipe
});

export default connect(
  mapStateToProps,
  { thunkFetchIngredients, thunkFetchRecipes }
)(App);
