import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { contactArray } from "../data/contactData";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import LoadingButton from "@mui/lab/LoadingButton";

const options = {
  position: "top-center",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};
function ContactMe() {
  const [loading, setLoading] = useState(false);
  const sendEmail = (values) => {
    console.log(values);
    setLoading(true);
    emailjs
      .send(
        "service_49carem",
        "template_l3nj8im",
        values,
        "user_ati9cMlo7yyWtdgzTPpZK"
      )
      .then(
        (response) => {
          setLoading(false);
          toast.success(response.text, options);
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };
  return (
    <section className="contact section" id="contactme">
      <ToastContainer />
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in touch</span>

      <div className="contact__container container grid">
        <div>
          {contactArray.map((item, index) => (
            <div className="contact__information" key={index}>
              {item.icon}
              <div>
                <h3 className="contact__title">{item.title}</h3>
                <span className="contact__subtitle">{item.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
        <Formik
          initialValues={{
            name: "",
            email: "",
            project: "",
            message: "",
          }}
          // onSubmit={(values, setSubmitting) => {
          //   sendEmail(values, setSubmitting);
          // }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit} className="grid contact__form">
              <div className="contact__inputs grid">
                <div className="contact__content">
                  <label htmlFor="" className="contact__label">
                    Name
                  </label>
                  <input
                    className="contact__input"
                    type="text"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                  {errors.name && touched.name && errors.name}
                </div>

                <div className="contact__content">
                  <label htmlFor="" className="contact__label">
                    Email
                  </label>
                  <input
                    className="contact__input"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {errors.email && touched.email && errors.email}
                </div>
              </div>

              <div className="contact__content">
                <label htmlFor="" className="contact__label">
                  Project
                </label>
                <input
                  className="contact__input"
                  type="text"
                  name="project"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.project}
                />
              </div>
              <div className="contact__content">
                <label htmlFor="" className="contact__label">
                  Message
                </label>
                <textarea
                  className="contact__input"
                  id=""
                  cols="0"
                  name="message"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
                  rows="7"
                ></textarea>
              </div>
              <LoadingButton
                onClick={() => sendEmail(values)}
                endIcon={<i className="uil uil-message button__icon"></i>}
                loading={loading}
                loadingPosition="center"
                variant="contained"
                className="button button--flex"
              >
                Send
              </LoadingButton>
              {/* <div style={{ textAlign: "center" }}>
                <button type="submit" className="button button--flex">
                  Send Message
                  <i className="uil uil-message button__icon"></i>
                </button>
              </div> */}
            </form>
          )}
        </Formik>
      </div>
    </section>
  );
}

export default ContactMe;
