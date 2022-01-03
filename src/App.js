import "./App.css";
import React from "react";
import About from "./components/About";
import Header from "./components/Header";
import Main from "./components/Main";
import Portfolio from "./components/Portfolio";
import ProjectsInMind from "./components/ProjectsInMind";
import Qualifications from "./components/Qualifications";
import Services from "./components/Services";
import Skills from "./components/Skills";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import ScrollUp from "./components/ScrollUp";
import useLocalStorage from "use-local-storage";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  return (
    <div className="app" data-theme={theme}>
      <Header theme={theme} setTheme={setTheme} />
      <Main />
      <About />
      <Skills />
      <Qualifications />
      <Services />
      <Portfolio />
      <ProjectsInMind />
      {/* <Testemonial /> */}
      <ContactMe />
      <Footer />
      <ScrollUp />
    </div>
  );
}

export default App;
