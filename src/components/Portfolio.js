import React, { useState } from "react";
import { portfolioArray } from "../data/PortfolioData";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import Modal from "@mui/material/Modal";
import { Paper } from "@mui/material";


function Portfolio() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <section className="section portfolio" id="portfolio">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Most Recent work</span>
      <div className="portfolio__container container">
        <Grid container spacing={5} justifyContent="center" alignItems="center">
          {portfolioArray.map((item, index) => (
            <Grid item xs={12} md={6} align="center" key={index}>
              <Paper
                className="portfolio__content"
                style={{ backgroundColor: "var(--container-color)" }}
              >
                <img
                  src={require(`../assets/img/${item.file}/${item.image}`)}
                  alt=""
                  className="portfolio__img"
                />
                <div className="portfolio__data">
                  <h3 className="portfolio__title">{item.title}</h3>
                  <span
                    onClick={() => {
                      setSelectedProject(item);
                      handleOpen();
                    }}
                    className="button__type2 button--flex button--small button--link services__button"
                  >
                    View More
                    <i className="uil uil-arrow-right button__icon"></i>
                  </span>
                </div>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <h2 className="section__title">
            {selectedProject && selectedProject.title}
          </h2>
          {selectedProject && selectedProject.link != null && (
            <a
              href={selectedProject && selectedProject.link}
              className="section__title "
            >
              👉
              <span className="link__demo">Visit Website</span>
              👈
            </a>
          )}

          <span className="section__subtitle" style={{ marginTop: 10 }}>
            {selectedProject && selectedProject.description}
          </span>
          <Grid container spacing={3}>
            {selectedProject &&
              selectedProject.sections.map((item, index) => (
                <Grid item xs={12} sm={6} key={index} align="center">
                  <img
                    src={require(`../assets/img/${selectedProject.file}/${item.image}`)}
                    alt=""
                    className="modal__img"
                  />
                  <h5 className="section__title" style={{ marginTop: 10 }}>
                    {item.text}
                  </h5>
                </Grid>
              ))}
          </Grid>
        </Box>
      </Modal>
    </section>
  );
}
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "80%",
  height: "90%",
  overflow: "auto",
  transform: "translate(-50%, -50%)",
  borderRadius: 5,
  backgroundColor: "#fff",
  textAlign: "center",
  boxShadow: 24,
  p: 4,
};
export default Portfolio;
