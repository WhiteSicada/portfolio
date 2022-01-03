import React, { useState } from "react";
import { qualificationsArray } from "../data/QualificationsData";

function Qualifications() {
  const [selectedQualificatoinType, setSelectedQualificatoinType] =
    useState("Education");
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Story</span>
      <QualificationHeader
        selectedQualificatoinType={selectedQualificatoinType}
        setSelectedQualificatoinType={setSelectedQualificatoinType}
      />
      <div className="qualification__container container">
        <div className="qualification__sections">
          {selectedQualificatoinType == "Education" ? (
            <QualificationItem i={0} />
          ) : (
            <QualificationItem i={1} />
          )}
        </div>
      </div>
    </section>
  );
}

const QualificationHeader = ({
  selectedQualificatoinType,
  setSelectedQualificatoinType,
}) => (
  <div className="qualification__tabs">
    <div
      className="qualification__button button--flex"
      style={{
        color:
          selectedQualificatoinType === "Education" ? "var(--first-color)" : "",
      }}
      onClick={() => setSelectedQualificatoinType("Education")}
    >
      <i className="uil uil-graduation-cap qualification__icon"></i>
      Education
    </div>
    <div
      style={{
        color: selectedQualificatoinType === "Work" ? "var(--first-color)" : "",
      }}
      className="qualification__button button--flex"
      onClick={() => setSelectedQualificatoinType("Work")}
    >
      <i className="uil uil-briefcase-alt qualification__icon"></i>
      Work
    </div>
  </div>
);

const QualificationItem = ({ i }) => (
  <div className="qualification__content">
    {qualificationsArray[i].qualifications.map((subItem, index) => (
      <div key={index}>
        {subItem.direction === "left" ? (
          <div className="qualification__data">
            <div>
              <h3 className="qualification__title">{subItem.title}</h3>
              <span className="qualification__subtitle">
                {subItem.subTitle}
              </span>
              <div className="qualification__calendar">
                <i className="uil uil-calendar-alt"></i> {subItem.calendar}
              </div>
            </div>
            <div>
              <div className="qualification__rounder"></div>
              {!subItem.end && <div className="qualification__line"></div>}
            </div>
          </div>
        ) : (
          <div className="qualification__data">
            <div></div>
            <div>
              <div className="qualification__rounder"></div>
              {!subItem.end && <div className="qualification__line"></div>}
            </div>
            <div>
              <h3 className="qualification__title">{subItem.title}</h3>
              <span className="qualification__subtitle">
                {subItem.subTitle}
              </span>
              <div className="qualification__calendar">
                <i className="uil uil-calendar-alt"></i> {subItem.calendar}
              </div>
            </div>
          </div>
        )}
      </div>
    ))}
  </div>
);

export default Qualifications;
