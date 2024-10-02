import React, { useState } from "react";
import './Articles.css';
import { Card, Container, Row, Col, Modal, Button } from 'react-bootstrap';
import art1 from '../pic/art1.jpg';
import art2 from '../pic/art2.jpg';
import art3 from '../pic/art3.jpg';
import art4 from '../pic/art4.jpg';
import art5 from '../pic/art5.jpg';
import art6 from '../pic/art6.jpg';


const articles = [
    {
        title: 'Overcoming Challenges to Make a Living Online',
        category: 'Business',
        date: '7 Feb 2023',
        views: 55,
        image: art1,
        description: 'Sed placerat luctus mi, mollis mattis nisl accumsan mollis. Donec nibh sapien, sodales eu tincidunt tristique, interdum in erat.'
    },
    {
        title: 'How to Exercise to Achieve Your Nutrition Goals',
        category: 'Nutrition',
        date: '12 Aug 2023',
        views: 39,
        image: art2,
        description: 'Sed placerat luctus mi, mollis mattis nisl accumsan mollis. Donec nibh sapien, sodales eu tincidunt tristique, interdum in erat.'
    },
    {
        title: '10 Tips To Lose Weight Quickly Without Dieting',
        category: 'Health',
        date: '21 Dec 2023',
        views: 61,
        image: art3,
        description: 'Sed placerat luctus mi, mollis mattis nisl accumsan mollis. Donec nibh sapien, sodales eu tincidunt tristique, interdum in erat.'
    },
    {
        title: 'Building Strength: A Guide for Beginners',
        category: 'Fitness',
        date: '5 Jan 2024',
        views: 77,
        image: art4,
        description: 'Learn how to build strength effectively with our guide for beginners. Perfect for those just starting out.'
    },
    {
        title: 'The Best Nutrition Plans for Muscle Gain',
        category: 'Nutrition',
        date: '18 Mar 2024',
        views: 102,
        image: art5,
        description: 'Discover the best nutrition plans tailored for muscle gain and improve your diet for better results.'
    },
    {
        title: 'Yoga and Flexibility: How to Get Started',
        category: 'Health',
        date: '10 Apr 2024',
        views: 64,
        image: art6,
        description: 'Explore the benefits of yoga for flexibility and learn how to get started with simple poses and routines.'
    }
];



function Articles() {
    const [selectedArticle, setSelectedArticle] = useState(null);

    const handleClose = () => setSelectedArticle(null);
    const handleShow = (article) => setSelectedArticle(article);

    return (
        
            <div className='articles-page'>
                <header className='mt-5'>
                    <div className='container h-100 d-flex align-items-center justify-content-center'>
                        <h1 className='text-light'>Our News</h1>
                    </div>
                </header>
                <Container className="mt-5">
                    <h2 className="text-center mb-4">Here is our blog's latest company news about regularly publishing fresh content.</h2>
                    <Row>
                        {articles.map((article, index) => (
                            <Col lg={4} md={6} sm={12} key={index} className="d-flex align-items-stretch">
                                <Card className="mb-4 shadow-sm" onClick={() => handleShow(article)}>
                                    <Card.Img variant="top" src={article.image} />
                                    <Card.Body>
                                        <Card.Subtitle className="mb-2 text-muted">{article.category}</Card.Subtitle>
                                        <Card.Title>{article.title}</Card.Title>
                                        <Card.Text>{article.description}</Card.Text>
                                    </Card.Body>
                                    <Card.Footer className="text-muted">
                                        <small>{article.date} - {article.views} views</small>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>

                {selectedArticle && (
                    <Modal show={true} onHide={handleClose} size="lg">
                        <Modal.Header closeButton>
                            <Modal.Title>{selectedArticle.title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Card>
                                <Card.Img variant="top" src={selectedArticle.image} />
                                <Card.Body>
                                    <Card.Subtitle className="mb-2 text-muted">{selectedArticle.category}</Card.Subtitle>
                                    <Card.Text>{selectedArticle.description}</Card.Text>
                                    <p>{selectedArticle.content}</p> 
                                </Card.Body>
                                <Card.Footer className="text-muted">
                                    <small>{selectedArticle.date} - {selectedArticle.views} views</small>
                                </Card.Footer>
                            </Card>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                )}
            </div>
        
    );
}

export default Articles;