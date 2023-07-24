import { Link } from "react-router-dom"
import { navOptions } from "../../helper"
import "./Footer.scss/"
const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer__nav" id="navigation">
        <ul className="footer__nav-list">
          {navOptions.map((item) => (
            <li
              className="footer__nav-list-items"
              key={item.text}
            >
              <Link to={item.link} className="footer__nav-list-links">
                <i className={item.icon}></i>
                <span className="elementos-menu"> {item.text} </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <nav className="footer__nav" id="social">
        <ul className="footer__nav-list">
          <li>
            <a href="https://www.linkedin.com/in/julianmoran/" target="_blank">
              <i className="fab fa-linkedin-in footer__social-icon"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/julianmoran1/" target="_blank">
              <i className="fab fa-github footer__social-icon"></i>
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer