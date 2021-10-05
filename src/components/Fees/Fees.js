import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Fees.css';

const Fees = () =>
{
    return (
        <div>
            <Header></Header>
            <Container>
                <div className="row">
                    <div className="col-md-12">
                        <div className="fees text-center">
                            <img src="https://www.quranteacher.net/web_assets/images/feeCollect/new_fee.jpeg" alt="" />
                        </div>
                    </div>
                </div>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Fees;