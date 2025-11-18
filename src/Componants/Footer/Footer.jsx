import "./Footer.css";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer id="footer">
      <div className="footer_container">
        {/* Left side */}
        <div className="footer_left">
          <h3>Shaimaa Abu Shqair </h3>
          <p>© {new Date().getFullYear()} All Rights Reserved</p>
        </div>

        {/* Middle - Navigation */}
        <ul className="footer_links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Right side - Social Icons */}
        <div className="footer_socials">
          <a href="mailto:shaimaaabushqair@gmail.com" target="_blank" rel="noreferrer">
            <FaEnvelope />
          </a>
          <a href="https://www.linkedin.com/in/shaimaa-abu-shqair-690974252" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Shaimaa-8" target="_blank" rel="noreferrer">
            <FaGithub/>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
