import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Services.css';

const Services = () =>
{
    // Fething Data for Course Details
    const [coursesDetailsBro, setCoursesDetailsBro] = useState([]);
    useEffect(() =>
    {
        fetch("./fakeDataDetailsBro.JSON")
            .then(res => res.json())
            .then(data => setCoursesDetailsBro(data))
    }, [])
    return (
        <div>
            {/* Header Start */}
            <Header></Header>
            {/* Header End */}
            <div className="title">
                <h1 className="text-white fw-normal text-center py-4">Course Details</h1>
            </div>

            {/* Course Details Card Start */}
            <Container>
                <div className="row my-5">
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
                                                <div>
                                                    <h5>For Brothers</h5>
                                                    <p><b>Period:</b> {courseDetail.period}, <b>Duration:</b> {courseDetail.duration}, <b>Language:</b> {courseDetail.lang}</p>
                                                </div>
                                                <div>
                                                    <h5>For Sister</h5>
                                                    <p><b>Period:</b> {courseDetail.period}, <b>Duration:</b> {courseDetail.duration}, <b>Language:</b> {courseDetail.lang}</p>
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
                </div>
            </Container>
            {/* Course Details Card End */}

            {/* Footer */}
            <Footer></Footer>
            {/* Footer End */}
        </div>
    );
};

export default Services;