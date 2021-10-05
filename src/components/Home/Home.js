import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Card, Carousel, Container, Button } from 'react-bootstrap';
import './Home.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

const Home = () =>
{
    // Fetching Data courses for Brother
    const [coursesBro, setCoursesBro] = useState([]);
    useEffect(() =>
    {
        fetch("./fakeData-brother.JSON")
            .then(res => res.json())
            .then(data => setCoursesBro(data))
    }, []);
    // Fetching Data courses for Sister
    const [coursesSis, setCoursesSis] = useState([]);
    useEffect(() =>
    {
        fetch("./fakeData-sister.JSON")
            .then(res => res.json())
            .then(data => setCoursesSis(data))
    }, []);
    return (
        <div>
            {/* Header Component Start */}
            <Header></Header>
            {/* Header Component End */}

            {/* Slider of Home Page */}
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

            {/* Slider of Home Page End */}

            <div className="title">
                <h1 className="text-white fw-normal text-center py-4">Courses</h1>
            </div>

            {/* Courses Section of Home Page */}
            <Container>
                <div className="row mt-5">
                    <h3 className="text-center">Courses For Brothers</h3>
                    {/* Courses Card for Brother */}
                    {
                        coursesBro.map(course => <div key={course.id} className="col-md-3">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={course.img} />
                                <Card.Body>
                                    <Card.Title>{course.name}</Card.Title>
                                    <Card.Text>
                                        {course.desc}
                                    </Card.Text>
                                    <Link to="/courses">
                                        <Button className="btn">Veiw Details</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </div>)
                    }
                    {/* Courses Card for Brother End */}

                    <div className="text-center my-4">
                        <Link to="/courses">
                            <Button className="btn">View More</Button>
                        </Link>
                    </div>
                </div>


                <div className="row mt-5">
                    <h3 className="text-center">Courses For Sisters</h3>
                    {/* Courses Card for Sister */}
                    {
                        coursesSis.map(course => <div key={course.id} className="col-md-3">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={course.img} />
                                <Card.Body>
                                    <Card.Title>{course.name}</Card.Title>
                                    <Card.Text>
                                        {course.desc}
                                    </Card.Text>
                                    <Link to="/courses">
                                        <Button className="btn">Veiw Details</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </div>)
                    }
                    {/* Courses Card for Sister End */}
                    <div className="text-center my-4">
                        <Link to="/courses">
                            <Button className="btn">View More</Button>
                        </Link>
                    </div>
                </div>
            </Container>
            {/*  Courses Section of Home Page End */}

            {/* Footer */}
            <Footer></Footer>
            {/* Footer End */}
        </div>
    );
};

export default Home;