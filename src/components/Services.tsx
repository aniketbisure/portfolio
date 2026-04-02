'use client';
import { useState, useRef, useEffect } from 'react';

export default function Services() {
    const [activeService, setActiveService] = useState(0);
    const [hoveredService, setHoveredService] = useState<number | null>(null);
    const [bgStyle, setBgStyle] = useState({});
    const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);
    const widgetRef = useRef<HTMLDivElement>(null);

    const services = [
        {
            id: 1,
            title: "Election Management Software",
            number: "01",
            desc: "Engineered a multi-tenant election management system with Flutter frontend and Node.js backend supporting multiple independent client organizations. Integrated JWT-based RBAC and automated APK generation."
        },
        {
            id: 2,
            title: "Connectify - Music Platform",
            number: "02",
            desc: "Architected a full-stack social music streaming platform using Socket.IO for real-time shared experiences between matched users globally. Built with Next.js 16 and Tailwind CSS 4."
        },
        {
            id: 3,
            title: "Desktop Assistant (Python)",
            number: "03",
            desc: "I developed a sophisticated desktop assistant using Python, incorporating voice recognition and natural language processing to enhance user productivity through automation."
        }
    ];

    const updateBg = (index: number) => {
        const element = serviceRefs.current[index];
        const widget = widgetRef.current;
        if (element && widget) {
            const topOff = element.offsetTop;
            const height = element.offsetHeight;
            setBgStyle({ top: `${topOff}px`, height: `${height}px` });
        }
    };

    useEffect(() => {
        updateBg(activeService);
    }, [activeService]);

    return (
        <section className="services-section" id="services-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-header text-center">
                            <h2 className="section-title wow fadeInUp" data-wow-delay=".3s">
                                My Project's
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="services-widget position-relative" ref={widgetRef} onMouseLeave={() => updateBg(activeService)}>
                            {services.map((service, index) => (
                                <div
                                    key={service.id}
                                    ref={el => { serviceRefs.current[index] = el }}
                                    className={`service-item ${activeService === index ? 'current' : ''} d-flex flex-wrap align-items-center wow fadeInUp`}
                                    data-wow-delay={`.${5 + index}s`}
                                    onMouseEnter={() => updateBg(index)}
                                    onClick={() => setActiveService(index)}
                                >
                                    <div className="left-box d-flex flex-wrap align-items-center">
                                        <span className="number">{service.number}</span>
                                        <h3 className="service-title">{service.title}</h3>
                                    </div>
                                    <div className="right-box">
                                        <p>{service.desc}</p>
                                    </div>
                                    <i className="flaticon-up-right-arrow"></i>
                                </div>
                            ))}
                            <div
                                className="active-bg wow fadeInUp"
                                data-wow-delay=".5s"
                                style={bgStyle}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
