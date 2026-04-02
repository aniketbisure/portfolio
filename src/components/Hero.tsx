'use client';
export default function Hero() {
    return (
        <section className="hero-section d-flex align-items-center" id="intro">
            <div className="intro_text">
                <svg viewBox="0 0 1320 300">
                    <text x="50%" y="50%" textAnchor="middle">
                        HI THERE
                    </text>
                </svg>
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="hero-content-box">
                            <span className="hero-sub-title wow fadeInLeft" data-wow-delay="1.1s">
                                I am Aniket Bisure
                            </span>
                            <h1 className="hero-title wow fadeInLeft" data-wow-delay="1.2s">
                                Full Stack Engineer
                            </h1>

                            <div className="hero-image-box d-md-none text-center wow fadeInRight" data-wow-delay="1.3s">
                                <img src="/assets/img/hero/Aniket.jpg" alt="Aniket Bisure" />
                            </div>

                            <p className="lead wow fadeInLeft" data-wow-delay="1.4s">
                                I am a Full Stack Developer with 1+ years of experience building scalable and high-performing web applications
                                using the MERN Stack and Microservices Architecture.
                            </p>
                            <div className="button-box d-flex flex-wrap align-items-center">
                                <a href="/assets/pdf/ANIKET BISURE.pdf" target="_blank" className="btn tj-btn-secondary wow fadeInLeft" data-wow-delay="1.5s">
                                    Download CV
                                </a>
                                <ul className="ul-reset social-icons wow fadeInLeft" data-wow-delay="1.6s">
                                    <li>
                                        <a href="https://www.linkedin.com/in/aniket-bisure-b86b57271/" target="_blank" rel="noopener noreferrer">
                                            <i className="fa-brands fa-linkedin-in"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/aniketbisure" target="_blank" rel="noopener noreferrer">
                                            <i className="fa-brands fa-github"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 d-none d-md-block">
                        <div className="hero-image-box text-center wow fadeInRight" data-wow-delay="1.5s">
                            <img src="/assets/img/hero/Aniket.jpg" alt="Aniket Bisure" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
