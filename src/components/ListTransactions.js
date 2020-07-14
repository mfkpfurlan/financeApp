import React, { useEffect } from 'react';
import { Table, Container } from 'react-bootstrap';
import MockData from "../mocks/mockData.json"

function ListTransactions() {

    // const [listData, setListData] = useState(MockData);

    // useEffect(() => {

    // }, MockData)

    // function updateList() {
    //     return 0;
    // }

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
                    {MockData.map((data, index) => {
                        return (
                            <tr key={index}>
                                <td>{data.operation}</td>
                                <td>{data.source}</td>
                                <td>{data.destination}</td>
                                <td>{data.date}</td>
                                <td>{data.ammount}</td>
                                <td>{data.category}</td>
                                <td>{data.description}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </Container>
    );
}

export default ListTransactions;