import React from "react";
import { footerArray, footerSocials } from "../data/Footer";

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer__bg">
        <div className="footer__container grid container">
          <div>
            <h1 className="footer__title">White Sicada</h1>
            <span className="footer__subtitle">FullStack Developer</span>
          </div>

          <ul className="footer__links">
            {footerArray.map((item, index) => (
              <li key={index}>
                <a href={`#${item.link}`} className="footer__link">
                  {item.text}
                </a>
              </li>
            ))}
          </ul>

          <div className="footer__socails">
            {footerSocials.map((item, index) => (
              <a
                href={item.link}
                className="footer__social"
                target="_blank"
                key={index}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        <p className="footer__copy">&#169; BEdicode. All right reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
