import React from 'react';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Footer.css";
const Footer = () => {
    const date = (new Date().getFullYear())
    return (
        <div className='bg-dark text-white'>
            <div className="container">
                <div className="row gy-4 gx-5">
                    <div className="col-lg-4 col-md-6">
                        <h5 className="h1 text-white">FB.</h5>
                        <p className="small text-muted">We pride ourselves on running a business with an unprecedented after-sales service which is the envy of many other retailers.</p>

                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-3">Quick links</h5>
                        <ul className="list-unstyled text-muted">
                            <li><Link to={"/"}>Home</Link></li>
                            <li><Link to={"/"}>About</Link></li>
                            <li><Link to={"/"}>Get started</Link></li>
                            <li><Link to={"/"}>FAQ</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <h5 className="text-white mb-3">Newsletter</h5>
                        <p className="small text-muted">Get notified on our latest arrivals and get the best prices first!
                            Sign up for our newsletter today.</p>
                        <form action="#">
                            <div className="input-group mb-3">
                                <input class="form-control" type="text" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                <button className="btn btn-primary" id="button-addon2" type="button"><i className="fas fa-paper-plane"></i></button>
                            </div>
                        </form>
                    </div>
                </div>
                <hr />
                <div>
                    <div className=' text-center'>
                        <i className="me-2 text-primary social-icon fab fa-facebook-f"></i>
                        <i className="me-2 text-info social-icon fab fa-twitter"></i>
                        <i className="me-2 text-danger social-icon fab fa-instagram"></i>
                        <i className="social-icon fas fa-envelope text-warning"></i>
                    </div>
                    <p className="small text-muted mb-0 text-center">&copy; Copyrights {date}. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;