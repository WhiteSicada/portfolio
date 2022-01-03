import React from "react";

function ProjectsInMind() {
  return (
    <section className="project section">
      <div className="project__bg">
        <div className="project__container container grid">
          <div className="project__data">
            <h2 className="project__title">You have a new project</h2>
            <p className="project__description">
              Contact me and get discount of 30% on your new project.{" "}
            </p>
            <a href="#contactme" className="button__type2 button--flex button--white">
              Contact Me{" "}
              <i className="uil uil-message project_icon button__icon"></i>
            </a>
          </div>

          <img
            src={require("../assets/img/adnane1.png")}
            alt=""
            className="project__img"
          />
        </div>
      </div>
    </section>
  );
}

export default ProjectsInMind;
