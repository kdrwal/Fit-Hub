import React from 'react';
import { Card, Container, Row, Col, ProgressBar } from 'react-bootstrap';
import LayoutAdmin from '../components/LayoutAdmin';

const statsData = [
  { label: 'Weekly Sales', value: '$15,000', description: 'Increased by 60%', color: 'warning' },
  { label: 'Weekly Orders', value: '45,633', description: 'Decreased by 10%', color: 'info' },
  { label: 'Visitors Online', value: '95,574', description: 'Increased by 5%', color: 'success' }
];

const progressData = [
  { name: 'Jan', value: 30 },
  { name: 'Feb', value: 45 },
  { name: 'Mar', value: 28 },
  { name: 'Apr', value: 50 },
  { name: 'May', value: 32 },
  { name: 'Jun', value: 60 },
  { name: 'Jul', value: 70 },
  { name: 'Aug', value: 80 },
  { name: 'Sep', value: 85 },
  { name: 'Oct', value: 100 },
  { name: 'Nov', value: 110 },
  { name: 'Dec', value: 120 }
];

function DashboardAdmin() {
  return (
    <LayoutAdmin>
      <Container fluid>
        <Row className="mb-4">
          <Col>
            <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
          </Col>
        </Row>
        <Row className="g-4 my-2">
          {statsData.map((stat, index) => (
            <Col key={index} xs={12} sm={6} lg={4} className="p-1">
              <Card className={`text-white h-100 py-2 bg-${stat.color}`}>
                <Card.Body>
                  <Row className="align-items-center">
                    <Col xs={12}>
                      <div className="text-uppercase mb-1">{stat.label}</div>
                      <div className="h5 mb-0 font-weight-bold">{stat.value}</div>
                      <div className="mt-2">{stat.description}</div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row>
          <Col xs={12} lg={12} className="mb-4">
            <Card className="shadow-sm">
              <Card.Header className="py-3 bg-white">
                <h6 className="m-0 font-weight-bold text-primary">Visit And Sales Statistics</h6>
              </Card.Header>
              <Card.Body>
                {progressData.map((data, index) => (
                  <div key={index} className="mb-2">
                    <strong>{data.name}</strong>
                    <ProgressBar now={data.value} label={`${data.value}`} />
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </LayoutAdmin>
  );
}

export default DashboardAdmin;