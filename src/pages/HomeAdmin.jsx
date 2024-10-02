import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Card, Container, Row, Col, Table } from 'react-bootstrap';
import LayoutAdmin from '../components/LayoutAdmin';

const statsData = [
    { value: '5', label: 'Type of Gym Passes', color: 'primary' },
    { value: '97', label: 'Sales', color: 'success' },
    { value: '3', label: 'Reservation Management', color: 'warning' },
    { value: '20%', label: 'Increase', color: 'danger' },
];

const customerData = [
    { id: 1, firstName: 'Mark', lastName: 'Otto', expiry: '1 month' },
    { id: 2, firstName: 'Jacob', lastName: 'Thornton', expiry: '3 months' },
    { id: 3, firstName: 'Marcus', lastName: 'Lampard', expiry: '6 months' },
    { id: 4, firstName: 'Larry', lastName: 'Nevil', expiry: '1 month' },
    { id: 5, firstName: 'Karol', lastName: 'Black', expiry: '3 months' },
    { id: 6, firstName: 'Mike', lastName: 'Green', expiry: '12 months' },
    { id: 7, firstName: 'Tom', lastName: 'Jerry', expiry: '1 month' },
];

function App() {
    return (
        <LayoutAdmin>
            <Container fluid>
            <Col>
            <h1 className="h3 mb-0 text-gray-800">Home</h1>
          </Col>
                <Row className='g-3 my-2'>
                    {statsData.map((stat, index) => (
                        <Col key={index} md={3} className='p-1'>
                            <Card className={`p-3 text-white bg-${stat.color} shadow-sm d-flex justify-content-around align-items-center rounded`}>
                                <div>
                                    <h3 className='fs-2'>{stat.value}</h3>
                                    <p className='fs-5'>{stat.label}</p>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <Table className="table caption-top bg-white rounded mt-2">
                    <caption className='text-dark fs-4'>Recent Customers</caption>
                    <thead className='table-dark'>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Date of expiry of the pass</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customerData.map((customer) => (
                            <tr key={customer.id}>
                                <th scope="row">{customer.id}</th>
                                <td>{customer.firstName}</td>
                                <td>{customer.lastName}</td>
                                <td>{customer.expiry}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </LayoutAdmin>
    );
}

export default App;