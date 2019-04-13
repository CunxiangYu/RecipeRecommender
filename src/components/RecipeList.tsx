import React, { Component } from 'react';
import Recipe from './Recipe';

class RecipeList extends Component {
  public render() {
    return (
      <div>
        <Recipe />
        <Recipe />
        <Recipe />
      </div>
    );
  }
}

export default RecipeList;
