import LayoutAdmin from "../components/LayoutAdmin";
import React, { useState } from "react";
import { Card, Container, Row, Col, Table, Button, Modal, Form } from 'react-bootstrap';

const initialProductData = [
    { id: 1, name: 'Vitamins', category: 'Health', stock: 'In Stock', price: '$10' },
    { id: 2, name: 'Creatine', category: 'Strength', stock: 'Out of Stock', price: '$20' },
    { id: 3, name: 'Testosterone', category: 'Strength', stock: 'In Stock', price: '$15' },
    { id: 4, name: 'Ashwagandha', category: 'Regeneration', stock: 'In Stock', price: '$25' },
    { id: 5, name: 'Colagen', category: 'Health', stock: 'Out of Stock', price: '$30' },
];

const statsData = [
    { value: '150', label: 'Total Products', color: 'primary' },
    { value: '20', label: 'Out of Stock', color: 'danger' },
    { value: '30', label: 'New Arrivals', color: 'success' },
    { value: '50', label: 'Top Sellers', color: 'warning' },
];

function ProductsAdmin() {
    const [products, setProducts] = useState(initialProductData);
    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState({ id: '', name: '', category: '', stock: '', price: '' });

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setFormData({ id: '', name: '', category: '', stock: '', price: '' });
        setShow(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSave = () => {
        if (formData.id) {
            setProducts(products.map(product => product.id === formData.id ? formData : product));
        } else {
            setProducts([...products, { ...formData, id: products.length + 1 }]);
        }
        handleClose();
    };

    const handleEdit = (product) => {
        setFormData(product);
        setShow(true);
    };

    const handleDelete = (id) => {
        setProducts(products.filter(product => product.id !== id));
    };

    return (
        <LayoutAdmin>
            <Container fluid>
                <Col>
                    <h1 className="h3 mb-0 text-gray-800">Products</h1>
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
                <Row className='g-3 my-2'>
                    <Col className='p-1'>
                        <Button variant="primary" onClick={handleShow}>Add New Product</Button>
                        <Card className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded mt-3'>
                            <Table className="table caption-top bg-white rounded mt-2">
                                <caption className='text-dark fs-4'>Products List</caption>
                                <thead className='table-dark'>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Category</th>
                                        <th scope="col">Stock Status</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((product) => (
                                        <tr key={product.id}>
                                            <th scope="row">{product.id}</th>
                                            <td>{product.name}</td>
                                            <td>{product.category}</td>
                                            <td>{product.stock}</td>
                                            <td>{product.price}</td>
                                            <td>
                                                <Button variant="warning" onClick={() => handleEdit(product)}>Edit</Button>{' '}
                                                <Button variant="danger" onClick={() => handleDelete(product.id)}>Delete</Button>
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
                    <Modal.Title>{formData.id ? 'Edit Product' : 'Add New Product'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter product name" name="name" value={formData.name} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Category</Form.Label>
                            <Form.Control type="text" placeholder="Enter category" name="category" value={formData.category} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Stock Status</Form.Label>
                            <Form.Control type="text" placeholder="Enter stock status" name="stock" value={formData.stock} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="text" placeholder="Enter price" name="price" value={formData.price} onChange={handleChange} />
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

export default ProductsAdmin;