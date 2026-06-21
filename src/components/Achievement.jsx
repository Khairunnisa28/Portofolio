import "./Achievement.css";

function Achievement() {
  const achievements = [
    {
      number: "1000+",
      title: "Students",
      icon: "bi-people-fill",
    },
    {
      number: "20+",
      title: "Curriculum Developed",
      icon: "bi-journal-code",
    },
    {
      number: "10+",
      title: "Technology Projects",
      icon: "bi-code-slash",
    },
    {
      number: "IEEE",
      title: "Publication",
      icon: "bi-award-fill",
    },
  ];

  return (
    <section className="achievement-section py-5">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="fw-bold">
            Achievements & Impact
          </h2>

          <p className="text-muted">
            Highlights of my professional experience in
            education, technology, and research.
          </p>
        </div>

        <div className="row g-4">

          {achievements.map((item, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <div className="card achievement-card border-0 shadow-sm h-100">

                <div className="card-body text-center">

                  <i
                    className={`bi ${item.icon} achievement-icon`}
                  ></i>

                  <h2 className="fw-bold text-primary mt-3">
                    {item.number}
                  </h2>

                  <p className="mb-0">
                    {item.title}
                  </p>

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Achievement;