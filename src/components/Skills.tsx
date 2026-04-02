'use client';

export default function Skills() {
    const skills = [
        {
            name: "React.js / Next.js",
            percentage: "92%",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
            delay: ".3s"
        },
        {
            name: "Node.js / Express",
            percentage: "85%",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
            delay: ".4s"
        },
        {
            name: "MongoDB / MySQL",
            percentage: "85%",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
            delay: ".5s"
        },
        {
            name: "React Native / Flutter",
            percentage: "80%",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
            delay: ".6s"
        },
        {
            name: "Docker / Vercel",
            percentage: "85%",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
            delay: ".7s"
        },
        {
            name: "JWT / Security",
            percentage: "90%",
            icon: "https://jwt.io/img/pic_logo.svg",
            delay: ".8s"
        }
    ];

    return (
        <section className="skills-section" id="skills-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-header text-center">
                            <h2 className="section-title wow fadeInUp" data-wow-delay=".3s">My Skills</h2>
                            <p className="wow fadeInUp" data-wow-delay=".4s">
                                We turn your visions into reality with precision and creativity, 
                                ensuring your web presence stands out and captivates your audience
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="skills-widget d-flex flex-wrap justify-content-center align-items-center">
                            {skills.map((skill, index) => (
                                <div key={index} className="skill-item wow fadeInUp" data-wow-delay={skill.delay}>
                                    <div className="skill-inner">
                                        <div className="icon-box">
                                            <img src={skill.icon} alt={skill.name} />
                                        </div>
                                        <div className="number">{skill.percentage}</div>
                                    </div>
                                    <p>{skill.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
