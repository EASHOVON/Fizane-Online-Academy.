import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Contact = () =>
{
    return (
        <div>
            <Header></Header>
            <div className="title">
                <h1 className="text-white fw-normal text-center py-4">Contact Us</h1>
            </div>
            <Container className="mb-5 ">
                <div className="row">
                    <div className="col-md-5">
                        <h2>Connect To Quran Teacher</h2>
                        <h5>(Faizan Online Academy)</h5>
                        <p><b>Address: </b> Global Islamic Centre
                            Aalami Madani Markaz Faizan-e-Madina,
                            Near Capital Telephone Exchange,
                            Main University Road,
                            Babul Madina Karachi 75300 Pakistan.</p>
                        <p><b>Email: </b> mtmo.ibhai @dawateislami.net</p>
                        <p><b>UAN: </b> +92 313 92 92 992</p>
                        <p><b>Whatsapp: </b> +92 313 92 92 992</p>
                        <div>
                            <Link to="https://www.facebook.com/OnlineMadrasatulMadina/" title="For Latest Updates">
                                <img src="https://www.quranteacher.net/web_assets/images/contactus.jpg" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <form className="row g-3">
                            <div className="col-md-6">
                                <input type="text" placeholder="Your Name" className="form-control" />
                            </div>
                            <div className="col-md-6">
                                <input type="email" placeholder="Your e-mail" className="form-control" />
                            </div>
                            <div className="col-12">
                                <input type="text" className="form-control" placeholder="Subject" />
                            </div>
                            <div className="col-12">
                                <textarea placeholder="Message" name="body" id="body" width="100%" rows="10" className="form-control"></textarea>
                            </div>
                            <div className="col-12">
                                <Button type="submit" className="btn">Send A Message</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Contact;