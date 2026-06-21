import "./Projects.css";

import curriculumImg from "../assets/ai-curriculum.jpg";
import dashboardImg from "../assets/dashboard.jpg";
import cnnImg from "../assets/cnn-project.jpg";
import hockeyImg from "../assets/air-hockey.jpg";
import narutoImg from "../assets/naruto-clone.jpg";
import iotImg from "../assets/iot-monitoring.jpg";

function Projects() {
  const projects = [
    {
      image: curriculumImg,
      category: "Curriculum Innovation",
      title: "AI Curriculum Framework",
      description:
        "Designed AI learning pathways, lesson plans, assessments, and project-based learning activities.",
      tech: ["AI", "STEM", "Curriculum Design"],
    },
    {
      image: dashboardImg,
      category: "Data Science & Analytics",
      title: "Educational Analytics Dashboard",
      description:
        "Interactive dashboard for monitoring learner performance and curriculum effectiveness.",
      tech: ["Python", "Tableau", "Analytics"],
    },
    {
      image: cnnImg,
      category: "AI Engineer",
      title: "Smoker Identification using CNN",
      description:
        "Computer vision project for smoker identification using deep learning models.",
      tech: ["Python", "TensorFlow", "CNN"],
    },
    {
      image: hockeyImg,
      category: "AI Engineer",
      title: "Hand Air Hockey",
      description:
        "Real-time hand tracking game powered by MediaPipe and OpenCV.",
      tech: ["OpenCV", "MediaPipe", "Computer Vision"],
    },
    {
      image: narutoImg,
      category: "AI Engineer",
      title: "Naruto Shadow Clone Effect",
      description:
        "Gesture recognition and segmentation effect inspired by Naruto's Kage Bunshin.",
      tech: ["OpenCV", "MediaPipe", "Segmentation"],
    },
    {
      image: iotImg,
      category: "IoT & Robotics",
      title: "Smart IoT Monitoring System",
      description:
        "Real-time environmental monitoring using sensors and cloud platforms.",
      tech: ["Micro:bit", "IoT", "ThingSpeak"],
    },
  ];

  return (
    <section id="projects" className="projects-section py-5">

      <div className="container">

        <div className="text-center mb-5">
          <h2 className="fw-bold">
            Selected Projects & Research
          </h2>

          <p className="text-muted">
            Highlighting projects across curriculum innovation,
            artificial intelligence, data science, and IoT.
          </p>
        </div>

        <div className="row g-4">

          {projects.map((project, index) => (
            <div className="col-lg-4 col-md-6" key={index}>

              <div className="card project-card h-100">

                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />

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

                  <button className="btn btn-outline-primary btn-sm">
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