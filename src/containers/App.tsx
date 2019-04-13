import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import RecipeList from '../components/RecipeList';
import './App.css';

class App extends Component {
  public render() {
    return (
      <Container>
        <Button variant="outline-primary">What's For Lunch?</Button>
        <RecipeList />
      </Container>
    );
  }
}

export default App;
