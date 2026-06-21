import "./Experience.css";

function Experience() {
  const experiences = [
    {
      period: "2025 - Present",
      title: "Product & Curriculum Manager",
      company: "Educourse.id",
      achievements: [
        "Promoted from Curriculum Staff to Manager within 12 months.",
        "Lead curriculum quality assurance across 6 technology domains.",
        "Collaborate with institutional stakeholders and industry partners."
      ]
    },
    {
      period: "2024 - 2025",
      title: "Product & Curriculum Staff",
      company: "Educourse.id",
      achievements: [
        "Developed 168 learning modules and 198 industry projects.",
        "Designed curriculum frameworks and assessments.",
        "Improved learner engagement by up to 80%."
      ]
    },
    {
      period: "2023 - Present",
      title: "Coding, Robotics & Technology Educator",
      company: "Educourse.id",
      achievements: [
        "Delivered programs to 200+ students.",
        "Accumulated 900+ instructional hours.",
        "Mentored students to 3rd Place INDIBIZ IoT Challenge."
      ]
    },
    {
      period: "2023 - 2024",
      title: "Freelance Master Teacher",
      company: "Ruangguru - Brain Academy",
      achievements: [
        "Taught Mathematics and Informatics.",
        "Prepared students for SNBT examinations."
      ]
    },
    {
      period: "2022",
      title: "Junior Developer",
      company: "PT Walden Global Services",
      achievements: [
        "Built e-commerce applications using ReactJS and NodeJS."
      ]
    },
    {
      period: "2020",
      title: "IT Staff",
      company: "Yayasan Rumah Yatim Indonesia",
      achievements: [
        "Maintained internal financial reporting systems."
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="fw-bold">Experience</h2>
          <p className="text-muted">
            My professional journey in education and technology.
          </p>
        </div>

        <div className="timeline">

          {experiences.map((exp, index) => (
            <div className="timeline-item" key={index}>

              <div className="timeline-dot"></div>

              <div className="timeline-content">

                <span className="badge bg-primary mb-2">
                  {exp.period}
                </span>

                <h4>{exp.title}</h4>

                <h6>{exp.company}</h6>

                <ul>
                  {exp.achievements.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;