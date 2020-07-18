import React, { useState } from 'react';
import { Container, Button, Card, CardGroup, ListGroup, ListGroupItem } from 'react-bootstrap';

function AccountsFilter(props) {

    const [listData, setListData] = useState(props.data);

    let balNu = 0;
    let balBb = 0;
    let totalBalance = 0;

    const balanceAccounts = listData.map((row, index) => {
        if (row.operation === "Income") {
            if (row.destination === "Nu") {
                return balNu += parseInt(row.ammount);
            } else if (row.destination === "BB") {
                return balBb += parseInt(row.ammount);
            }
        }
        if (row.operation === "Expense") {
            if (row.source === "Nu") {
                return balNu -= parseInt(row.ammount);
            } else if (row.source === "BB") {
                return balBb -= parseInt(row.ammount);
            }
        }
        if (row.operation === "Transfer") {
            if (row.source === "Nu" && row.destination === "BB") {
                balNu -= parseInt(row.ammount);
                balBb += parseInt(row.ammount);
                return 0;
            } else if (row.source === "BB" && row.destination === "Nu") {
                balBb -= parseInt(row.ammount);
                balNu += parseInt(row.ammount);
                return 0;
            }
        }
    })

    return (
        <Container>
            <CardGroup>
                <Button variant="primary" size="lg" block>{totalBalance}</Button>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                        <Card.Title>Nubank</Card.Title>
                        <Card.Text>R${balNu}</Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Card.Link href="#">SOME LINK</Card.Link>
                        <Card.Link href="#">SOME LINK</Card.Link>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                        <Card.Title>Banco do Brasil</Card.Title>
                        <Card.Text>R${balBb}</Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Card.Link href="#">SOME LINK</Card.Link>
                        <Card.Link href="#">SOME LINK</Card.Link>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                        <Card.Title>ACC NAME</Card.Title>
                        <Card.Text>ACC BALANCE</Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Card.Link href="#">SOME LINK</Card.Link>
                        <Card.Link href="#">SOME LINK</Card.Link>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                        <Card.Title>ACC NAME</Card.Title>
                        <Card.Text>ACC BALANCE</Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Card.Link href="#">SOME LINK</Card.Link>
                        <Card.Link href="#">SOME LINK</Card.Link>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                        <Card.Title>ACC NAME</Card.Title>
                        <Card.Text>ACC BALANCE</Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Card.Link href="#">SOME LINK</Card.Link>
                        <Card.Link href="#">SOME LINK</Card.Link>
                    </Card.Body>
                </Card>

            </CardGroup>
        </Container>
    )
}

export default AccountsFilter;