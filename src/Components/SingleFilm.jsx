import React from "react";

const SingleFilm = ({ poster }) => (
    <div className="col px-2">
        <img className="img-fluid" src={poster} alt="coverfilm" />
    </div>
);

export default SingleFilm;