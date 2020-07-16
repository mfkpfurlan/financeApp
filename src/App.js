import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import ListTransactions from './components/ListTransactions';
import FormJson from './components/Form';
import Balance from './components/Balance';
import Expenses from './components/Expenses';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MockData from "./mocks/mockData.json"

function App() {
  const [listData, setListData] = useState(MockData);

  const getLiftedData = (data) => {
    setListData([...listData, data]);
  }

  return (
    <Container>
      {/* <Home data={listData} /> */}
      <ListTransactions data={listData} />
      <FormJson liftData={getLiftedData} />
      <Balance data={listData} />
      <Expenses data={listData} />
    </Container>
  );
}

export default App;
