import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import FormJson from '../Form';
import { Bar } from 'react-chartjs-2';

import './Home.scss';

import MockData from './../../mocks/mockData.json'

function Home(props) {
    const [listData, setListData] = useState(MockData);

    const getLiftedData = (data) => {
        setListData([...listData, data]);
    }

    let nuBalance = 0;
    let bbBalance = 0;
    let xpBalance = 0;
    let clearBalance = 0;
    let cdiBalance = 0;

    const getBalance = listData.map((row, index) => {
        if (row.operation === "Income") {
            if (row.destination === "Nu") {
                nuBalance += parseInt(row.ammount);
            }
            if (row.destination === "BB") {
                bbBalance += parseInt(row.ammount);
            }
            if (row.destination === "XP") {
                xpBalance += parseInt(row.ammount);
            }
            if (row.destination === "Clear") {
                clearBalance += parseInt(row.ammount);
            }
            if (row.destination === "CDI") {
                cdiBalance += parseInt(row.ammount);
            }
        }
        if (row.operation === "Expense") {
            if (row.source === "Nu") {
                nuBalance -= parseInt(row.ammount);
            }
            if (row.source === "BB") {
                bbBalance -= parseInt(row.ammount);
            }
            if (row.source === "XP") {
                xpBalance -= parseInt(row.ammount);
            }
            if (row.source === "Clear") {
                clearBalance -= parseInt(row.ammount);
            }
            if (row.source === "CDI") {
                cdiBalance -= parseInt(row.ammount);
            }
        }
        if (row.operation === "Transfer") {
            if (row.source === "Nu") {
                nuBalance -= parseInt(row.ammount);
            }
            if (row.source === "BB") {
                bbBalance -= parseInt(row.ammount);
            }
            if (row.source === "XP") {
                xpBalance -= parseInt(row.ammount);
            }
            if (row.source === "Clear") {
                clearBalance -= parseInt(row.ammount);
            }
            if (row.source === "CDI") {
                cdiBalance -= parseInt(row.ammount);
            }
            if (row.destination === "Nu") {
                nuBalance += parseInt(row.ammount);
            }
            if (row.destination === "BB") {
                bbBalance += parseInt(row.ammount);
            }
            if (row.destination === "XP") {
                xpBalance += parseInt(row.ammount);
            }
            if (row.destination === "Clear") {
                clearBalance += parseInt(row.ammount);
            }
            if (row.destination === "CDI") {
                cdiBalance += parseInt(row.ammount);
            }
        }
        return 0;
    })

    let chartData = {
        labels: ['Nu', 'BB', 'XP', 'Clear', 'CDI'],
        datasets: [{
            // label: '# of Votes',
            data: [nuBalance, bbBalance, xpBalance, clearBalance, cdiBalance],
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
            <Bar
                data={chartData}
                width={40}
                height={20}
                options={chartOptions}
            />
            <FormJson liftData={getLiftedData} data={listData} />
        </Container>
    );
}

export default Home;