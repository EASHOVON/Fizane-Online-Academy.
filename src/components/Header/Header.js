import React from 'react';
import { Stack } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
const Header = () =>
{
    return (
        <div>
            <div className="bg-dark pt-3 pb-1 text">
                <h4 className="text-center text-white">Madrasatul Madina Online</h4>
            </div>
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-4 logo">
                        <Link to="#">
                            <img src="./images/logo.png" alt="" />
                        </Link>
                    </div>
                    <div className="col-md-8">
                        <Stack direction="horizontal" gap={0}>
                            <NavLink className="link"
                                to="/home"
                                activeStyle={{
                                    backgroundColor: '#54A5DC',
                                    color: 'white'
                                }}
                            >
                                Home
                            </NavLink>
                            <NavLink className="link"
                                to="/services"
                                activeStyle={{
                                    backgroundColor: '#54A5DC',
                                    color: 'white'
                                }}
                            >
                                Courses
                            </NavLink>
                            <NavLink className="link"
                                to="/about"
                                activeStyle={{
                                    backgroundColor: '#54A5DC',
                                    color: 'white'
                                }}
                            >
                                About Us
                            </NavLink>
                            <NavLink className="link"
                                to="/contact"
                                activeStyle={{
                                    backgroundColor: '#54A5DC',
                                    color: 'white'
                                }}
                            >
                                Contact Us
                            </NavLink>
                            <NavLink className="link"
                                to="/fees"
                                activeStyle={{
                                    backgroundColor: '#54A5DC',
                                    color: 'white'
                                }}
                            >
                                Fees
                            </NavLink>
                        </Stack>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;