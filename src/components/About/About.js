import React from 'react';
import { Container, Button } from 'react-bootstrap';
import ReactPlayer from "react-player";
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './About.css'


const About = () =>
{
    return (
        <div>
            {/* Header */}
            <Header></Header>
            {/* Header End */}

            <div className="title">
                <h1 className="text-white fw-normal text-center py-4">Welcome To Quran Teacher</h1>
            </div>
            {/* About Section Start */}
            <Container className="mb-5 ">
                <div className="row">
                    <div className="col-md-6">
                        <p className="pt-4 fs-6 about">We welcome our users to Online Quran teaching services where we are offering multiple Islamic as well as character building and life reformation courses as per the teachings of Sharia. Thousands of individuals have learned to read Quran with these online Quran classes service in Pakistan and many other countries of the globe. As Dawat-e-Islami is doing its services in more than 107 walks of life with the sole aim of propagating the teachings of Quran and Sunnah and this is another step for those Islamic brothers and sisters who are aged or busy in their worldly affairs but haven’t learned the proper recitation of Quran. We urged to all our Islamic brothers and sisters to take admission in this online Quran academy and learn to read Quran properly. Being a Muslim, it is our religious duty that we should not only recite Quran but also try to understand every word of it and if you are one of them who are unable to recite Quran properly then take admission in this online Quran teaching service and enlighten your heart with the sacred holy book of Almighty.</p>
                        <div className="text-center">
                            <Button className="btn">Read More</Button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <ReactPlayer width="100%" height="350px" controls url="https://youtu.be/6RqUyGZVwjE" />
                    </div>
                </div>
            </Container>
            {/* About Section End */}

            {/* Footer */}
            <Footer></Footer>
            {/* Footer End */}
        </div>
    );
};

export default About;