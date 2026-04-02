'use client';
import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Sending email:', formData);
        alert('Thank you for your message! This is a demo; set up a backend or email service to receive messages.');
    };

    return (
        <section className="contact-section" id="contact-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-7 order-2 order-md-1">
                        <div className="contact-form-box wow fadeInLeft" data-wow-delay=".3s">
                            <div className="section-header">
                                <h2 className="section-title">Let’s work together!</h2>
                            </div>

                            <div className="tj-contact-form">
                                <form onSubmit={handleSubmit}>
                                    <div className="row gx-3">
                                        <div className="col-sm-6">
                                            <div className="form_group">
                                                <input 
                                                    type="text" 
                                                    name="fname" 
                                                    value={formData.fname}
                                                    onChange={handleChange}
                                                    placeholder="First name"
                                                    autoComplete="off" 
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form_group">
                                                <input 
                                                    type="text" 
                                                    name="lname" 
                                                    value={formData.lname}
                                                    onChange={handleChange}
                                                    placeholder="Last name"
                                                    autoComplete="off" 
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form_group">
                                                <input 
                                                    type="email" 
                                                    name="email" 
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="Email address"
                                                    autoComplete="off" 
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form_group">
                                                <input 
                                                    type="tel" 
                                                    name="phone" 
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    placeholder="Phone number"
                                                    autoComplete="off" 
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form_group">
                                                <textarea 
                                                    name="message" 
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    placeholder="Message"
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form_btn">
                                                <button type="submit" className="btn tj-btn-primary">Send Message</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5 offset-lg-1 col-md-5 d-flex flex-wrap align-items-center order-1 order-md-2">
                        <div className="contact-info-list">
                            <ul className="ul-reset">
                                <li className="d-flex flex-wrap align-items-center position-relative wow fadeInRight" data-wow-delay=".4s">
                                    <div className="icon-box">
                                        <i className="flaticon-phone-call"></i>
                                    </div>
                                    <div className="text-box">
                                        <p>Phone</p>
                                        <a href="tel:+919763023224">+91-9763023224</a>
                                        <span style={{color: 'var(--tj-white)', margin: '0 5px'}}>|</span>
                                        <a href="tel:7588244575">7588244575</a>
                                    </div>
                                </li>
                                <li className="d-flex flex-wrap align-items-center position-relative wow fadeInRight" data-wow-delay=".5s">
                                    <div className="icon-box">
                                        <i className="flaticon-mail-inbox-app"></i>
                                    </div>
                                    <div className="text-box">
                                        <p>Email</p>
                                        <a href="mailto:aniketbisure162003@gmail.com">aniketbisure162003@gmail.com</a>
                                    </div>
                                </li>
                                <li className="d-flex flex-wrap align-items-center position-relative wow fadeInRight" data-wow-delay=".6s">
                                    <div className="icon-box">
                                        <i className="flaticon-location"></i>
                                    </div>
                                    <div className="text-box">
                                        <p>Address</p>
                                        <a href="#">Pune, Maharashtra</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
