import "./Certificates.css";

function Certificates() {

  const certificates = [
    {
      title: "STEM Certified Educator",
      issuer: "STEM.org Educational Research",
      year: "2025",
      icon: "bi-award-fill",
      link: "https://drive.google.com/file/d/131kQG2f1s6ko7k9A3d8VhQdqXNRU6hlE/view?usp=sharing"
    },
    {
      title: "Coding & Artificial Intelligence Instructor",
      issuer: "Kemendikdasmen",
      year: "2025",
      icon: "bi-mortarboard-fill",
      link: "https://drive.google.com/file/d/1iNjq43PSjoMWLgZcvqoeiZYXGKn8-Y9R/view?usp=sharing"
    },
    {
      title: "Data Scientist Competency Certificate",
      issuer: "LSP Digital Kreatif Solusi (Licensed by BNSP Indonesia)",
      year: "2026",
      icon: "bi-patch-check-fill",
      link: "https://drive.google.com/file/d/1GxzyccYsQAooSnc9u8PeQVvyND6z-znZ/view?usp=sharing"
    },
    {
      title: "Data Science Certification",
      issuer: "DQLab",
      year: "2026",
      icon: "bi-graph-up-arrow",
      link: "https://academy.dqlab.id/certificate/pdf/DQLABBMLABB22OEVAQH"
    },
    {
      title: "Best Employee Award",
      issuer: "Educourse.id",
      year: "2024",
      icon: "bi-trophy-fill",
      link: "#"
    }
  ];

  return (
    <section
      id="certificates"
      className="certificates-section py-5"
    >
      <div className="container">

        <div className="text-center mb-5">

          <h2 className="fw-bold">
            Certificates & Credentials
          </h2>

          <p className="text-muted">
            A collection of professional certifications,
            instructor credentials, and continuous learning achievements.
          </p>

        </div>

        <div className="row g-4">

          {certificates.map((cert, index) => (

            <div
              className="col-lg-3 col-md-6"
              key={index}
            >

              <div className="certificate-card">

                <div className="certificate-icon">
                  <i className={`bi ${cert.icon}`}></i>
                </div>

                <h5>{cert.title}</h5>

                <p className="issuer">
                  {cert.issuer}
                </p>

                <span className="year">
                  {cert.year}
                </span>

                <div className="mt-3">

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary btn-sm"
                  >
                    View Credential
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Certificates;