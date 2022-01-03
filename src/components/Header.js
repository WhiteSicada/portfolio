import React, { useState } from "react";
import { headerItems } from "../data/HeaderData";


function Header({ theme, setTheme }) {
  const [headerStatus, setHeaderStatus] = useState(false);

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  return (
    <div className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          White Sicada
        </a>
        <div
          className={headerStatus ? "nav__menu__open" : "nav__menu__close"}
          id="nav-menu"
        >
          <ul className="nav__list grid">
            {headerItems.map((item, index) => (
              <li
                className="nav__item"
                key={index}
                onClick={() => setHeaderStatus(!headerStatus)}
              >
                <a
                  href={`#${item.headerLink}`}
                  className="nav__link active__link"
                >
                  {item.headerIcon} {item.headerText}
                </a>
              </li>
            ))}
          </ul>
          <i
            className="uil uil-times nav__close"
            id="nav-close"
            onClick={() => setHeaderStatus(!headerStatus)}
          ></i>
        </div>

        <div className="nav__btns">
          {/* Them Change button */}
          <i
            className={`uil ${
              theme === "light" ? "uil-moon" : "uil-sun"
            }  change__theme`}
            id="theme-button"
            onClick={() => {
              switchTheme();
            }}
          ></i>

          <div className="nav__toggle" id="nav-toggle">
            <i
              className=" nav__icon uil-apps"
              onClick={() => setHeaderStatus(!headerStatus)}
            ></i>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
