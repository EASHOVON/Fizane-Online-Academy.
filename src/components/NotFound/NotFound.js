import React from 'react';
import { Container } from 'react-bootstrap';

const NotFound = () =>
{
    return (
        <div>
            <Container>
                <div className="row">
                    <div className="col-md-12">
                        <div className="fees text-center">
                            <img src="./images/notfound.png" alt="" />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default NotFound;