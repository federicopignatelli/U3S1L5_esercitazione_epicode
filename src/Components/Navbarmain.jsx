import Image from 'react-bootstrap/Image';
import React from 'react';
import Logo from '../Asset/netflix_logo.png';
import Avatar from '../Asset/avatar.png';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';



const Navbarmain = function () {


    return (

        <Navbar expand="lg">
            <Container fluid>
                <Navbar.Brand href="#home"><Image src={Logo} alt="logo"
                    width="150px" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-white' />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className='text-white'>Home</Nav.Link>
                        <Nav.Link href="#link" className='text-white'>Tv Shows</Nav.Link>
                        <Nav.Link href="#link" className='text-white'>Movies</Nav.Link>
                        <Nav.Link href="#link" className='text-white'>Recently Added</Nav.Link>
                        <Nav.Link href="#link" className='text-white'>My List</Nav.Link>
                        <Nav.Link href="#link" className='text-white'>Account</Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">
                        <Nav.Link href="#home"><p className="fs-5 text-white mt-3"><i className="bi bi-search"></i></p></Nav.Link>
                        <Nav.Link href="#link"><p className="fs-5 text-white mt-3">KIDS</p></Nav.Link>
                        <Nav.Link href="#link"><p className="fs-5 text-white mt-3"><i className="bi bi-bell-fill"></i></p></Nav.Link>
                        <Nav.Link href="#link"><Image src={Avatar} alt="avatar" width="50px" height="50px" className="mt-2" /></Nav.Link>
                        <Nav.Link href="#link"><p className="fs-5 text-white mt-3"><i className="bi bi-caret-down-fill"></i></p></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default Navbarmain