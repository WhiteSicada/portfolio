import React, { useState } from "react";
import { servicesArray } from "../data/ServicesData";

function Services() {
  const [showModal, setShowModal] = useState(false);
  const [serviceSelected, setServiceSelected] = useState(0);
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I Offer</span>
      <div className="services__container container grid">
        {servicesArray.map((item, index) => (
          <div className="services__content" key={index}>
            <div
              onClick={() => {
                setServiceSelected(index);
                setShowModal(true);
              }}
            >
              {item.serviceIcon}
              <h3 className="services__title">
                {item.serviceTitle1} <br /> {item.serviceTitle2}
              </h3>
              <span className="button__type2 button--flex button--small button--link services__button">
                View More <i className="uil uil-arrow-right button__icon"></i>
              </span>
            </div>
          </div>
        ))}
      </div>
      {showModal && (
        <Modal
          setShowModal={setShowModal}
          item={servicesArray[serviceSelected]}
        />
      )}
    </section>
  );
}

const Modal = ({ item, setShowModal }) => (
  <div className="services__modal">
    <div className="services__modal-content">
      <h4 className="services__modal-title">
        {item.serviceTitle1} <br /> {item.serviceTitle2}
      </h4>
      <i
        className="uil uil-times services__modal-close"
        onClick={() => setShowModal(false)}
      ></i>

      <ul className="grid services__modal-services">
        {item.modal.map((subItem, index) => (
          <li className="services__modal-service" key={index}>
            <i className="uil uil-check-circle services__modal-icon"></i>
            <p>{subItem.name}</p>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Services;
