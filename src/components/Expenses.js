import React, { useState, useEffect } from 'react';
import { Container, Button, Form, Col } from 'react-bootstrap';
import ListTransactions from './ListTransactions'
import { Doughnut } from 'react-chartjs-2';
import MockData from "../mocks/mockData.json"

function Expenses(props) {

    const [listData, setListData] = useState(props.data);

    let totalExpense = 0;
    let groceriesExpense = 0;
    let laundryExpense = 0;
    let pharmacyExpense = 0;
    let healthExpense = 0;
    let luxuryExpense = 0;

    let totalIncome = 0;

    const categoricalAnalysis = listData.map((row, index) => {
        if (row.operation === "Expense") {
            totalExpense += parseInt(row.ammount);
            if (row.category === "Groceries") {
                groceriesExpense += parseInt(row.ammount);
            }
            if (row.category === "Laundry") {
                laundryExpense += parseInt(row.ammount);
            }
            if (row.category === "Pharmacy") {
                pharmacyExpense += parseInt(row.ammount);
            }
            if (row.category === "Health") {
                healthExpense += parseInt(row.ammount);
            }
            if (row.category === "Luxury") {
                luxuryExpense += parseInt(row.ammount);
            }
        }
        if (row.operation === "Income") {
            totalIncome += parseInt(row.ammount);
        }
        return 0;
    })

    let chartData = {
        labels: ['Groceries', 'Laundry', 'Pharmacy', 'Health', 'Luxury'],
        datasets: [{
            // label: '# of Votes',
            data: [groceriesExpense, laundryExpense, pharmacyExpense, healthExpense, luxuryExpense],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }

    let chartOptions = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }

    return (
        <Container>

            <Form>

                <Form.Row>
                    <Form.Group as={Col} controlId="expenseAccount">
                        <Form.Label>Accounts</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>Nu</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="startDate">
                        <Form.Label>date</Form.Label>
                        <Form.Control
                            type="date"
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="endDate">
                        <Form.Label>date</Form.Label>
                        <Form.Control
                            type="date"
                        >
                        </Form.Control>
                    </Form.Group>
                </Form.Row>

                <Button variant="primary" type="submit">Submit</Button>
            </Form>

            <Doughnut
                data={chartData}
                width={50}
                height={50}
                options={chartOptions}
            />

            <ListTransactions data={listData} />

        </Container >
    );
}

export default Expenses;