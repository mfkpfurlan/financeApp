import React from 'react';
import { Container } from 'react-bootstrap';
import ListTransactions from './ListTransactions'
import Balance from './Balance';

function Accounts() {
    return (
        <Container>
            <ListTransactions />
            <Balance />
        </Container>
    );
}

export default Accounts;