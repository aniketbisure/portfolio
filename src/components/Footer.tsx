'use client';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="tj-footer-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="footer-logo-box">
                            <Link href="/">
                                <img src="/assets/img/logo.png" alt="Logo" />
                            </Link>
                        </div>
                        <div className="footer-menu">
                            <nav>
                                <ul>
                                    <li><a href="#intro">Home</a></li>
                                    <li><a href="#services-section">Works</a></li>
                                    <li><a href="#resume-section">Resume</a></li>
                                    <li><a href="#skills-section">Skills</a></li>
                                    <li><a href="#contact-section">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="copy-text">
                            <p>&copy; 2024 All rights reserved by <a href="#" target="_blank">Aniket Bisure</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
