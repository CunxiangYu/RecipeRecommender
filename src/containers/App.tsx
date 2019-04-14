import * as React from 'react';
import { connect } from 'react-redux';
import { animated, Transition } from 'react-spring';
import { AppState } from '../store';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import RecipeList from '../components/RecipeList';

import { Ingredient, IngredientState } from '../store/ingredient/types';
import { Recipe, RecipeState } from '../store/recipe/types';

import { thunkFetchIngredients, thunkFetchRecipes } from '../thunks';

import { isBeforeToday } from '../utils/helper';

interface AppProps {
  ingredient: IngredientState;
  recipe: RecipeState;
  thunkFetchIngredients: any;
  thunkFetchRecipes: any;
}

class App extends React.Component<AppProps> {
  public state = {
    showRecommendedRecipes: false,
    showButton: true
  };

  public handleClick = () => {
    this.setState({ showRecommendedRecipes: true, showButton: false });
  };

  public componentDidMount() {
    this.props.thunkFetchIngredients();
    this.props.thunkFetchRecipes();
  }

  public render() {
    const sortedAvailableRecipes = this.getSortedAvailableRecipes(
      this.props.recipe.recipes,
      this.props.ingredient.ingredients
    );

    return (
      <Container style={{ padding: '5rem', textAlign: 'center' }}>
        <Transition
          items={this.state.showButton}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {show =>
            show &&
            (props => (
              <animated.div style={props}>
                <Button variant='outline-primary' onClick={this.handleClick}>
                  What's For Lunch?
                </Button>
              </animated.div>
            ))
          }
        </Transition>
        <Transition
          items={this.state.showRecommendedRecipes}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
        >
          {show =>
            show &&
            (props => (
              <animated.div style={props}>
                <RecipeList recipes={sortedAvailableRecipes} />
              </animated.div>
            ))
          }
        </Transition>
      </Container>
    );
  }

  private getSortedAvailableRecipes(recipes: Recipe[], ingredients: Ingredient[]): Recipe[] {
    const result: Recipe[] = [];
    // If recipes or ingredients data are not ready
    if (recipes.length === 0 || ingredients.length === 0) {
      // Return empty recipe list
      return result;
    }

    const {
      ingredientsPastUseByDate,
      ingredientsPastBestBeforeAndWithinUseByDate,
      ingredientsBeforeBestBeforeDate
    } = this.getCategorisedIngredients(ingredients);

    // For each recipe, check the status of its ingredients
    recipes.forEach(recipe => {
      // Flag variables for deciding whether to show the recipe or not
      let containsIngredientPastUseByDate: boolean = false;
      // Flag variables for deciding in which order it should be shown in the list
      let containsIngredientPastBestBeforeDate: boolean = false;

      for (const ingredient of recipe.ingredients) {
        // If any of its ingredient is found in the ingredientsPastUseByDate collection
        if (ingredientsPastUseByDate.includes(ingredient)) {
          containsIngredientPastUseByDate = true;
        }
        if (ingredientsPastBestBeforeAndWithinUseByDate.includes(ingredient)) {
          containsIngredientPastBestBeforeDate = true;
        }
      }

      if (containsIngredientPastUseByDate) {
        // If any of its ingredient is past its useBy date
        // This is intentionally left blank as we don't show the recipe in the result recipe list
      } else if (containsIngredientPastBestBeforeDate) {
        // If any of its ingredients is past its bestBefore date and within useBy date
        // Push it to the end of the recipe list
        result.push(recipe);
      } else {
        // If all ingredients of the recipe are before their bestBefore date
        // Put this recipe to the start of the recipe list
        result.unshift(recipe);
      }

    });

    return result;
  }

  // Categorise ingredients based on their useBy and bestBefore date
  private getCategorisedIngredients(ingredients: Ingredient[]) {
    const ingredientsPastUseByDate: string[] = [];
    const ingredientsPastBestBeforeAndWithinUseByDate: string[] = [];
    const ingredientsBeforeBestBeforeDate: string[] =[];

    for (const ingredient of ingredients) {
      const ingredientName = ingredient.title;
      if (isBeforeToday(ingredient.useBy)) {
        // If today's date is past its useBy date
        ingredientsPastUseByDate.push(ingredientName);
      } else if (isBeforeToday(ingredient.bestBefore)) {
        // If today's date is past its bestBefore date and is not past its useBy date
        ingredientsPastBestBeforeAndWithinUseByDate.push(ingredientName);
      } else {
        ingredientsBeforeBestBeforeDate.push(ingredientName);
      }
    }

    return {
      ingredientsPastUseByDate,
      ingredientsPastBestBeforeAndWithinUseByDate,
      ingredientsBeforeBestBeforeDate
    };
  }
}

// Map global state to props of App component
const mapStateToProps = (state: AppState) => ({
  ingredient: state.ingredient,
  recipe: state.recipe
});

// Connect App component to Redux store
export default connect(
  mapStateToProps,
  { thunkFetchIngredients, thunkFetchRecipes }
)(App);
