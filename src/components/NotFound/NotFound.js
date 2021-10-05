import { Button } from 'react-bootstrap';
import React from 'react';
import { Container } from 'react-bootstrap';
import './NotFound.css'
import { Link } from 'react-router-dom';

const NotFound = () =>
{
    return (
        <div>
            <Container>
                <div className="row">
                    <div className="col-md-12">
                        <div className="custom-area">
                            <div className="not-found text-center">
                                <img src="./images/notfound.png" alt="" />
                            </div>
                            <div className="custom-btn">
                                <Link to="/home">
                                    <Button varient="primary">Back To Home</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default NotFound;