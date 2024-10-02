import LayoutAdmin from "../components/LayoutAdmin";
import React, { useState } from "react";
import { Card, Container, Row, Col, Table, Button, Modal, Form } from 'react-bootstrap';

const initialCustomerData = [
    { id: 1, firstName: 'Mark', lastName: 'Otto', email: 'mark.otto@example.com', phone: '123-456-7890', status: 'active' },
    { id: 2, firstName: 'Jacob', lastName: 'Thornton', email: 'jacob.thornton@example.com', phone: '123-456-7891', status: 'inactive' },
    { id: 3, firstName: 'Larry', lastName: 'Bird', email: 'larry.bird@example.com', phone: '123-456-7892', status: 'active' },
    { id: 4, firstName: 'Tom', lastName: 'Brown', email: 'tom.brown@example.com', phone: '123-456-7893', status: 'inactive' },
    { id: 5, firstName: 'Harry', lastName: 'Potter', email: 'harry.potter@example.com', phone: '123-456-7894', status: 'active' },
];

const statsData = [
    { value: '3', label: 'Active Customers', color: 'primary' },
    { value: '2', label: 'Inactive Customers', color: 'danger' },
    { value: '5', label: 'Total Customers', color: 'success' },
];

function CustomersAdmin() {
    const [customers, setCustomers] = useState(initialCustomerData);
    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState({ id: '', firstName: '', lastName: '', email: '', phone: '', status: '' });

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setFormData({ id: '', firstName: '', lastName: '', email: '', phone: '', status: '' });
        setShow(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSave = () => {
        if (formData.id) {
            setCustomers(customers.map(customer => customer.id === formData.id ? formData : customer));
        } else {
            setCustomers([...customers, { ...formData, id: customers.length + 1 }]);
        }
        handleClose();
    };

    const handleEdit = (customer) => {
        setFormData(customer);
        setShow(true);
    };

    const handleDelete = (id) => {
        setCustomers(customers.filter(customer => customer.id !== id));
    };

    const activeCustomers = customers.filter(customer => customer.status === 'active');
    const inactiveCustomers = customers.filter(customer => customer.status === 'inactive');

    return (
        <LayoutAdmin>
            <Container fluid>
                <Col>
                    <h1 className="h3 mb-0 text-gray-800">Customers</h1>
                </Col>
                <Row className='g-3 my-2'>
                    {statsData.map((stat, index) => (
                        <Col key={index} md={4} className='p-1'>
                            <Card className={`p-3 text-white bg-${stat.color} shadow-sm d-flex justify-content-around align-items-center rounded`}>
                                <div>
                                    <h3 className='fs-2'>{stat.value}</h3>
                                    <p className='fs-5'>{stat.label}</p>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <Row className='g-3 my-2'>
                    <Col className='p-1'>
                        <Button variant="primary" onClick={handleShow}>Add New Customer</Button>
                    </Col>
                </Row>
                <Row className='g-3 my-2'>
                    <Col className='p-1'>
                        <Card className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded mt-3'>
                            <Table className="table caption-top bg-white rounded mt-2">
                                <caption className='text-dark fs-4'>Active Customers</caption>
                                <thead className='table-dark'>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First Name</th>
                                        <th scope="col">Last Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Phone</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {activeCustomers.map((customer) => (
                                        <tr key={customer.id}>
                                            <th scope="row">{customer.id}</th>
                                            <td>{customer.firstName}</td>
                                            <td>{customer.lastName}</td>
                                            <td>{customer.email}</td>
                                            <td>{customer.phone}</td>
                                            <td>
                                                <Button variant="warning" onClick={() => handleEdit(customer)}>Edit</Button>{' '}
                                                <Button variant="danger" onClick={() => handleDelete(customer.id)}>Delete</Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Card>
                    </Col>
                </Row>
                <Row className='g-3 my-2'>
                    <Col className='p-1'>
                        <Card className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded mt-3'>
                            <Table className="table caption-top bg-white rounded mt-2">
                                <caption className='text-dark fs-4'>Inactive Customers</caption>
                                <thead className='table-dark'>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First Name</th>
                                        <th scope="col">Last Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Phone</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {inactiveCustomers.map((customer) => (
                                        <tr key={customer.id}>
                                            <th scope="row">{customer.id}</th>
                                            <td>{customer.firstName}</td>
                                            <td>{customer.lastName}</td>
                                            <td>{customer.email}</td>
                                            <td>{customer.phone}</td>
                                            <td>
                                                <Button variant="warning" onClick={() => handleEdit(customer)}>Edit</Button>{' '}
                                                <Button variant="danger" onClick={() => handleDelete(customer.id)}>Delete</Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{formData.id ? 'Edit Customer' : 'Add New Customer'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter first name" name="firstName" value={formData.firstName} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter last name" name="lastName" value={formData.lastName} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email" value={formData.email} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="text" placeholder="Enter phone number" name="phone" value={formData.phone} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Status</Form.Label>
                            <Form.Control as="select" name="status" value={formData.status} onChange={handleChange}>
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </LayoutAdmin>
    );
}

export default CustomersAdmin;