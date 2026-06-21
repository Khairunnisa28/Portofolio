import "./About.css";

function About() {
  return (
    <section id="about" className="about-section py-5">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="fw-bold">About Me</h2>
          <p className="text-muted">
            Get to know more about my professional background.
          </p>
        </div>

        <div className="row g-4 align-items-center">

          {/* Left */}
          <div className="col-lg-7">

            <h3 className="fw-bold mb-4">
              Product & Curriculum Manager, Educator, and Technology Enthusiast
            </h3>

            <p>
              I am a Product & Curriculum Manager with experience in
              developing Coding, AI, IoT, Data Science, and Web Development
              curricula for K-12 education, universities, and industry
              training programs.
            </p>

            <p>
              My background combines educational technology, software
              development, and data analytics, allowing me to design
              impactful learning experiences while building innovative
              technology solutions.
            </p>

            <p>
              I am currently pursuing a Master's degree in Informatics at
              Telkom University with a research focus on Artificial
              Intelligence and Social Computing.
            </p>

          </div>

          {/* Right */}
          <div className="col-lg-5">

            <div className="card shadow-sm border-0 about-card">
              <div className="card-body">

                <h4 className="mb-4 fw-bold">
                  Profile Summary
                </h4>

                <div className="mb-3">
                  <strong>Education</strong>
                  <p className="mb-0">
                    M.Sc. Informatics Candidate
                  </p>
                </div>

                <div className="mb-3">
                  <strong>University</strong>
                  <p className="mb-0">
                    Telkom University
                  </p>
                </div>

                <div className="mb-3">
                  <strong>Current Role</strong>
                  <p className="mb-0">
                    Product & Curriculum Manager
                  </p>
                </div>

                <div className="mb-3">
                  <strong>Specialization</strong>
                  <p className="mb-0">
                    STEM Education, Curriculum Design,
                    Web Development, Data Analytics
                  </p>
                </div>

                <div>
                  <strong>Research Interest</strong>
                  <p className="mb-0">
                    Artificial Intelligence,
                    Educational Technology,
                    Social Computing
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;