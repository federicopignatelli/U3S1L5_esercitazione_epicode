import Image from 'react-bootstrap/Image';
import React from 'react';
import Logo from '../Asset/netflix_logo.png';
import Avatar from '../Asset/avatar.png';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';



const Navbarmain = function () {


    return (

        <Navbar className="navbar navbar-expand-lg">
            <Container fluid className="container-fluid d-flex mx-4">
                <Navbar.Brand className="navbar-brand me-5"><Image src={Logo} alt="logo"
                    width="150px" /></Navbar.Brand>

                <button className="navbar-toggler bg-secondary" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-white">
                        <li className="nav-item me-3">
                            <a className="nav-link text-white" href="#lol">Home</a>
                        </li>
                        <li className="nav-item me-3">
                            <a className="nav-link text-white" href="#lol">Tv Shows</a>
                        </li>
                        <li className="nav-item me-3">
                            <a className="nav-link text-white" href="#lol">Movies</a>
                        </li>
                        <li className="nav-item me-3">
                            <a className="nav-link text-white" href="#lol">Recently Added</a>
                        </li>
                        <li className="nav-item me-3">
                            <a className="nav-link text-white" href="#lol">My List</a>
                        </li>
                        <li className="nav-item me-3">
                            <a className="nav-link text-white" href="profile.html">Account</a>
                        </li>
                        <li>
                            <div className="row gx-4 d-sm-flex d-md-none me-4">
                                <div className="col col-2 pt-3">
                                    <p className="text-white fs-5">
                                        <i className="bi bi-search">
                                        </i>
                                    </p>
                                </div>
                                <div className="col col-3 pt-3">
                                    <p className="text-white fs-5">KIDS
                                    </p>
                                </div>
                                <div className="col col-2 pt-3">
                                    <p className="text-white fs-5">
                                        <i className="bi bi-bell-fill">
                                        </i>
                                    </p>
                                </div>
                                <div className="col col-3">
                                    <a href="profile.html">
                                        <Image src={Avatar} alt="avatar" width="50px"
                                            className="mt-2 ms-3" />
                                    </a>
                                </div>

                                <div className="col col-2 pt-3">
                                    <p className="text-white"><i className="bi bi-caret-down-fill"></i></p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="row gx-4 d-md-flex me-4 ">
                    <div className="col col-2 pt-3">
                        <p className="text-white fs-5">
                            <i className="bi bi-search">
                            </i>
                        </p>
                    </div>
                    <div className="col col-3 pt-3">
                        <p className="text-white fs-5">KIDS
                        </p>
                    </div>
                    <div className="col col-2 pt-3">
                        <p className="text-white fs-5">
                            <i className="bi bi-bell-fill">
                            </i>
                        </p>
                    </div>
                    <div className="col col-3">
                        <Image src={Avatar} alt="avatar" width="50px" height="50px" className="mt-2 ms-3" />
                    </div>
                    <div className="col col-2 pt-3">
                        <p className="text-white"><i className="bi bi-caret-down-fill"></i></p>
                    </div>
                </div>

            </Container>
        </Navbar>




    )
}

export default Navbarmain