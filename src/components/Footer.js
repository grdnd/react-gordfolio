import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-signup">
        <p className="footer-signup-heading">
          Leave your email if you would like to stay in touch!
        </p>
        {/* <p className="footer-signup-text">
        </p> */}
        <div className="input-areas">
          <form action="">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <div className="btn-width is-flex is-justify-content-start">
              <Link className="btn btn--outline btn--large" to="/contact">
                Sign-up
              </Link>
            </div>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About</h2>
            <Link to="/about-me">About Me</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/portfolio">Portfolio</Link>
          </div>
          <div className="footer-link-items border-right">
            <h2>Contact</h2>
            <Link to="/contact">Contact Me</Link>
            <Link to="/contact">gordfolio@gmail.com</Link>
            <p>( ### ) ### - ####</p>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/about-me" className="social-logo">
              <i className="fas fa-chess-rook" />
              GORDO
            </Link>
          </div>
          <small className="website-rights">
            © 2022 Gordon Do | Orange County, California
          </small>
          <div className="social-icons">
            <a
              className="social-icon-link linkedIn"
              href="https://www.linkedin.com/in/gord-folio/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </a>
            <a
              className="social-icon-link github"
              href="https://github.com/grdnd"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-github" />
            </a>
            <a
              className="social-icon-link email"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fas fa-envelope" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
