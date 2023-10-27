import React from "react";

import Col from 'react-bootstrap/Col';


const SingleFilm = ({ poster }) => (
    <Col className="col-12 col-sm-6 col-md-2 col-lg-1 col-xl-1 col-xxl-1 my-2">
        <img className="img-fluid" src={poster} alt="coverfilm" />
    </Col>
);

export default SingleFilm;