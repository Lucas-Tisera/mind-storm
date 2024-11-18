import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <Link
            href="https://github.com/lucas-tisera"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} />
          </Link>
          <Link
            href="https://linkedin.com/in/lucas-tisera"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
          </Link>
        </div>
        <div className="footer-info">
          <p>© {new Date().getFullYear()} Lucas Tisera. All rights reserved.</p>
          <p>Built with Next.js and ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
