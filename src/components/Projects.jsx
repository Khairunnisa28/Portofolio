import { useState } from "react";
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
    },
    {
      category: "Data Science & Analytics",
      icon: "bi-bar-chart-fill",
      title: "Educational Analytics Dashboard",
      description:
        "Interactive dashboard for monitoring learner performance and curriculum effectiveness.",
      tech: ["Python", "Tableau", "Analytics"],
    },
    {
      category: "AI Engineer",
      icon: "bi-cpu-fill",
      title: "Smoker Identification using CNN",
      description:
        "Computer vision project for smoker identification using deep learning models.",
      tech: ["Python", "TensorFlow", "CNN"],
    },
    {
      category: "AI Engineer",
      icon: "bi-controller",
      title: "Hand Air Hockey",
      description:
        "Real-time hand tracking game powered by MediaPipe and OpenCV.",
      tech: ["OpenCV", "MediaPipe", "Computer Vision"],
    },
    {
      category: "AI Engineer",
      icon: "bi-magic",
      title: "Naruto Shadow Clone Effect",
      description:
        "Gesture recognition and segmentation effect inspired by Naruto's Kage Bunshin.",
      tech: ["OpenCV", "MediaPipe", "Segmentation"],
    },
    {
      category: "IoT & Robotics",
      icon: "bi-router-fill",
      title: "Smart IoT Monitoring System",
      description:
        "Real-time environmental monitoring using sensors and cloud platforms.",
      tech: ["Micro:bit", "IoT", "ThingSpeak"],
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

                  <button className="btn btn-outline-primary btn-sm project-btn">
                    View Details
                  </button>

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