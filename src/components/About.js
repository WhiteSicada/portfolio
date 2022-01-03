import React, { useRef } from "react";

function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My Introduction</span>
      <div className="about__container container grid">
        <img
          src={require("../assets/img/adnane2.png")}
          alt=""
          className="about__img"
        />
        <div className="about__data">
          <p className="about__description">
            My passion for web development when I created my first program
            "Hello World".From then on, I made every effort to break into this
            path, while taking pleasure in the various projects developed. This
            required a radical change of course in order to be able to fully
            exploit it.
          </p>
          <div className="about__info">
            <div>
              <span className="about__info-title">01+</span>
              <span className="about__info-name">
                Years <br /> experience
              </span>
            </div>
            <div>
              <span className="about__info-title">20+</span>
              <span className="about__info-name">
                Completed <br /> projects
              </span>
            </div>
            <div>
              <span className="about__info-title">01+</span>
              <span className="about__info-name">
                Companies <br /> worked
              </span>
            </div>
          </div>

          <div className="about__buttons">
            <a
              download={"Adnane-Drissi-CV"}
              href={require("../assets/pdf/Alexa-Cv.pdf")}
              className={"button button--flex"}
            >
              Download CV<i className="uil uil-download-alt button__icon"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
