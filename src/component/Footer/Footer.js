import React from "react";
import "./Footer.css";
const Footer = () => {
    return (
        <footer className="bg-footer">
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-4">
                        <h3>educo</h3>
                        <p className="para">
                            Great lesson ideas and lesson plans for ESL teachers! Educators
                            can customize lesson plans to best.
                        </p>
                        <a className="icon fs-3 me-3" href="#">
                            <i className="bi bi-facebook "></i>
                        </a>
                        <a className="icon fs-3 mx-3" href="#">
                            <i className="bi bi-twitter "></i>
                        </a>
                        <a className="icon fs-3 mx-3" href="#">
                            <i className="bi bi-instagram "></i>
                        </a>
                        <a className="icon fs-3 mx-3" href="#">
                            <i className="bi bi-github "></i>
                        </a>
                    </div>
                    <div className="col-md-2">
                        <ul>
                            <h3>Company</h3>
                            <li className="nav-item">About</li>
                            <li className="nav-item">Courses</li>
                            <li className="nav-item">Events</li>
                            <li className="nav-item">Instructor</li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <ul>
                            <h3>Platform</h3>
                            <li className="nav-item">Browse Library</li>
                            <li className="nav-item">Library</li>
                            <li className="nav-item">Partners</li>
                            <li className="nav-item">News & Blogs</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h3>Subscribe</h3>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Your email address"
                                aria-label="Recipient's username"
                                aria-describedby="button-addon2"
                            />
                            <button className="btn btn-success" type="button" id="button-addon2">
                                <i className="bi bi-arrow-right"></i>
                            </button>
                        </div>
                        <small>Get the latest news and updates right at your inbox.</small>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
