// src/App.js
import React from 'react';
import { Container, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Name from './Components/Name';
import Price from './Components/Price';
import Description from './Components/Description';
import Image from './Components/Image';
import './App.css';


const App = () => {
  const firstName = "John"; // Replace with your actual first name or leave as is

  return (
    <Container className="mt-5">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Image />
          <Card.Title><Name /></Card.Title>
          <Card.Subtitle className="mb-2 text-muted"><Price /></Card.Subtitle>
          <Card.Text><Description /></Card.Text>
        </Card.Body>
      </Card>
      <div className="mt-3">
        <h3>Hello, {firstName ? firstName : "there!"}</h3>
        {firstName && <img src="https://via.placeholder.com/50" alt="Greeting" />}
      </div>
    </Container>
  );
};

export default App;
