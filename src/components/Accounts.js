import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import AccountsFilter from './AccountsFilter';

function Accounts(props) {
    const [listData, setListData] = useState(props.data);

    const [filter, setFilter] = useState("All");

    return (
        <Container>
            <AccountsFilter data={listData} filter={filter} />
        </Container>
    );
}

export default Accounts;