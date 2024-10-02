import React, { useState } from "react";
import { Card, Container, Row, Col, Table, Button } from 'react-bootstrap';
import LayoutAdmin from "../components/LayoutAdmin";

const trainerData = [
    { id: 1, firstName: 'Anna', lastName: 'Green', profession: 'Fitness Goals', available: true },
    { id: 2, firstName: 'George', lastName: 'Floyd', profession: 'Dynamic Trainings', available: true },
    { id: 3, firstName: 'Laura', lastName: 'Smith', profession: 'Strength Training', available: false },
    { id: 4, firstName: 'Tom', lastName: 'Brown', profession: 'Cardio Exercises', available: false },
];

const applicationData = [
    { id: 1, firstName: 'John', lastName: 'Doe', profession: 'Yoga Instructor' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', profession: 'Pilates Instructor' },
    { id: 3, firstName: 'Jim', lastName: 'Beam', profession: 'CrossFit Coach' },
    { id: 4, firstName: 'Jake', lastName: 'Blues', profession: 'Dance Instructor' },
    { id: 5, firstName: 'Elwood', lastName: 'Blues', profession: 'Boxing Coach' },
];

const statsData = [
    { value: '2', label: 'Active Trainers', color: 'success' },
    { value: '2', label: 'Absent Trainers', color: 'danger' },
    { value: '5', label: 'Incoming Applications', color: 'warning' },
];

function TrainerAdmin() {
    const [showAvailableOnly, setShowAvailableOnly] = useState(false);

    const Toggle = () => {
        setShowAvailableOnly(!showAvailableOnly);
    }

    const filteredTrainers = showAvailableOnly ? trainerData.filter(trainer => trainer.available) : trainerData;

    return (
        <LayoutAdmin>
            <Container fluid>
                <Col>
                    <h1 className="h3 mb-0 text-gray-800">Trainers</h1>
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
                        <Button onClick={Toggle} className='btn-primary mb-3'>
                            {showAvailableOnly ? 'Show All Trainers' : 'Show Available Trainers Only'}
                        </Button>
                        <Card className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                            <Table className="table caption-top bg-white rounded mt-2">
                                <caption className='text-dark fs-4'>Trainers</caption>
                                <thead className='table-dark'>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Profession</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredTrainers.map((trainer) => (
                                        <tr key={trainer.id}>
                                            <th scope="row">{trainer.id}</th>
                                            <td>{trainer.firstName}</td>
                                            <td>{trainer.lastName}</td>
                                            <td>{trainer.profession}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Card>
                        <Card className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded mt-3'>
                            <Table className="table caption-top bg-white rounded mt-2">
                                <caption className='text-dark fs-4'>Incoming Applications</caption>
                                <thead className='table-dark'>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Profession</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {applicationData.map((application) => (
                                        <tr key={application.id}>
                                            <th scope="row">{application.id}</th>
                                            <td>{application.firstName}</td>
                                            <td>{application.lastName}</td>
                                            <td>{application.profession}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </LayoutAdmin>
    );
}

export default TrainerAdmin;