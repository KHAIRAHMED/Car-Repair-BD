import { faFacebookF, faGooglePlusG, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css"
const Footer = () => {
    return (
        <section className="footer-section">
            <div className="d-flex justify-content-center">
                <div className="row w-75 ">
                    <div className="col-md-4 col-sm-6 col-12 text-secondary d-flex justify-content-center">
                        <div>
                            <h4 style={{ color: "#1CC7C1" }}>OUR SERVICES</h4>
                            <p>
                                <Link to="">Engine Diagnostic</Link>
                            </p>
                            <p>
                                <Link to="">Lube ,Oil , and Filters</Link>
                            </p>
                            <p>
                                <Link to="">Belts and Hoses</Link>
                            </p>
                            <p>
                                <Link to="">Air Conditioning</Link>
                            </p>
                            <p>
                                <Link to="">Break Repair</Link>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4  col-sm-6 col-12 text-secondary d-flex justify-content-center">
                        <div>
                            <h4 style={{ color: "#1CC7C1" }}>HOURS</h4>
                            <p>Monday - 730am to 5.30pm</p>
                            <p>Tuesday - 730am to 5.30pm</p>
                            <p>Wednesday - 730am to 5.30pm</p>
                            <p>Thursday - 730am to 5.30pm</p>
                            <p>Friday - 730am to 5.30pm</p>
                            <p>Saturday - 730am to 5.30pm</p>
                            <p>Sunday - 730am to 5.30pm</p>

                        </div>
                    </div>
                    <div className="col-md-4  col-sm-6 col-12 text-secondary d-flex justify-content-center">
                        <div>
                            <h4 style={{ color: "#1CC7C1" }}>Our Address</h4>
                            <p>Bangladesh , Chittagong , Feni</p>
                            <div style={{ display: "flex" }}>
                                <p className="icon-section">
                                    <Link to="/">
                                        <FontAwesomeIcon className="fontIcon" icon={faFacebookF}></FontAwesomeIcon>
                                    </Link>
                                </p>
                                <p className="icon-section">
                                    <Link to="/">
                                        <FontAwesomeIcon className="fontIcon" icon={faGooglePlusG}></FontAwesomeIcon>
                                    </Link>
                                </p>
                                <p className="icon-section">
                                    <Link to="/">
                                        <FontAwesomeIcon className="fontIcon" icon={faTwitter}></FontAwesomeIcon>
                                    </Link>
                                </p>
                            </div>
                            <p>Call Now</p>
                            <button className="btn btn-primary">01833994508</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="text-center my-5">
                <p className="text-secondary">
                    Copyright {(new Date()).getFullYear()} all Rights Reserved
                </p>

            </div>
        </section>
    );
};

export default Footer;