import "./Skills.css";

function Skills() {
  const skillCategories = [
    {
      icon: "bi-code-slash",
      title: "Web Development",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "ReactJS",
        "NodeJS",
        "ExpressJS",
        "MySQL",
        "Git",
        "Vite"
      ]
    },
    {
      icon: "bi-bar-chart-line-fill",
      title: "Data Analytics & AI",
      skills: [
        "Python",
        "Machine Learning",
        "Data Analysis",
        "Pandas",
        "NumPy",
        "Tableau",
        "Looker Studio",
        "TensorFlow",
        "Scikit-Learn"
      ]
    },
    {
      icon: "bi-cpu-fill",
      title: "IoT & Emerging Technologies",
      skills: [
        "Micro:bit",
        "Arduino",
        "IoT Systems",
        "Blynk",
        "ThingSpeak",
        "Virtual Reality",
        "Unity"
      ]
    },
    {
      icon: "bi-mortarboard-fill",
      title: "Curriculum & Education",
      skills: [
        "Curriculum Design",
        "STEM Education",
        "Assessment Design",
        "Teacher Training",
        "Project-Based Learning",
        "Learning Experience Design",
        "Educational Technology"
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section py-5">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="fw-bold">Skills</h2>
          <p className="text-muted">
            Technical expertise, educational leadership, and emerging technologies.
          </p>
        </div>

        <div className="row g-4">

          {skillCategories.map((category, index) => (
            <div className="col-lg-6" key={index}>

              <div className="card skill-card border-0 shadow-sm h-100">

                <div className="card-body">

                  <div className="d-flex align-items-center mb-4">

                    <div className="skill-icon me-3">
                      <i className={`bi ${category.icon}`}></i>
                    </div>

                    <h4 className="mb-0 fw-bold">
                      {category.title}
                    </h4>

                  </div>

                  <div className="skill-tags">

                    {category.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="badge skill-badge"
                      >
                        {skill}
                      </span>
                    ))}

                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;