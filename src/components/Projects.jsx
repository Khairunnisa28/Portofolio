import { useState } from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

function Projects() {

  const categories = [
    "All",
    "Curriculum Innovation",
    "Data Science & Analytics",
    "AI Engineer",
    "IoT & Robotics"
  ];

 const projects = [
  {
    category: "Curriculum Innovation",
    icon: "bi-journal-bookmark-fill",
    title: "AI Curriculum Framework",
    description:
      "Designed AI learning pathways, lesson plans, assessments, and project-based learning activities.",
    tech: ["AI", "STEM", "Curriculum Design"],
    link: "/projects/ai-curriculum-framework",
  },
  {
    category: "Data Science & Analytics",
    icon: "bi-bar-chart-fill",
    title: "Superstore Dashboard",
    description:
      "Interactive business intelligence dashboard featuring sales analytics, profit insights, and demand forecasting. Built with Streamlit using Prophet for time series forecasting, Moving Average as a baseline model, and rolling validation to evaluate forecasting performance.",
    tech: [
      "Python",
      "Streamlit",
      "Pandas",
      "Plotly",
      "Prophet",
      "Time Series Forecasting"
    ],
    link: "https://superstoredashboards.streamlit.app/",
  },
  {
    category: "AI Engineer",
    icon: "bi-cpu-fill",
    title: "Kage Bunshin Effect",
    description:
      "AI-powered computer vision project that generates a real-time Kage Bunshin visual effect using human segmentation, background subtraction, and image compositing techniques.",

    tech: [
      "Python",
      "OpenCV",
      "MediaPipe",
      "NumPy",
      "Computer Vision"
    ],
    link: "https://github.com/Khairunnisa28/Kage-bunshin/blob/main/kage_bunshin.py",
  },
  {
    category: "AI Engineer",
    icon: "bi-controller",
    title: "Hand Air Hockey",
    description:
      "Interactive air hockey game controlled by real-time hand tracking using computer vision. The system detects hand movements with MediaPipe and OpenCV, enabling touchless gameplay with smooth paddle interaction.",
    tech: [
      "Python",
      "OpenCV",
      "MediaPipe",
      "Computer Vision",
      "Hand Tracking"
    ],
    link: "https://github.com/Khairunnisa28/hand-hockey",
  },
  {
    category: "IoT & Robotics",
    icon: "bi-router-fill",
    title: "Smart IoT Monitoring System",
    description:
      "Real-time environmental monitoring using sensors and cloud platforms.",
    tech: ["Micro:bit", "IoT", "ThingSpeak"],
    link: "/projects/smart-iot-monitoring-system",
  },
];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === selectedCategory
        );

  return (
    <section id="projects" className="projects-section py-5">

      <div className="container">

        {/* Heading */}

        <div className="text-center mb-5">
          <h2 className="fw-bold">
            Selected Projects
          </h2>

          <p className="text-muted">
            Projects across curriculum innovation,
            data science, artificial intelligence,
            and IoT systems.
          </p>
        </div>

        {/* Filter */}

        <div className="project-filter mb-5">

          {categories.map((category) => (
            <button
              key={category}
              className={`btn ${
                selectedCategory === category
                  ? "btn-primary"
                  : "btn-outline-primary"
              }`}
              onClick={() =>
                setSelectedCategory(category)
              }
            >
              {category}
            </button>
          ))}

        </div>

        {/* Cards */}

        <div className="row g-4">

          {filteredProjects.map((project, index) => (

            <div
              className="col-lg-4 col-md-6"
              key={index}
            >

              <div className="card project-card h-100">

                {/* Placeholder */}

                <div className="project-placeholder">
                  <i className={`bi ${project.icon}`}></i>
                </div>

                {/* Content */}

                <div className="card-body">

                  <span className="project-category">
                    {project.category}
                  </span>

                  <h5 className="project-title mt-3">
                    {project.title}
                  </h5>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="mb-3">

                    {project.tech.map((item, idx) => (
                      <span
                        className="tech-badge"
                        key={idx}
                      >
                        {item}
                      </span>
                    ))}

                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary btn-sm project-btn"
                  >
                    View Details
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

export default Projects;