import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import ListTransactions from './components/ListTransactions';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Container>
      <Header />
      <ListTransactions />
    </Container>
  );
}

export default App;
