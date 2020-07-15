import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

function Dashboard(props) {

    const [listData, setListData] = useState(props.data);

    let totalExpense = 0;
    let groceriesExpense = 0;
    let laundryExpense = 0;

    const categoricalAnalysis = listData.map((row, index) => {
        if (row.operation === "Expense") {
            totalExpense = + row.ammount;
            if (row.category === "Laundry") {
                laundryExpense += row.ammount;
            }
        }
    })

    return (
        <Container>

        </Container>
    );
}

export default Dashboard;