import { Link } from "react-router-dom"
import { navOptions } from "../../helper"
import "./Header.scss"

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/"><h1 className="header__title">Portfolio de Julián Morán</h1></Link>

        {/* <a href="#nav" className="abrir">
          <img src="src/images/open-menu.png" alt="" />
        </a> */}

        <nav id="nav" className="header__nav">
          {/* <a href="#" className="cerrar">
            <img src="src/images/close.png" alt="" />
          </a> */}

          <ul>
            {navOptions.map((item) => (
              <li
                className="animate__animated animate__backInDown header__nav-items"
                key={item.text}
              >
                <Link to={item.link} className="header__nav-items-link">
                  <i className={`${item.icon} header__nav-items-icon`}></i>
                  <span className="elementos-menu"> {item.text} </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
  </header>
  )
}

export default Header