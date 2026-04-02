'use client';

export default function Resume() {
    const education = [
        {
            time: "2021 - 2024 (73.5%)",
            title: "B.Sc. in Computer Science",
            institute: "Yashwantrao Chavan Institute of Science, Satara"
        },
        {
            time: "2021 (85%)",
            title: "Class XII (HSC)",
            institute: "Parents’ Association English School & Jr. College of Science, Satara"
        },
        {
            time: "2019 (79.40%)",
            title: "Class X (SSC)",
            institute: "Annasaheb Kalyani Vidyalaya, Satara"
        }
    ];

    const internship = [
        {
            time: "Jan 2024 - Present",
            title: "Full Stack Developer",
            institute: "Coreline IT Solutions Pvt. Ltd — Pune, Maharashtra"
        },
        {
            time: "2023 - 2024",
            title: "Php Web Developer (Intern)",
            institute: "Yashwantrao Chavan Institute of Science of Satara"
        },
        {
            time: "July 2024 - Aug 2024",
            title: "ReactJS Developer Intern",
            institute: "CodSoft PVT LTD."
        }
    ];

    return (
        <section className="resume-section" id="resume-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="section-header wow fadeInUp" data-wow-delay=".3s">
                            <h2 className="section-title">My Education</h2>
                        </div>

                        <div className="resume-widget">
                            {education.map((item, index) => (
                                <div key={index} className="resume-item wow fadeInLeft" data-wow-delay={`.${4 + index}s`}>
                                    <div className="time">{item.time}</div>
                                    <h3 className="resume-title">{item.title}</h3>
                                    <div className="institute">{item.institute}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="section-header wow fadeInUp" data-wow-delay=".4s">
                            <h2 className="section-title">My Internship</h2>
                        </div>

                        <div className="resume-widget">
                            {internship.map((item, index) => (
                                <div key={index} className="resume-item wow fadeInRight" data-wow-delay={`.${5 + index}s`}>
                                    <div className="time">{item.time}</div>
                                    <h3 className="resume-title">{item.title}</h3>
                                    <div className="institute">
                                        {item.institute}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
