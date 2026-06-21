import "./Publication.css";

function Publication() {
  const publications = [
    {
      title:
        "A Comparative Analysis of CNN and Vision Transformer Models for Smoker Identification",
      authors:
        "Atmajaya, P. A., Yusuf, M. R. Y., Kusumawardhani, N. K., Sulistiyo, M. D., & Ihsan, A. F.",
      venue: "IEEE ICoICT",
      year: "2024",
      tags: [
        "Computer Vision",
        "Deep Learning",
        "CNN",
        "Vision Transformer"
      ],
      link: "https://ieeexplore.ieee.org/document/10698664"
    },
    {
      title:
        "Web Recommended System Library Book Selection Using Item-Based Collaborative Filtering Method",
      authors:
        "Kusumawardhani, N. K., Nasrun, M., & Setianingsih, C.",
      venue: "IEEE TALE",
      year: "2019",
      tags: [
        "Recommendation System",
        "Collaborative Filtering",
        "Web Development",
        "Machine Learning"
      ],
      link: "https://ieeexplore.ieee.org/document/9225960"
    }
  ];

  return (
    <section
      id="publication"
      className="publication-section py-5"
    >
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="fw-bold">
            Publications
          </h2>

          <p className="text-muted">
            Research contributions presented at international conferences, highlighting the intersection of technology, innovation, and education.
          </p>
        </div>

        <div className="publication-list">

          {publications.map((pub, index) => (

            <div
              className="publication-card"
              key={index}
            >

              <div className="publication-year">
                {pub.year}
              </div>

              <div className="publication-content">

                <h4>
                  {pub.title}
                </h4>

                <p className="publication-authors">
                  {pub.authors}
                </p>

                <p className="publication-venue">
                  {pub.venue}
                </p>

                <div className="publication-tags">

                  {pub.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="publication-tag"
                    >
                      {tag}
                    </span>
                  ))}

                </div>

                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary btn-sm mt-3"
                >
                  View Publication
                </a>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Publication;