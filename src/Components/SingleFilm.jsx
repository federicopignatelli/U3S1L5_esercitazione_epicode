import React from "react";

const SingleFilm = ({ poster }) => (
    <div className="col mb-4 text-center px-1">
        <img className="img-fluid" src={poster} alt="" />
    </div>
);

export default SingleFilm;