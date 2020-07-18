import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Home from './components/Home';
import Accounts from './components/Accounts';
import Expenses from './components/Expenses';
import ListTransactions from './components/ListTransactions';
import FormJson from './components/Form';
import AccountsFilter from './components/AccountsFilter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MockData from "./mocks/mockData.json"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [listData, setListData] = useState(MockData);

  const getLiftedData = (data) => {
    setListData([...listData, data]);
  }

  return (
    <Container>
      {/* <Header /> */}
      <ListTransactions data={listData} />
      {/* <FormJson /> */}
      <FormJson liftData={getLiftedData} data={listData} />
      <AccountsFilter data={listData} />
      <Expenses data={listData} />
    </Container>
  );


  // return (
  //   <Router>
  //     <Header />
  //     <Switch>
  //       <Route path="/expenses">
  //         <Expenses data={listData} />
  //       </Route>
  //       <Route path="/accounts">
  //         <Accounts data={listData} />
  //       </Route>
  //       <Route path="/">
  //         <Home data={listData} />
  //       </Route>
  //     </Switch>
  //   </Router>
  // );
}

export default App;
