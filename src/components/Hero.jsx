import "./Hero.css";
import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="container">

        <div className="row align-items-center min-vh-100">

          {/* Left Side */}
          <div className="col-lg-7">

            <span className="badge bg-primary mb-3 px-3 py-2">
              Welcome to My Portfolio
            </span>

            <h1 className="display-4 fw-bold mb-3">
              Hi, I'm{" "}
              <span className="text-primary">
                Nida Khairunnisa Kusumawardhani
              </span>
            </h1>

            <h3 className="hero-title mb-4">
              Product & Curriculum Manager
            </h3>

            <h5 className="text-secondary mb-4">
              EdTech Curriculum & Program | Data Science | STEM Educator
            </h5>

            <p className="hero-description">
              Experienced in curriculum development,
              web development, data analytics, and STEM education
              with experience working with schools, universities,
              and industry partners.
            </p>

            <div className="d-flex flex-wrap gap-3 mt-4">

              <a
                href="/CV_Nida_Khairunnisa.pdf"
                className="btn btn-primary btn-lg"
              >
                <i className="bi bi-download me-2"></i>
                Download CV
              </a>

              <a
                href="#projects"
                className="btn btn-outline-primary btn-lg"
              >
                View Projects
              </a>

            </div>

          </div>

          {/* Right Side */}
          <div className="col-lg-5 text-center mt-5 mt-lg-0">

            <div className="profile-wrapper">

              <img
                src={profile}
                alt="Nida Khairunnisa"
                className="img-fluid profile-image shadow-lg"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;