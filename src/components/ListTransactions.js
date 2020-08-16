import React, { useState, useEffect } from 'react';
import { Table, Container, Button } from 'react-bootstrap';
import MockData from "../mocks/mockData.json";

function ListTransactions(props) {

    const [listData, setListData] = useState(MockData);
    const [account, setAccount] = useState("All");
    const [operation, setOperation] = useState("All");

    let tempData = {};

    // useEffect(() => {
    //     FilterDataByAccount(props.filter);
    // }, [props.filter])

    // useEffect(() => {
    //     FilterDataByOperation(operation);
    // }, [operation])

    //hooks are fucking listData.map, i think when it refheshes somehow it becomes null

    function FilterDataByAccount(acc) {
        tempData = {};
        listData.map((row, index) => {
            if (row.source == acc || row.destination == acc) {
                tempData.push(row);
            }
            return tempData;
        });
        setListData(tempData);
    }

    function FilterDataByOperation(op) {
        tempData = {};
        listData.map((row, index) => {
            if (row.operation == op) {
                tempData.push(row);
            }
            return tempData;
        });
        setListData(tempData);
    }

    const ListData = () => {
        let rows;
        rows = listData.map((row, index) => {
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
            );
        });
        return (
            <tbody>
                {rows}
            </tbody>
        )
    }



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
                <ListData />
            </Table>
        </Container>
    );
}

export default ListTransactions;