import React, { useState } from 'react';
import { Form, Col, Button, Container } from 'react-bootstrap';
import MockData from "../mocks/mockData.json"

function FormJson(props) {

    const [operation, setOperation] = useState("");
    const [source, setSource] = useState("");
    const [destination, setDestination] = useState("");
    const [date, setDate] = useState("");
    const [ammount, setAmmount] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");

    function handleSubmit(e) {
        let transaction =
        {
            "operation": operation,
            "source": source,
            "destination": destination,
            "date": date,
            "ammount": ammount,
            "category": category,
            "description": description
        };

        MockData.push(transaction);
        props.liftData(MockData);
        e.preventDefault();
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit}>

                <Form.Row>
                    <Form.Group as={Col} controlId="operation">
                        <Form.Label>operation</Form.Label>
                        <Form.Control
                            as="select"
                            defaultValue="Choose..."
                            onChange={(e) => setOperation(e.target.value)}
                        >
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="source">
                        <Form.Label>source</Form.Label>
                        <Form.Control
                            as="select"
                            defaultValue="Choose..."
                            onChange={(e) => setSource(e.target.value)}
                        >
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="destination">
                        <Form.Label>destination</Form.Label>
                        <Form.Control
                            as="select"
                            defaultValue="Choose..."
                            onChange={(e) => setDestination(e.target.value)}
                        >
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="date">
                        <Form.Label>date</Form.Label>
                        <Form.Control
                            type="date"
                            onChange={(e) => setDate(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="ammount">
                        <Form.Label>ammount</Form.Label>
                        <Form.Control
                            type="number"
                            onChange={(e) => setAmmount(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="category">
                        <Form.Label>category</Form.Label>
                        <Form.Control
                            as="select"
                            defaultValue="Choose..."
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>


                <Form.Row>
                    <Form.Group as={Col} controlId="description">
                        <Form.Label>description</Form.Label>
                        <Form.Control onChange={(e) => setDescription(e.target.value)}>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>

                <Button
                    variant="success"
                    type="submit"
                    block
                >
                    Submit
                </Button>
            </Form >
        </Container >
    );
}

export default FormJson;