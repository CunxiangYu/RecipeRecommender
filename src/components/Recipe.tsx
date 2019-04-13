import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

class Recipe extends Component {
  public render() {
    return (
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Header as="h5">Ham and Cheese Toastie</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>Ham</ListGroup.Item>
            <ListGroup.Item>Cheese</ListGroup.Item>
            <ListGroup.Item>Bread</ListGroup.Item>
            <ListGroup.Item>Butter</ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    );
  }
}

export default Recipe;
