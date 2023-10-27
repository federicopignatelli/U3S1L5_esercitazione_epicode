import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css'

const Footer = function () {
    return (
        <>

            <Container fluid className='mx-3'>
                <Row>
                    <Container fluid className='d-flex text-white text-opacity-50 fs-4 mb-4 mt-5 '>
                        <i className="bi bi-facebook me-3"></i>
                        <i className="bi bi-instagram me-3"></i>
                        <i className="bi bi-twitter me-3"></i>
                        <i className="bi bi-youtube me-3"></i>
                    </Container>
                </Row>
                <Row className='text-white text-opacity-50'>
                    <Col className='col-12 col-md-3'>
                        <p>Audio and Subtitles</p>
                        <p>Media Center</p>
                        <p>Privacy</p>
                        <p>Contact Us</p>
                    </Col>
                    <Col className='col-12 col-md-3'>
                        <p>Audio Description</p>
                        <p>Investor Relation</p>
                        <p>Legal Notices</p>
                    </Col>
                    <Col className='col-12 col-md-3'>
                        <p>Help Center</p>
                        <p>Jobs</p>
                        <p>Cookie preferencies</p>
                    </Col>
                    <Col className='col-12 col-md-3'>
                        <p>Gift Card</p>
                        <p>Terms of Use</p>
                        <p>Corporate Information</p>
                    </Col>
                </Row>
                <Row className='text-white text-opacity-50 mt-3'>
                    <Col className='col-12 mb-2 '>
                        <button type="button" className="btn btn-outline-light rounded-0 opacity-50 text-start">Service Code</button>
                    </Col>
                    <Col className='col-12 mb-4'>
                        <p>&copy; 1997-2019 Netflix, Inc.</p>
                    </Col>
                </Row>
            </Container>




        </>
    )
}



export default Footer