'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
    const [isSticky, setIsSticky] = useState(false);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [stickyOut, setStickyOut] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scroll = window.scrollY;
            if (scroll > 300) {
                setIsSticky(true);
                setStickyOut(false);
            } else if (scroll < lastScrollTop) {
                if (scroll < 500 && scroll > 0) {
                    setStickyOut(true);
                    setIsSticky(false);
                } else {
                    setIsSticky(false);
                    setStickyOut(false);
                }
            } else {
                setIsSticky(false);
            }
            setLastScrollTop(scroll <= 0 ? 0 : scroll);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollTop]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (!isMenuOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        document.body.classList.remove('overflow-hidden');
    };

    return (
        <>
            {/* Header for Absolute (Initial State) */}
            <header className="tj-header-area header-absolute">
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex flex-wrap align-items-center">
                            <div className="logo-box">
                                <Link href="/">
                                    <img src="/assets/img/logo.png" alt="Logo" />
                                </Link>
                            </div>

                            <div className="header-info-list d-none d-md-inline-block">
                                <ul className="ul-reset">
                                    <li><a href="mailto:aniketbisure162003@gmail.com">aniketbisure162003@gmail.com</a></li>
                                </ul>
                            </div>

                            <div className={`header-menu ${isMenuOpen ? 'opened' : ''}`}>
                                <nav>
                                    <ul>
                                        <li><a href="#intro" onClick={closeMenu}>Home</a></li>
                                        <li><a href="#services-section" onClick={closeMenu}>Works</a></li>
                                        <li><a href="#resume-section" onClick={closeMenu}>Resume</a></li>
                                        <li><a href="#skills-section" onClick={closeMenu}>Skills</a></li>
                                        <li><a href="#contact-section" onClick={closeMenu}>Contact</a></li>
                                    </ul>
                                </nav>
                            </div>

                            <div className="header-button">
                                <a href="#contact-section" className="btn tj-btn-primary">Hire me!</a>
                            </div>

                            <div className="menu-bar d-lg-none">
                                <button onClick={toggleMenu} className={isMenuOpen ? 'menu-bar-toggeled' : ''}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Sticky Header */}
            <header className={`tj-header-area header-2 header-sticky ${isSticky ? 'sticky' : ''} ${stickyOut ? 'sticky-out' : ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex flex-wrap align-items-center">
                            <div className="logo-box">
                                <Link href="/">
                                    <img src="/assets/img/logo.png" alt="Logo" />
                                </Link>
                            </div>

                            <div className="header-info-list d-none d-md-inline-block">
                                <ul className="ul-reset">
                                    <li><a href="mailto:aniketbisure162003@gmail.com">aniketbisure162003@gmail.com</a></li>
                                </ul>
                            </div>

                            <div className={`header-menu ${isMenuOpen ? 'opened' : ''}`}>
                                <nav>
                                    <ul>
                                        <li><a href="#intro" onClick={closeMenu}>Home</a></li>
                                        <li><a href="#services-section" onClick={closeMenu}>Works</a></li>
                                        <li><a href="#resume-section" onClick={closeMenu}>Resume</a></li>
                                        <li><a href="#skills-section" onClick={closeMenu}>Skills</a></li>
                                        <li><a href="#contact-section" onClick={closeMenu}>Contact</a></li>
                                    </ul>
                                </nav>
                            </div>

                            <div className="header-button">
                                <a href="#contact-section" className="btn tj-btn-primary">Hire me!</a>
                            </div>

                            <div className="menu-bar d-lg-none">
                                <button onClick={toggleMenu} className={isMenuOpen ? 'menu-bar-toggeled' : ''}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
