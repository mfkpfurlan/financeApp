import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import ListTransactions from './components/ListTransactions';
import FormJson from './components/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Container>
      <Header />
      <ListTransactions />
      <FormJson />
    </Container>
  );
}

export default App;
