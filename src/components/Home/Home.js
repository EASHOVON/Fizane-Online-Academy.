import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Card, Carousel, Container, Button } from 'react-bootstrap';
import './Home.css';
import VideoPlayer from 'react-video-js-player'

const Home = () =>
{

    const [coursesBro, setCoursesBro] = useState([]);
    useEffect(() =>
    {
        fetch("./fakeData-brother.JSON")
            .then(res => res.json())
            .then(data => setCoursesBro(data))
    }, []);

    const [coursesSis, setCoursesSis] = useState([]);
    useEffect(() =>
    {
        fetch("./fakeData-sister.JSON")
            .then(res => res.json())
            .then(data => setCoursesSis(data))
    }, []);
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./images/slider-1.jpeg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./images/slider-2.jpeg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./images/slider-3.jpeg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <div className="title">
                <h1 className="text-white fw-normal text-center py-4">Courses</h1>
            </div>
            <Container>
                <div className="row mt-5">
                    <h3 className="text-center">Courses For Brothers</h3>
                    {
                        coursesBro.map(course => <div key={course.id} className="col-md-3">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={course.img} />
                                <Card.Body>
                                    <Card.Title>{course.name}</Card.Title>
                                    <Card.Text>
                                        {course.desc}
                                    </Card.Text>
                                    <Button variant="primary">Veiw Details</Button>
                                </Card.Body>
                            </Card>
                        </div>)
                    }
                    <div className="text-center my-4">
                        <Button className="btn">View More</Button>
                    </div>
                </div>
                <div className="row mt-5">
                    <h3 className="text-center">Courses For Sisters</h3>
                    {
                        coursesSis.map(course => <div key={course.id} className="col-md-3">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={course.img} />
                                <Card.Body>
                                    <Card.Title>{course.name}</Card.Title>
                                    <Card.Text>
                                        {course.desc}
                                    </Card.Text>
                                    <Button className="btn">Veiw Details</Button>
                                </Card.Body>
                            </Card>
                        </div>)
                    }
                    <div className="text-center my-4">
                        <Button className="btn">View More</Button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Home;