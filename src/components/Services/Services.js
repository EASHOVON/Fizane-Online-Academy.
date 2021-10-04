import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';
import './Services.css'

const Services = () =>
{
    const [coursesDetailsBro, setCoursesDetailsBro] = useState([]);
    useEffect(() =>
    {
        fetch("./fakeDataDetailsBro.JSON")
            .then(res => res.json())
            .then(data => setCoursesDetailsBro(data))
    }, [])
    return (
        <div>
            <div className="title">
                <h1 className="text-white fw-normal text-center py-4">Course Details</h1>
            </div>
            <Container>
                <div className="row mt-5">
                    {
                        coursesDetailsBro.map(courseDetail => (<div key={courseDetail.id} className="col-md-6">
                            <Row xs={1} md={1} className="g-3">
                                <Col>
                                    <Card>
                                        <Card.Img variant="top" src={courseDetail.img} />
                                        <Card.Body>
                                            <Card.Title>{courseDetail.name}</Card.Title>
                                            <Card.Text>
                                                {courseDetail.desc}
                                            </Card.Text>
                                            <div>
                                                <div className="text-center">
                                                    <h3>For Brothers</h3>
                                                    <h6>Period: {courseDetail.period}</h6>
                                                    <h6>Duration: {courseDetail.duration}</h6>
                                                    <h6>Language: {courseDetail.lang}</h6>
                                                </div>
                                                <div className="text-center">
                                                    <h3>For Sister</h3>
                                                    <h6>Period: {courseDetail.period}</h6>
                                                    <h6>Duration: {courseDetail.duration}</h6>
                                                    <h6>Language: {courseDetail.lang}</h6>
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <Button className="btn-card">Apply Now</Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </div>))
                    }
                    <div className="text-center my-4">
                        <Button className="btn">View More</Button>
                    </div>
                </div>
                <div className="row mt-5">
                    <h3 className="text-center">Courses For Sisters</h3>

                    <div className="text-center my-4">
                        <Button className="btn">View More</Button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Services;