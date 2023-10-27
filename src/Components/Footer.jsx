const Footer = function () {
    return (
        <footer className="mt-5">
            <div className="container">
                <div className="row">
                    <div className="col col-3">
                        <p className="text-white text-opacity-50 fs-2 text-start">
                            <i className="bi bi-facebook me-3"></i>
                            <i className="bi bi-instagram me-3"></i>
                            <i className="bi bi-twitter me-3"></i>
                            <i className="bi bi-youtube me-3"></i>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-2 text-white text-opacity-50 text-start">
                        <p>Audio and Subtitles</p>
                        <p>Media Center</p>
                        <p>Privacy</p>
                        <p>Contact Us</p>
                    </div>
                    <div className="col offset-1 col-2 text-white text-opacity-50 text-start">
                        <p>Audio Description</p>
                        <p>Investor Relation</p>
                        <p>Legal Notices</p>
                    </div>
                    <div className="col offset-1 col-2 text-white text-opacity-50 text-start">
                        <p>Help Center</p>
                        <p>Jobs</p>
                        <p>Cookie preferencies</p>
                    </div>
                    <div className="col offset-1 col-2 text-white text-opacity-50 text-start">
                        <p>Gift Card</p>
                        <p>Terms of Use</p>
                        <p>Corporate Information</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-2 mt-3 text-start">
                        <button type="button" className="btn btn-outline-light rounded-0 opacity-50 text-start">Service Code
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-2 mt-3 text-white text-opacity-50 text-start">
                        <p>&copy; 1997-2019 Netflix, Inc.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer