import "./Footer.css";

function Footer() {
  return (
    <footer id="footer" className="footer">

      <div className="container text-center">

        <h3 className="footer-title">
          Let's Connect
        </h3>

        <div className="social-icons">

          <a
            href="mailto:ndakhairunnisa94@gmail.com"
            className="social-icon"
          >
            <i className="bi bi-envelope-fill"></i>
          </a>

          <a
            href="https://wa.me/6281323664628"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="bi bi-whatsapp"></i>
          </a>

          <a
            href="https://linkedin.com/in/nida-khairunnisa-kusumawardhani-192b59363"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="bi bi-linkedin"></i>
          </a>

          <a
            href="https://github.com/Khairunnisa28"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="bi bi-github"></i>
          </a>

        </div>

        <p className="footer-description">
          Open to collaboration, curriculum development,
          artificial intelligence, data science,
          and STEM education opportunities.
        </p>

        <p className="copyright">
          © {new Date().getFullYear()} Nida Khairunnisa.
          All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;