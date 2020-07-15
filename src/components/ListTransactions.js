import React, { useState, useEffect } from 'react';
import { Table, Container } from 'react-bootstrap';
import MockData from "../mocks/mockData.json"

function ListTransactions(props) {

    const [listData, setListData] = useState(props.data);

    return (
        <Container>
            <Table striped bordered hover size="sm" variant="dark">
                <thead>
                    <tr>
                        <th>operation</th>
                        <th>source</th>
                        <th>destination</th>
                        <th>date</th>
                        <th>ammount</th>
                        <th>category</th>
                        <th>description</th>
                    </tr>
                </thead>
                <tbody>
                    {listData.map((row, index) => {
                        return (
                            <tr key={index}>
                                <td>{row.operation}</td>
                                <td>{row.source}</td>
                                <td>{row.destination}</td>
                                <td>{row.date}</td>
                                <td>{row.ammount}</td>
                                <td>{row.category}</td>
                                <td>{row.description}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </Container>
    );
}

export default ListTransactions;