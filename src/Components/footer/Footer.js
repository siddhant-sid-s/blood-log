import React from 'react';
import './footer.css';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section about">
                        <h2>About Us</h2>
                        <p>
                            Your blood donation can save a life. We connect donors and recipients.
                        </p>
                        <div className="contact">
                            <span>
                                <i className="fas fa-phone"></i> 123-456-789
                            </span>
                            <span>
                                <i className="fas fa-envelope"></i> info@bloodunity.com
                            </span>
                        </div>
                    </div>
                    <div className="footer-section links">
                        <h2>Quick Links</h2>
                        <ul>
                            <li>
                                <Link to={'/'}>Home</Link>
                            </li>
                            <li>
                                <Link to={'/About'}>About Us</Link>
                            </li>
                            <li>
                                <Link to={'/Contact'}>Contact</Link>
                            </li>
                            <li>
                                <Link to={'/Register'}>Donate Now</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-section social">
                        <h2>Connect With Us</h2>

                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2023 Blood Unity. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer