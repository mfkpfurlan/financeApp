import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import AccountsFilter from './AccountsFilter';
import ListTransactions from './ListTransactions'
import MockData from "../mocks/mockData.json"

function Accounts() {
    const [listData, setListData] = useState(MockData);

    return (
        <Container>
            <AccountsFilter data={listData} />
            <ListTransactions />
        </Container>
    );
}

export default Accounts;