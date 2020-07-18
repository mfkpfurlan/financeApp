import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './components/Header';
import Home from './components/Home';
import Accounts from './components/Accounts';
import Expenses from './components/Expenses';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    {/* DATA WORKS */}
    <App />
    {/* DATA WORKS */}

    {/* WORKS WITH ROUTER */}
    {/* <Header />
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/accounts" component={Accounts} />
        <Route path="/expenses" component={Expenses} />
      </Switch>
    </ BrowserRouter> */}
    {/* WORKS WITH ROUTER */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
