import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">

      <div className="container">

        {/* Logo */}
        <a className="navbar-brand fw-bold" href="#hero">
          Nida<span className="text-primary">.</span>
        </a>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav ms-auto align-items-lg-center">

            <li className="nav-item">
              <a className="nav-link" href="#hero">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#experience">
                Experience
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#skills">
                Skills
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#publication">
                Publications
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#certificates">
                Certificates
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#footer">
                Contact
              </a>
            </li>

            <li className="nav-item ms-lg-3">
              <a
                href="https://drive.google.com/file/d/1kPBzPeOfRB1VFSUz_jYOVjBirvo2WU7f/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary rounded-pill px-4"
              >
                <i className="bi bi-download me-2"></i>
                Download CV
              </a>
            </li>

          </ul>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;