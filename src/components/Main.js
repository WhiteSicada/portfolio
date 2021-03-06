import React from "react";
function Main() {
  return (
    <section className="home section" id="home">
      <div className="home__container grid container">
        <div className="home__content grid">
          <div className="home__social">
            <a
              href="https://www.linkedin.com/in/mohamed-adnane-drissi-lahsini-b22b34185/"
              target="_blank"
              className="home__social__icon"
            >
              <i className="uil uil-linkedin-alt"></i>
            </a>
            <a
              href="https://github.com/WhiteSicada"
              target="_blank"
              className="home__social__icon"
            >
              <i className="uil uil-github-alt"></i>
            </a>
            <a href="" target="_blank" className="home__social__icon">
              <i className="uil uil-dribbble"></i>
            </a>
          </div>
          <div className="home__img">
            <svg
              className="home__blob"
              viewBox="0 0 200 187"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <mask id="mask0" mask-type="alpha">
                <path
                  d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                />
              </mask>
              <g mask="url(#mask0)">
                <path
                  d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
        165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
        129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
        -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                />
                <image
                  x="30"
                  y="-10"
                  className="home__blob__img"
                  xlinkHref={require("../assets/img/adnane3.png")}
                />
              </g>
            </svg>
          </div>

          <div className="home__data">
            <h1 className="home__title">Hi, I am Adnane</h1>
            <h3 className="home__subtitle">FullStack Developer</h3>
            <p className="home__description">
              High Level experience in web and mobile development knowledge,
              producing quality work
            </p>
            <a href="#contactme" className="button button--flex">
              Contact Me <i className="uil uil-message button__icon"></i>
            </a>
          </div>
        </div>

        <div className="home__scroll">
          <a href="#about" className="home__scroll-button button--flex">
            <i className="uil uil-mouse-alt home__scroll-mouse"></i>
            <span className="home__scroll-name">Scroll Down</span>
            <i className="uil uil-arrow-down home__scroll-arrow"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Main;
