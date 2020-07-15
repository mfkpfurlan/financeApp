import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import ListTransactions from './components/ListTransactions';
import FormJson from './components/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MockData from "./mocks/mockData.json"

function App() {
  const [listData, setListData] = useState(MockData);

  return (
    <Container>
      <Header />
      <ListTransactions data={listData} />
      <FormJson />
    </Container>
  );
}

export default App;
