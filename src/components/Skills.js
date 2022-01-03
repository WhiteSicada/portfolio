import React, { useState } from "react";
import { SkillsArray } from "../data/SkillsData";

function Skills() {
  const [skillSelected, setSkillSelected] = useState("FullStack Developer");
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Technical level</span>

      <div className="skills__container container grid">
        
          {SkillsArray.map((item, index) => (
            <div className="skills__content" key={index}>
              <div
                className="skills__header"
                onClick={() => setSkillSelected(item.skillTitle)}
              >
                {item.skillIcon}
                <div>
                  <h1 className="skills__title">{item.skillTitle}</h1>
                  <span className="skills__subtitle">{item.skillSubtitle}</span>
                </div>
                <i
                  className="uil uil-angle-down skills__arrow"
                  style={{
                    transform:
                      skillSelected === item.skillTitle
                        ? "rotate(-180deg)"
                        : "",
                  }}
                ></i>
              </div>

              {skillSelected === item.skillTitle ? (
                <div className="skills__list grid">
                  {item.skills.map((subItem, index) => (
                    <div className="skills__data" key={index + 6}>
                      <div className="skills__titles">
                        <h3 className="skills__name">{subItem.skillName}</h3>
                        <span className="skills__number">
                          {subItem.skillNumber}
                        </span>
                      </div>
                      <div className="skills__bar">
                        <span
                          style={{ width: subItem.skillNumber }}
                          className="skills__percentage"
                        ></span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
    </section>
  );
}

export default Skills;
